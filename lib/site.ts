import {
  BadgeCheck,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Building2,
  Car,
  ClipboardCheck,
  Construction,
  Factory,
  Globe2,
  Handshake,
  HeartPulse,
  Hotel,
  Mail,
  MapPin,
  Package,
  Phone,
  Send,
  ShieldCheck,
  ShoppingCart,
  Sprout,
  Store,
  Truck,
  UsersRound,
  Warehouse,
} from "lucide-react";

export const contact = {
  email: "info@soarglobals.com",
  phone: "+44 28 95 322 110",
  phoneHref: "tel:+442895322110",
  whatsapp: "+44 7930 006 681",
  whatsappHref: "https://wa.me/447930006681",
  address: "Unit 12, Duncrue Industrial Estate, Belfast, BT3 9BP, Northern Ireland",
  shortAddress: "Belfast, Northern Ireland",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Procurement & Sourcing",
    slug: "procurement-sourcing",
    icon: ClipboardCheck,
    excerpt: "Supplier sourcing and purchase coordination.",
    body:
      "Supplier discovery, purchase coordination and export-ready sourcing support for teams that need dependable products without slowing down their operations.",
  },
  {
    title: "Freight Forwarding",
    slug: "freight-forwarding",
    icon: Truck,
    excerpt: "Sea, air and road freight planned around your route.",
    body:
      "Flexible forwarding across ocean, air and road networks, with clear routing guidance and practical handling from collection through delivery.",
  },
  {
    title: "Automotive Export",
    slug: "automotive-export",
    icon: Car,
    excerpt: "Export support for vehicles, parts and commercial stock.",
    body:
      "Vehicle procurement, documentation support and export coordination for cars, vans, parts and commercial fleet movements.",
  },
  {
    title: "Parcel Shipping",
    slug: "parcel-shipping",
    icon: Package,
    excerpt: "International parcel movement for personal and business needs.",
    body:
      "Straightforward parcel shipping for personal, retail and business needs, with practical options for international delivery.",
  },
  {
    title: "Import & Export",
    slug: "import-export",
    icon: Globe2,
    excerpt: "Practical support for cross-border goods movement.",
    body:
      "Import and export coordination for goods moving into and out of Northern Ireland, including supplier, route and documentation support.",
  },
  {
    title: "Business Logistics",
    slug: "business-logistics",
    icon: Warehouse,
    excerpt: "Recurring logistics support for growing teams.",
    body:
      "Operational logistics support for SMEs and growing businesses that need dependable movement, warehousing and delivery planning.",
  },
];

export const industries = [
  { title: "Automotive", icon: Car },
  { title: "Agriculture", icon: Sprout },
  { title: "Construction", icon: Construction },
  { title: "Hospitality", icon: Hotel },
  { title: "Retail", icon: ShoppingCart },
  { title: "Manufacturing", icon: Factory },
  { title: "E-commerce", icon: Store },
  { title: "Healthcare", icon: HeartPulse },
  { title: "General Trade", icon: Globe2 },
];

export const trustFeatures = [
  {
    title: "Global reach",
    text: "Routes and partners for international trade.",
    icon: Globe2,
  },
  {
    title: "Handled carefully",
    text: "Clear coordination from enquiry to delivery.",
    icon: ShieldCheck,
  },
  {
    title: "Personal support",
    text: "A direct team for businesses and individuals.",
    icon: UsersRound,
  },
];

export const processSteps = [
  {
    title: "Enquire",
    text: "Contact us with your requirements.",
    icon: Send,
  },
  {
    title: "We Plan",
    text: "We provide the best solution and quote.",
    icon: ClipboardCheck,
  },
  {
    title: "We Handle",
    text: "We manage collection, shipping and documents.",
    icon: Package,
  },
  {
    title: "We Deliver",
    text: "Your goods arrive safely and on time.",
    icon: Truck,
  },
  {
    title: "You Grow",
    text: "Focus on your business while we handle the rest.",
    icon: BarChart3,
  },
];

export const stats = [
  { value: "50+", label: "Countries Connected", icon: Globe2 },
  { value: "1000+", label: "Shipments Delivered", icon: Boxes },
  { value: "300+", label: "Trusted Partners", icon: Handshake },
  { value: "100%", label: "Commitment to Satisfaction", icon: BadgeCheck },
];

export const quickLinks = [
  { title: "Email Us", value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { title: "Call Us", value: contact.phone, href: contact.phoneHref, icon: Phone },
  { title: "WhatsApp", value: contact.whatsapp, href: contact.whatsappHref, icon: Send },
  { title: "Visit Us", value: contact.shortAddress, href: "/contact", icon: MapPin },
];

export const businessSolutions = [
  {
    title: "For SMEs",
    text: "Flexible logistics support for small and medium businesses that need reliable routes, pricing and delivery coordination.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Supply Chain Solutions",
    text: "Practical sourcing, import, freight and delivery support for growing teams with recurring logistics needs.",
    icon: Boxes,
  },
  {
    title: "Vendor Management",
    text: "Trusted partner coordination across suppliers, freight providers and local handling teams.",
    icon: UsersRound,
  },
  {
    title: "Trade Consultancy",
    text: "Clear guidance for businesses planning international purchasing, exports or market expansion.",
    icon: Globe2,
  },
  {
    title: "Customs Support",
    text: "Documentation and process support to keep cross-border movements organised.",
    icon: Building2,
  },
];

export const resourceItems = [
  {
    title: "Shipping Guides",
    text: "Understand freight options, parcel preparation and timelines before you move goods.",
  },
  {
    title: "Trade Resources",
    text: "Useful guidance for importers, exporters and businesses planning international procurement.",
  },
  {
    title: "FAQs",
    text: "Answers to common questions about quotes, documentation, timelines and delivery support.",
  },
  {
    title: "News",
    text: "Company updates and trade notes for customers in Northern Ireland and beyond.",
  },
];
