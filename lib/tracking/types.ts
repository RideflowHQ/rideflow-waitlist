export type TrackingBrandFont =
  | "INTER"
  | "POPPINS"
  | "ROBOTO"
  | "DM_SANS"
  | "OPEN_SANS";

export type PublicTrackingBranding = {
  logoUrl?: string;
  companyPhone?: string;
  primaryColor: string;
  font: TrackingBrandFont;
};

export type PublicTrackingSite = {
  isCustomDomain: boolean;
  company: {
    companyName: string;
  };
  branding: PublicTrackingBranding;
};

export type PublicTrackingStatusEvent = {
  sequence: number;
  status: string;
  note?: string;
  occurredAt: string;
};

export type PublicTrackingData = {
  trackingType: "ORDER" | "INTERNATIONAL_SHIPMENT";
  referenceId: string;
  shipmentNumber?: string;
  orderId?: string;
  trackingId?: string | null;
  currentStatus: string;
  recipientName?: string;
  destinationCountry?: string;
  preferredCarrier?: string;
  lastUpdatedAt?: string;
  lastLocation?: string;
  estimatedDeliveryAt?: string;
  statusHistory?: PublicTrackingStatusEvent[];
  company?: {
    companyName?: string;
    companyLogo?: string;
    companyPhone?: string;
    companyEmail?: string;
  };
};

export type PublicApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; status: number; error: string; retryAfterSeconds?: number };
