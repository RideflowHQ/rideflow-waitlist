export type PublicPlatformStats = {
  totalOrdersProcessed: number;
  deliveredAmount: number;
  activeVendors: number;
  fleetInUse: number;
  currency: string;
  generatedAt: string;
};

export type PublicPlatformStatsResponse = {
  data: PublicPlatformStats;
};
