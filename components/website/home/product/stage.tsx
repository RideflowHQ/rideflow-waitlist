import { BrowserFrame, PhoneFrame } from "./frames";

export function ProductStage() {
  return (
    <div className="relative w-full pb-24 sm:pb-16 lg:pb-20">
      <BrowserFrame
        src="/home/product/dashboard.svg"
        alt="Rideflow dashboard showing delivery income, active orders, fleet usage, and license alerts"
        priority
      />
      <div className="absolute -bottom-4 right-2 w-[168px] sm:right-6 sm:w-[200px] lg:-right-2 lg:w-[220px]">
        <PhoneFrame
          src="/home/product/explore.svg"
          alt="Rideflow marketplace, with verified logistics companies, fees, and ratings"
          priority
        />
      </div>
    </div>
  );
}
