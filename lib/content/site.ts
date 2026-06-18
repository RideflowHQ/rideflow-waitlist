export const CALENDLY_URL = "https://calendly.com/rideflow";
export const REGISTER_URL = "https://dashboard.rideflow.org/auth/register";
export const CONTACT_EMAIL = "info@rideflow.org";
export const CONTACT_PHONE = "+234 810 234 5678";
export const CONTACT_ADDRESS =
  "EridanSpace, The Philippi Center, Oluwalogbon House, Plot A, Obafemi Awolowo Way, Ikeja, Lagos.";
export const OFFICE_HOURS = {
  weekdays: "Monday – Friday: 9:00am – 6:00pm",
  saturday: "Saturday: 9:00am – 4:00pm",
};

export const platformStats = [
  { label: "Orders Processed", value: 2418 },
  { label: "Deliveries Completed", value: 1879 },
  { label: "Customers Served", value: 2174 },
  {
    label: "Delivery Fees Tracked Across the Platform",
    value: 11068850,
    format: "currency" as const,
  },
  {
    label: "Active Businesses on the Platform",
    value: 100,
    format: "number" as const,
  },
] as const;

export const homeTestimonials = [
  {
    id: 1,
    quote:
      "Great system with a smooth and easy-to-use interface. Creating orders and assigning them are so easy and fast, and the service has been reliable. Overall, a convenient and enjoyable experience.",
    author: "David",
    role: "Logistics Officer, T4C Logistics",
    avatar: "/home/african-man.jpg",
  },
  {
    id: 2,
    quote:
      "Rideflow has significantly improved the way we manage our logistics operations. The platform makes it easy to track expenses, monitor deliveries, and generate reports, giving us better visibility into our business performance. As soon as a rider picks up an order, the customer receives an SMS update, which has greatly reduced back-and-forth communication. Overall, a practical and reliable solution.",
    author: "Ojah ThankGod Donaldson",
    role: "CEO, D.E.S Logistics",
    avatar: "/home/idris.jpg",
  },
  {
    id: 3,
    quote:
      "What I like most is that it helps us keep everything in one place. I can see everything going on across our operations, while team members only access what they need. The branch management feature is especially useful; I can view and manage all our locations from one dashboard instead of switching between systems.",
    author: "Mr Chimeebere",
    role: "CEO, Majesty Xpress logistics",
    avatar: "/home/smith.jpg",
  },
  {
    id: 4,
    quote:
      "Since we moved to Rideflow, dispatch has become much less chaotic. Riders get assignments instantly, customers stay informed, and we can spot delays before they turn into complaints. It is the kind of visibility we needed as we scaled deliveries across Lagos.",
    author: "Adewale Okonkwo",
    role: "Operations Manager, Flash Delivery",
    avatar: "/home/office-man.webp",
  },
  {
    id: 5,
    quote:
      "Payroll, fleet records, and daily dispatch used to live in different places. Rideflow brought them together so our team spends less time reconciling spreadsheets and more time moving packages. Setup was straightforward and support has been responsive.",
    author: "Fatima Bello",
    role: "Head of Operations, Send Me Logistics",
    avatar: "/home/woman-call.webp",
  },
  {
    id: 6,
    quote:
      "The compliance and reporting tools alone have saved us hours every week. We can track rider documentation, monitor branch performance, and pull reports for management without chasing anyone on WhatsApp. It feels built for how logistics actually runs in Nigeria.",
    author: "Emmanuel Nwosu",
    role: "Managing Director, Rideflow Logistics",
    avatar: "/home/man-laptop.webp",
  },
];

export const homeFeaturePreview = [
  {
    id: 1,
    icon: "/home/order.svg",
    title: "HR Core",
    description:
      "Your entire workforce from hire to payroll, structured and managed in one place.",
  },
  {
    id: 2,
    icon: "/home/bus.svg",
    title: "Fleet Management",
    description:
      "Every vehicle tracked, maintained, and optimized. No more chasing drivers or missing service dates.",
  },
  {
    id: 3,
    icon: "/home/dispatch.svg",
    title: "Dispatch & Tracking",
    description:
      "Real-time dispatch with full visibility from assignment to delivery. Zero blind spots, zero excuses.",
  },
  {
    id: 4,
    icon: "/home/gear.svg",
    title: "Operations Desk",
    description:
      "Orders, assignments, costs, and daily workflows, run from one centralized dashboard.",
  },
  {
    id: 5,
    icon: "/home/document.svg",
    title: "Docs & Insurance",
    description:
      "Document expiry alerts. Compliance automation. Paperwork that finally manages itself.",
  },
  {
    id: 6,
    icon: "/home/insights.svg",
    title: "Analytics & APIs",
    description:
      "Decisions backed by real-time data. Integrations via secure APIs for the tools you already use.",
  },
];

export const homeStakes = {
  without: [
    "Revenue leaks from poor visibility and missed follow-up",
    "Compliance risks from paper-based records and expired documents",
    "Riders and drivers operating without real accountability",
    "Business decisions made on gut, not data",
    "Growth blocked by systems that can't scale with you",
  ],
  with: [
    "Higher asset utilization and faster cash conversion",
    "Compliance automated. Licenses, insurance, and documents tracked proactively",
    "Full accountability across every rider, driver, and vehicle",
    "Real-time data that tells you exactly where your business stands",
    "A platform that scales from 10 riders to 100+ across multiple branches",
  ],
};

export const homeSteps = [
  {
    title: "Set Up Your Operation",
    description:
      "Onboard your company, add your branches, register your team and vehicles. Your entire operation is structured and visible from day one. No IT team required.",
  },
  {
    title: "Connect Every Moving Part",
    description:
      "HR, fleet, dispatch, compliance, payroll, and analytics, all connected in one real-time dashboard. No more switching between apps or chasing status updates over WhatsApp.",
  },
  {
    title: "Run With Full Visibility",
    description:
      "Make decisions backed by live data. Track performance across branches, catch compliance issues before they become problems, and grow your business with the confidence that comes from actually knowing what's happening.",
  },
];

export const pricingFaqs = [
  {
    question: "What happens when I outgrow my plan?",
    answer:
      "You can upgrade to the next tier at any time. Your data, history, and settings move with you. No disruption to your operations.",
  },
  {
    question: "Is there a setup or onboarding fee?",
    answer:
      "No. All plans include onboarding support at no additional cost. Enterprise plans include custom implementation support.",
  },
  {
    question: "Can I try Rideflow before committing to a paid plan?",
    answer:
      "Yes. Book a demo and we'll walk you through the platform with your specific operation in mind. We also offer pilot arrangements for teams that want to test before full rollout.",
  },
  {
    question: 'What does "early access pricing" mean?',
    answer:
      "Rideflow is actively growing and adding new features. Current subscribers lock in today's rates, as pricing will increase as the platform expands. Signing up now means you keep your rate as the product grows around you.",
  },
  {
    question: "Can I pay annually instead of monthly?",
    answer: "Reach out to discuss annual billing options.",
  },
];

export const addOns = [
  {
    title: "Advanced Analytics",
    description:
      "Deeper reporting and custom dashboards for businesses that need granular performance visibility.",
  },
  {
    title: "Route Optimization",
    description:
      "Intelligent routing that reduces delivery times and fuel costs across your fleet.",
  },
  {
    title: "WhatsApp Bot",
    description:
      "Automated order updates and notifications delivered directly to your customers and riders via WhatsApp.",
  },
  {
    title: "API Access",
    description:
      "Full API access for custom integrations with your existing tools and systems.",
  },
];

export const blogTopics = [
  "Logistics Operations",
  "Fleet & Asset Management",
  "HR & Workforce Management",
  "Data & Business Intelligence",
  "Technology for Logistics",
  "Building a Logistics Business in Nigeria",
];
