import Badge from "@/components/custom/badge";

const verified = [
  {
    title: "Registered businesses",
    text: "Logistics companies verify their CAC registration when they sign up on Rideflow.",
  },
  {
    title: "Real ratings",
    text: "Ratings and reviews come from completed deliveries on the platform.",
  },
  {
    title: "Full visibility",
    text: "See the rider, the route and the delivery status at every step.",
  },
];

const sectors = [
  { title: "Import & export", text: "Partners for goods coming into Nigeria and going out." },
  { title: "Agritech", text: "Harvests, inputs and produce." },
  { title: "Pharma", text: "Medicines and supplies." },
  { title: "Healthtech", text: "Kits and samples." },
  { title: "E-commerce", text: "Online orders, every day." },
  { title: "Retail & FMCG", text: "Stock and distribution, at scale." },
];

export function RideflowVerified({ id = "verified" }: { id?: string }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-y border-dashed border-[#808080] bg-white py-16 md:py-24"
    >
      <div className="container mx-auto px-6">
        <Badge text="Rideflow Verified" color="bg-body-gray" />
        <div className="mt-4 max-w-3xl">
          <h2 className="text-3xl font-medium leading-tight tracking-tight text-rideflow-ink-hard sm:text-4xl">
            Trust is built in, not guessed.
          </h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-rideflow-text-light">
            Look for the Verified badge. It shows that a business has completed
            Rideflow&apos;s verification before it appears on Hubs, so you know
            who you&apos;re handing your goods to.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {verified.map((item) => (
            <div key={item.title} className="rounded-2xl bg-body-gray p-6">
              <h3 className="text-base font-semibold text-rideflow-ink-hard">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-rideflow-text-light">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MoveSectors({ id = "sectors" }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-28 bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <Badge text="Whatever you move" color="bg-body-gray" />
        <div className="mt-4 max-w-3xl">
          <h2 className="text-3xl font-medium leading-tight tracking-tight text-rideflow-ink-hard sm:text-4xl">
            There&apos;s a partner for it.
          </h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-rideflow-text-light">
            One marketplace for every business that ships goods, from farm
            produce to pharmaceuticals.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((item) => (
            <div key={item.title} className="rounded-2xl bg-body-gray p-6">
              <h3 className="text-base font-semibold text-rideflow-ink-hard">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-rideflow-text-light">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
