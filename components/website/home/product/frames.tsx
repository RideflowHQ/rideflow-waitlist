import Image from "next/image";

type FrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  focus?: "top" | "center" | "panel";
  sizes?: string;
};

export function BrowserFrame({
  src,
  alt,
  priority = false,
  focus = "top",
}: FrameProps) {
  if (focus === "panel") {
    return (
      <div className="mx-auto h-full max-h-full w-full max-w-[400px] overflow-hidden rounded-2xl border border-rideflow-hairline bg-white shadow-[0_24px_70px_rgba(14,14,14,0.12)]">
        <div className="relative aspect-[500/1024] h-full max-h-full bg-white">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="400px"
            unoptimized={src.endsWith(".svg")}
            className="object-contain object-top"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-rideflow-hairline bg-white shadow-[0_24px_70px_rgba(14,14,14,0.12)]">
      <div className="flex items-center gap-2 border-b border-rideflow-hairline bg-[#f4f5f7] px-3 py-2.5">
        <span className="size-2 rounded-full bg-[#ff5f57]" />
        <span className="size-2 rounded-full bg-[#febc2e]" />
        <span className="size-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate text-[11px] font-medium text-rideflow-text-extralight">
          dashboard.rideflow.org
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-[#f7f8fb]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 720px, 100vw"
          className={`object-cover ${focus === "center" ? "object-center" : "object-top"}`}
        />
      </div>
    </div>
  );
}

export function PhoneFrame({
  src,
  alt,
  priority = false,
  sizes = "220px",
}: FrameProps) {
  const vector = src.endsWith(".svg");

  return (
    <div className="relative aspect-[390/844] h-auto w-full overflow-hidden rounded-[14px] border-[5px] border-rideflow-ink-hard bg-rideflow-ink-hard shadow-[0_28px_60px_rgba(14,14,14,0.4)] sm:rounded-[1.35rem] sm:border-[6px] md:rounded-[2rem]">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        unoptimized={vector || src.includes("/home/product/")}
        className="object-cover object-top"
      />
    </div>
  );
}
