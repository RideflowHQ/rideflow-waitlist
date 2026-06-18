export type PublicPlatformStats = {
  totalOrdersProcessed: number;
  deliveredAmount: number;
  customersServed: number;
  activeBusinesses: number;
  currency: string;
  generatedAt: string;
  /** Legacy / optional fields from older API versions */
  activeVendors?: number;
  fleetInUse?: number;
  deliveriesCompleted?: number;
  deliveryFeesTracked?: number;
};

export type PublicPlatformStatsResponse = {
  data: PublicPlatformStats;
};

export type PlatformDisplayStats = {
  ordersProcessed: number;
  deliveriesCompleted: number;
  customersServed: number;
  deliveryFeesTracked: number;
  activeBusinesses: number;
  currency: string;
};
