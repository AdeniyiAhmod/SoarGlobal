import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { ServiceGrid } from "@/components/ServiceGrid";

export const metadata: Metadata = {
  title: "Services",
  description: "Procurement, freight forwarding, automotive export, parcel shipping, import, export and business logistics services.",
};

export default function ServicesPage() {
  return (
    <>
      <h1 className="sr-only">Services</h1>
      <ServiceGrid detailed />
      <CtaBand />
    </>
  );
}
