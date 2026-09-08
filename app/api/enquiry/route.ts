import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type EnquiryPayload = {
  formType?: string;
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  route?: string;
  message?: string;
  _honey?: string;
};

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const windowMs = 60_000;
const maxRequests = 5;

function getClientIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now > record.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count += 1;
  return false;
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function cleanEnvValue(value: string | undefined, fallback: string) {
  const cleaned = clean(value).replace(/^['"]+|['"]+$/g, "");
  return cleaned || fallback;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validate(payload: EnquiryPayload) {
  const name = clean(payload.name);
  const email = clean(payload.email);
  const message = clean(payload.message);

  if (name.length < 2 || name.length > 80) {
    return "Please enter your full name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please enter a valid email address.";
  }

  if (message.length < 10 || message.length > 2000) {
    return "Please enter a message between 10 and 2000 characters.";
  }

  return null;
}

function getErrorMessage(error: unknown) {
  if (!error) {
    return "Unknown email provider error.";
  }

  if (typeof error === "string") {
    return error;
  }

  if (typeof error === "object") {
    const candidate = error as { message?: string; name?: string };
    if (candidate.message) {
      return candidate.message;
    }

    try {
      return JSON.stringify(error);
    } catch {
      return candidate.name || "Unknown email provider error.";
    }
  }

  return "Unknown email provider error.";
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const payload = (await request.json()) as EnquiryPayload;

    if (clean(payload._honey)) {
      return NextResponse.json({ success: true });
    }

    const validationError = validate(payload);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    if (!resend) {
      return NextResponse.json(
        { error: "Email delivery is not configured yet. Please email us directly." },
        { status: 503 },
      );
    }

    const formType = clean(payload.formType) || "Website enquiry";
    const name = clean(payload.name);
    const email = clean(payload.email);
    const phone = clean(payload.phone);
    const service = clean(payload.service);
    const route = clean(payload.route);
    const message = clean(payload.message);
    const recipient = cleanEnvValue(process.env.CONTACT_EMAIL, "info@soarglobals.com");
    const from = cleanEnvValue(process.env.RESEND_FROM, "Soar Global <onboarding@resend.dev>");

    const { data, error } = await resend.emails.send({
      from,
      to: recipient,
      replyTo: email,
      subject: `${formType} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #06172c;">
          <h2 style="margin: 0 0 16px;">${escapeHtml(formType)}</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
          <p><strong>Service:</strong> ${escapeHtml(service || "Not selected")}</p>
          <p><strong>Route:</strong> ${escapeHtml(route || "Not provided")}</p>
          <div style="margin-top: 20px;">
            <strong>Message:</strong>
            <div style="white-space: pre-wrap; margin-top: 8px; padding: 16px; border-radius: 8px; background: #f6f8fb;">
              ${escapeHtml(message)}
            </div>
          </div>
          <p style="margin-top: 24px; color: #64748b; font-size: 13px;">
            Sent from the Soar Global website.
          </p>
        </div>
      `,
    });

    if (error) {
      const providerMessage = getErrorMessage(error);
      console.error("Resend enquiry error:", {
        providerMessage,
        from,
        recipient,
        formType,
      });

      return NextResponse.json(
        {
          error: "Failed to send email. Please try again or contact us directly.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
