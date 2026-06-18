export type PlatformFeature = {
  slug: string;
  title: string;
  outcome: string;
  description: string;
  capabilities: string[];
  category: "operations" | "people" | "assets" | "finance";
};

export const platformCategories = [
  { id: "operations" as const, label: "Operations" },
  { id: "people" as const, label: "People" },
  { id: "assets" as const, label: "Assets" },
  { id: "finance" as const, label: "Finance & Growth" },
];

export const stakeholderViews = [
  {
    title: "Company HQ",
    description:
      "Full operational visibility across every branch, team, and vehicle. See the whole business at a glance — performance, costs, compliance, and activity — without chasing anyone for updates. Multi-branch visibility included to manage every location from one admin view.",
  },
  {
    title: "Fleet Manager",
    description:
      "Track every vehicle's location, maintenance status, insurance expiry, and usage from one screen. No more missed service dates or expired documents.",
  },
  {
    title: "Rider App",
    description:
      "A mobile-first app for drivers and riders with offline mode, so your team stays connected and accountable even in low-connectivity areas.",
  },
  {
    title: "HR & Payroll",
    description:
      "Onboard staff, manage attendance, process payroll, and track performance. Everything people-related, in one structured system.",
  },
];

export const technicalCredibility = [
  {
    title: "Mobile-first with offline mode",
    description:
      "Your riders and fleet managers stay connected and productive, even in areas with low or no connectivity.",
  },
  {
    title: "Real-time telemetry",
    description:
      "Live data across every order, vehicle, and team member. What's happening in your business right now, not an hour ago.",
  },
  {
    title: "Secure APIs for integrations",
    description:
      "Connect Rideflow to your existing tools (accounting software, customer platforms, third-party logistics systems) via secure, documented APIs.",
  },
  {
    title: "Central database for operations, people, and assets",
    description:
      "One source of truth for your entire business. No more reconciling data across five different platforms.",
  },
];

export const platformFeatures: PlatformFeature[] = [
  {
    slug: "dispatch-tracking",
    title: "Dispatch & Tracking",
    category: "operations",
    outcome:
      "From order creation to delivery confirmation, full visibility, zero blind spots.",
    description:
      "Rideflow's dispatch module replaces coordination-by-WhatsApp with a structured, real-time system. Assign riders, track deliveries, resolve issues, and confirm completions, all without a single phone call. Customers also receive automated SMS updates at key delivery milestones, keeping them informed without your team lifting a finger.",
    capabilities: [
      "Order creation and real-time tracking",
      "Rider assignment and reassignment",
      "Route visualization",
      "Delivery status updates (In Transit / Delivered / Failed)",
      "Vendor and sender management",
    ],
  },
  {
    slug: "operations-desk",
    title: "Operations Desk",
    category: "operations",
    outcome: "Your daily operations run from one centralized dashboard.",
    description:
      "The Operations Desk is your command centre. It pulls data from every other module into one view so you can manage the day's activity, monitor performance, and act on issues without switching between screens.",
    capabilities: [
      "Unified daily operations dashboard",
      "Quick actions: create order, add driver, register vehicle",
      "Order activity trends and distribution charts",
      "Branch-level performance visibility",
      "Export and reporting tools",
    ],
  },
  {
    slug: "multi-branch-management",
    title: "Multi-Branch Management",
    category: "operations",
    outcome:
      "Run every location from one dashboard. No more switching between systems or chasing branch managers for updates.",
    description:
      "For logistics businesses operating from multiple locations, Rideflow provides complete visibility across every branch from a single admin view. Monitor staff, orders, deliveries, inventory, and performance, consolidated or branch by branch, without leaving your dashboard.",
    capabilities: [
      "Unlimited branch creation and management (Enterprise)",
      "Up to 3 branches (Growth)",
      "Consolidated cross-branch performance view",
      "Individual branch performance breakdown",
      "Role and permission-based branch access",
      "Staff activity monitoring per branch",
    ],
  },
  {
    slug: "hr-core",
    title: "HR Core",
    category: "people",
    outcome:
      "Your entire workforce, structured, managed, and paid from one place.",
    description:
      "Rideflow's HR Core replaces the spreadsheets and WhatsApp threads most logistics businesses use to manage their people. From the moment you onboard a new rider to the day you process payroll, every action is tracked, logged, and visible.",
    capabilities: [
      "Staff onboarding and profile management",
      "Role-based access across your organisation",
      "Attendance and performance tracking",
      "Payroll processing and installment management",
      "KYC verification via NIN or BVN (Enterprise)",
    ],
  },
  {
    slug: "customer-management",
    title: "Customer Management",
    category: "people",
    outcome:
      "Every customer relationship organized, accessible, and trackable from one place.",
    description:
      "Rideflow gives businesses a centralized record of every customer they've served. Track customer history, manage contact information, and monitor delivery patterns, so your team always has the context they need when handling orders or resolving issues.",
    capabilities: [
      "Customer profile creation and management",
      "Order history per customer",
      "Contact and location records",
      "Customer activity visibility across branches",
    ],
  },
  {
    slug: "vendor-management",
    title: "Vendor Management",
    category: "people",
    outcome:
      "Know your vendors, track their performance, and manage every relationship from your dashboard.",
    description:
      "Rideflow's vendor module gives businesses a structured view of every supplier relationship. Create and manage vendor profiles, classify vendors by type, assign them to specific branches, and monitor their activity, all from one place.",
    capabilities: [
      "Vendor profile creation for individuals and companies",
      "Branch-level vendor assignment",
      "Active vendor visibility",
      "Top-performing vendor identification",
      "Contact information management",
    ],
  },
  {
    slug: "fleet-management",
    title: "Fleet Management",
    category: "assets",
    outcome:
      "Every vehicle tracked, maintained, and optimized. Nothing slips through.",
    description:
      "Rideflow's Fleet module gives you complete visibility into your entire vehicle pool: where each one is, what condition it's in, and what's coming due. Stop finding out about problems after they've become expensive.",
    capabilities: [
      "Real-time vehicle location tracking",
      "Maintenance scheduling and service history",
      "Document and insurance expiry alerts",
      "Asset utilization reporting",
      "Multi-branch fleet visibility",
    ],
  },
  {
    slug: "inventory-management",
    title: "Inventory Management",
    category: "assets",
    outcome:
      "Stock levels, inventory movement, and vendor-linked records always accurate, always visible.",
    description:
      "Once vendors are registered, Rideflow's inventory module tracks the stock associated with each one. Monitor what's been received, what's available, and how inventory is moving, without spreadsheets or manual reconciliation.",
    capabilities: [
      "Stock received and current levels per vendor",
      "Inventory movement tracking",
      "Record filtering and search",
      "Latest update visibility per inventory item",
      "Vendor-linked inventory records",
    ],
  },
  {
    slug: "docs-insurance",
    title: "Docs & Insurance",
    category: "assets",
    outcome:
      "Compliance that manages itself. No more expired documents or paper trails.",
    description:
      "Logistics compliance in Nigeria is non-negotiable and it's one of the easiest things to let slip when you're managing operations manually. Rideflow automates the tracking of every document across your fleet and team, so you're never caught off guard.",
    capabilities: [
      "Document storage and management for vehicles and staff",
      "Insurance expiry tracking with automated alerts",
      "CAC business verification (Enterprise)",
      "Compliance monitoring across branches (Enterprise)",
      "Audit-ready documentation records",
    ],
  },
  {
    slug: "analytics-apis",
    title: "Analytics & APIs",
    category: "finance",
    outcome: "Decisions backed by data. Systems connected without friction.",
    description:
      "Rideflow doesn't just run your operations; it tells you how they're performing. Real-time dashboards and reports give you the insight to make faster, smarter decisions. And for businesses with existing tools, secure APIs make integration straightforward.",
    capabilities: [
      "Real-time operational dashboards",
      "Cost, revenue, and performance reporting",
      "Visit reports and branch-level breakdowns",
      "Expense management and tracking",
      "Secure API access for third-party integrations (Add-on)",
      "Advanced analytics (Add-on)",
    ],
  },
  {
    slug: "pricing-calculator",
    title: "Pricing Calculator",
    category: "finance",
    outcome: "Accurate delivery pricing calculated instantly, every time.",
    description:
      "Rideflow's built-in pricing calculator gives logistics businesses a consistent, reliable way to calculate delivery costs. Remove the guesswork from pricing and ensure every order is quoted accurately.",
    capabilities: [
      "Instant delivery cost calculation",
      "Consistent pricing across branches and team members",
      "Reduces manual pricing errors",
    ],
  },
  {
    slug: "invoicing",
    title: "Invoicing",
    category: "finance",
    outcome:
      "Professional invoices generated directly from your operations. No separate tools needed.",
    description:
      "Rideflow's invoicing feature allows businesses to generate and manage invoices directly within the platform, keeping billing connected to the operations that drive it.",
    capabilities: [
      "Invoice generation from within the platform",
      "Vendor and customer-linked invoicing",
      "Billing records accessible alongside operational data",
    ],
  },
];

export function getFeaturesByCategory(category: PlatformFeature["category"]) {
  return platformFeatures.filter((feature) => feature.category === category);
}
