import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const impacts = [
  {
    value: "500+ kg",
    label: "Materials Recovered",
    description:
      "Recovered materials diverted from landfill and transformed into premium lifestyle products.",
    icon: "♻️",
  },
  {
    value: "14+",
    label: "Products Created",
    description:
      "A growing catalogue of handcrafted products made from recovered resources.",
    icon: "👜",
  },
  {
    value: "100%",
    label: "Handcrafted",
    description:
      "Each item is carefully handmade by talented Nigerian artisans.",
    icon: "🧵",
  },
  {
    value: "Every Order",
    label: "Creates Impact",
    description:
      "Every purchase contributes to environmental restoration and supports local livelihoods.",
    icon: "🌍",
  },
];

export default function ImpactSection() {
  return (
    <section className="bg-linear-to-br from-green-700 via-green-800 to-emerald-900 py-24 text-white">
      <Container>

        <SectionTitle
          eyebrow="Our Impact"
          title="Creating Value Beyond Products"
          description="Every AURA product carries a measurable environmental and social impact."
          centered
        />

        <div className="mb-16 flex justify-center">
          <Badge className="border-white/20 bg-white/10 px-5 py-2 text-white">
            🌱 Sustainable • Circular • Handmade
          </Badge>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {impacts.map((impact) => (
            <Card
              key={impact.label}
              className="border border-white/10 bg-white/10 text-center backdrop-blur-sm"
            >
              <div className="mb-6 text-6xl">
                {impact.icon}
              </div>

              <h3 className="text-4xl font-bold">
                {impact.value}
              </h3>

              <h4 className="mt-3 text-xl font-semibold">
                {impact.label}
              </h4>

              <p className="mt-5 leading-7 text-green-100">
                {impact.description}
              </p>
            </Card>
          ))}

        </div>

      </Container>
    </section>
  );
}