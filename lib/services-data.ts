export interface ServiceData {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  overview?: string;
  whyChoose?: string[];
  whyChooseClosing?: string;
  howItWorks?: {
    step: string;
    title: string;
    description: string;
  }[];
}

export const servicesData: ServiceData[] = [
  {
    id: "1",
    title: "Asset Investment [Hire Purchase]",
    summary:
      "We offer a unique opportunity for individuals and organizations to invest in mobility assets and earn sustainable, reliable returns.",
    imageUrl: "/service/service-handshake.webp",
    overview:
      "A unique opportunity for individuals and organizations to invest in mobility assets and earn sustainable, reliable returns.",
    whyChoose: [
      "Sustainable investment returns",
      "Asset-backed security",
      "Structured payment plans",
      "Transparent investment tracking",
      "Reliable income stream",
    ],
    whyChooseClosing:
      "With RideFlow, your investment works for you while we handle the operations.",
    howItWorks: [
      {
        step: "01",
        title: "Choose your asset",
        description:
          "Select from available mobility assets for investment opportunities.",
      },
      {
        step: "02",
        title: "Investment structure",
        description:
          "Review and agree to the hire purchase terms and payment schedule.",
      },
      {
        step: "03",
        title: "Asset deployment",
        description:
          "Asset is deployed into operations and starts generating returns.",
      },
      {
        step: "04",
        title: "Track returns",
        description:
          "Monitor your investment performance and receive scheduled payments.",
      },
    ],
  },
  {
    id: "2",
    title: "Fleet & Asset Management",
    summary:
      "Track and manage your bikes, vehicles, and delivery assets in one system with full visibility into usage, maintenance, and performance.",
    imageUrl: "/service/bikes.webp",
    overview:
      "Your fleet is the backbone of your logistics business. But when asset records live in notebooks, WhatsApp chats, or spreadsheets, it's difficult to know what is working and what is costing you money. Rideflow gives you a structured system to manage and monitor all your delivery assets in one place. From tracking asset usage to planning maintenance and monitoring performance, Rideflow helps you run a more efficient fleet. Instead of guessing, you operate with data and visibility.",
    whyChoose: [
      "Know where every asset stands",
      "Track asset usage over time",
      "Reduce maintenance surprises",
      "Prevent asset losses",
      "Make better investment decisions",
    ],
    whyChooseClosing:
      "Rideflow helps you turn your fleet into a controlled and measurable system.",
    howItWorks: [
      {
        step: "01",
        title: "Add your fleet",
        description:
          "Register all bikes and vehicles with complete asset details and records.",
      },
      {
        step: "02",
        title: "Track asset usage",
        description:
          "Monitor which assets are active and how they are being used.",
      },
      {
        step: "03",
        title: "Plan maintenance",
        description: "Schedule servicing and track maintenance history.",
      },
      {
        step: "04",
        title: "Measure performance",
        description:
          "Understand which assets perform best and where improvements are needed.",
      },
    ],
  },
  {
    id: "3",
    title: "Rider & Workforce Management",
    summary:
      "Manage riders and logistics staff in one structured system from onboarding and assignments to performance tracking.",
    imageUrl: "/service/bike-man.webp",
    overview:
      "As logistics businesses grow, managing riders through WhatsApp groups and manual coordination becomes difficult to control. Rideflow provides a structured workforce management system where businesses can organize rider information, assign responsibilities, and monitor performance. This helps logistics operators maintain accountability and improve team coordination. Your workforce becomes organized and trackable instead of scattered.",
    whyChoose: [
      "Organized rider profiles",
      "Clear task assignments",
      "Improved accountability",
      "Performance visibility",
      "Structured team coordination",
    ],
    whyChooseClosing:
      "Rideflow helps logistics teams operate with clarity and structure.",
    howItWorks: [
      {
        step: "01",
        title: "Create rider profiles",
        description:
          "Add riders with identification, contact details, and work information.",
      },
      {
        step: "02",
        title: "Assign riders",
        description: "Assign riders to assets or delivery responsibilities.",
      },
      {
        step: "03",
        title: "Monitor activity",
        description: "Track rider performance and operational activity.",
      },
      {
        step: "04",
        title: "Maintain records",
        description: "Keep structured workforce records in one system.",
      },
    ],
  },
  {
    id: "4",
    title: "Logistics & Operations Management",
    summary:
      "Run your delivery operations from one system instead of managing everything through calls, messages, and spreadsheets.",
    imageUrl: "/service/office-man.webp",
    overview:
      "Many logistics businesses operate using a mix of phone calls, WhatsApp updates, and spreadsheets. As the business grows, this creates confusion, delays, and costly mistakes. Rideflow provides a structured operations system where deliveries, riders, and assets can be coordinated in one place. Instead of chasing updates, you gain real operational visibility. Rideflow helps logistics businesses move from survival mode to structured operations.",
    whyChoose: [
      "Centralized delivery coordination",
      "Reduced operational confusion",
      "Better team coordination",
      "Clear operational visibility",
      "Systems that scale with your business",
    ],
    whyChooseClosing:
      "Rideflow replaces scattered operations with structured workflows.",
    howItWorks: [
      {
        step: "01",
        title: "Set up your operations",
        description: "Configure your riders, assets, and delivery workflow.",
      },
      {
        step: "02",
        title: "Manage deliveries",
        description: "Track deliveries and operational activity in one system.",
      },
      {
        step: "03",
        title: "Coordinate teams",
        description: "Assign riders and monitor operational progress.",
      },
      {
        step: "04",
        title: "Operate with clarity",
        description:
          "See everything happening across your operations in one place.",
      },
    ],
  },
  {
    id: "5",
    title: "Payments, Payroll & Installments",
    summary:
      "Manage rider payments, payroll, and installment tracking in one structured financial system.",
    imageUrl: "/service/female-boss.webp",
    overview:
      "Financial tracking is one of the biggest challenges in logistics operations. Manual records often lead to disputes, missing payments, and unclear balances. Rideflow provides a structured system for tracking rider payments, payroll records, and installment plans. This ensures transparency for operators, riders, and investors. Your financial records stay organized and accessible.",
    whyChoose: [
      "Clear payment tracking",
      "Organized payroll records",
      "Installment monitoring",
      "Reduced disputes",
      "Transparent financial records",
    ],
    whyChooseClosing: "Rideflow brings structure to logistics finances.",
    howItWorks: [
      {
        step: "01",
        title: "Set payment structure",
        description: "Define rider earnings or installment arrangements.",
      },
      {
        step: "02",
        title: "Record payments",
        description: "Track all payment activities inside Rideflow.",
      },
      {
        step: "03",
        title: "Monitor balances",
        description: "View outstanding balances and completed payments.",
      },
      {
        step: "04",
        title: "Maintain records",
        description: "Keep complete financial histories in one system.",
      },
    ],
  },
  {
    id: "6",
    title: "Reporting, Insights & Control Dashboard",
    summary:
      "See the full picture of your logistics business with real-time reports and operational insights.",
    imageUrl: "/service/office-girl.webp",
    overview:
      "Without proper reporting, logistics businesses rely on assumptions instead of real data. Rideflow provides a centralized dashboard that shows key operational and financial metrics in real time. Founders and managers can monitor performance, track costs, and make informed decisions. Instead of asking questions across multiple teams, you get answers in one place.",
    whyChoose: [
      "Real-time business visibility",
      "Operational insights",
      "Performance tracking",
      "Cost monitoring",
      "Better decision-making",
    ],
    whyChooseClosing:
      "Rideflow gives logistics businesses the control they need to scale.",
    howItWorks: [
      {
        step: "01",
        title: "Run your operations",
        description:
          "All activities inside Rideflow automatically generate data.",
      },
      {
        step: "02",
        title: "Access your dashboard",
        description: "View operational and financial reports in one place.",
      },
      {
        step: "03",
        title: "Track performance",
        description: "Monitor trends across riders, assets, and operations.",
      },
      {
        step: "04",
        title: "Make informed decisions",
        description: "Use insights to improve efficiency and plan growth.",
      },
    ],
  },
];

export function getServiceById(id: string): ServiceData | undefined {
  return servicesData.find((service) => service.id === id);
}

export function getAllServices(): ServiceData[] {
  return servicesData;
}
