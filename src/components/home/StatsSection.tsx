
export function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-civic-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Impact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Making a Difference Together
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how our community is working to improve local democracy.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4 lg:gap-12 pt-12">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="text-4xl font-bold">82%</div>
            <p className="text-sm text-muted-foreground text-center">
              Increase in public meeting attendance
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="text-4xl font-bold">3.5x</div>
            <p className="text-sm text-muted-foreground text-center">
              More diverse participant demographics
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="text-4xl font-bold">15k+</div>
            <p className="text-sm text-muted-foreground text-center">
              Citizen comments on local legislation
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="text-4xl font-bold">94%</div>
            <p className="text-sm text-muted-foreground text-center">
              User satisfaction rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
