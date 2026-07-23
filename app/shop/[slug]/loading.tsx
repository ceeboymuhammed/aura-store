import Container from "@/components/ui/Container";

export default function ProductLoading() {
  return (
    <section className="animate-pulse bg-white py-20">
      <Container>

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Image Gallery */}

          <div>

            <div className="aspect-square rounded-3xl bg-slate-200" />

            <div className="mt-6 grid grid-cols-4 gap-4">

              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-2xl bg-slate-200"
                />
              ))}

            </div>

          </div>

          {/* Product Info */}

          <div>

            <div className="mb-6 h-6 w-32 rounded-full bg-slate-200" />

            <div className="h-12 w-3/4 rounded-xl bg-slate-200" />

            <div className="mt-8 space-y-3">

              <div className="h-4 w-full rounded bg-slate-200" />
              <div className="h-4 w-5/6 rounded bg-slate-200" />
              <div className="h-4 w-2/3 rounded bg-slate-200" />

            </div>

            <div className="mt-10 h-12 w-40 rounded-xl bg-slate-200" />

            <div className="mt-10">

              <div className="mb-4 h-5 w-24 rounded bg-slate-200" />

              <div className="flex gap-3">

                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-12 w-24 rounded-full bg-slate-200"
                  />
                ))}

              </div>

            </div>

            <div className="mt-10 h-14 w-40 rounded-full bg-slate-200" />

            <div className="mt-10 space-y-4">

              <div className="h-14 rounded-full bg-slate-200" />

              <div className="h-14 rounded-full bg-slate-200" />

            </div>

            <div className="mt-12 rounded-3xl border border-slate-200 p-8">

              <div className="space-y-6">

                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >
                    <div className="h-10 w-10 rounded-full bg-slate-200" />

                    <div className="flex-1">

                      <div className="h-5 w-40 rounded bg-slate-200" />

                      <div className="mt-3 h-4 w-full rounded bg-slate-200" />

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}