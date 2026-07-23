import type { ProductStorySection } from "@/types/product";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

import {
  Leaf,
  Recycle,
  Sparkles,
} from "@/components/ui/Icon";

interface ProductStoryProps {
  story: ProductStorySection[];
}

const icons = [Leaf, Recycle, Sparkles];

export default function ProductStory({
  story,
}: ProductStoryProps) {
  if (!story.length) return null;

  return (
    <section className="bg-white py-24">

      <SectionTitle
        eyebrow="The Story"
        title="Crafted with Purpose"
        description="Every AURA product begins as a discarded material and is transformed into something beautiful, useful and meaningful."
        centered
      />

      <Container>

        <div className="space-y-10">

          {story.map((section, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Card
                key={section.id}
                className={`${
                  index % 2 === 0
                    ? "lg:mr-16"
                    : "lg:ml-16"
                }`}
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start">

                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-green-100 text-green-700">

                    <Icon size={34} />

                  </div>

                  <div className="flex-1">

                    <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                      {section.heading}
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                      {section.body}
                    </p>

                  </div>

                </div>
              </Card>
            );
          })}

        </div>

      </Container>

    </section>
  );
}