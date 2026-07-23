import Container from "@/components/ui/Container";

export default function Loading() {
  return (
    <section className="bg-slate-50 py-16">

      <Container>

        <div className="mb-12">

          <div className="h-10 w-72 animate-pulse rounded bg-slate-200" />

          <div className="mt-4 h-5 w-96 animate-pulse rounded bg-slate-200" />

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {Array.from({ length: 6 }).map((_, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-sm"
            >

              <div className="aspect-square animate-pulse bg-slate-200" />

              <div className="space-y-4 p-6">

                <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />

                <div className="h-8 w-3/4 animate-pulse rounded bg-slate-200" />

                <div className="h-4 w-full animate-pulse rounded bg-slate-200" />

                <div className="h-4 w-5/6 animate-pulse rounded bg-slate-200" />

                <div className="mt-8 flex items-center justify-between">

                  <div className="h-8 w-28 animate-pulse rounded bg-slate-200" />

                  <div className="h-11 w-28 animate-pulse rounded-full bg-slate-200" />

                </div>

              </div>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}