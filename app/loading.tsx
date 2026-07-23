import Container from "@/components/ui/Container";

export default function Loading() {
  return (
    <section className="bg-white py-20 animate-pulse">
      <Container>

        <div className="mb-16 h-10 w-64 rounded-xl bg-slate-200" />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
            >
              <div className="aspect-square bg-slate-200" />

              <div className="space-y-4 p-6">

                <div className="h-4 w-24 rounded bg-slate-200" />

                <div className="h-7 w-3/4 rounded bg-slate-200" />

                <div className="h-4 w-full rounded bg-slate-200" />

                <div className="h-4 w-2/3 rounded bg-slate-200" />

                <div className="mt-6 flex items-center justify-between">

                  <div className="h-8 w-24 rounded bg-slate-200" />

                  <div className="h-10 w-28 rounded-full bg-slate-200" />

                </div>

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}