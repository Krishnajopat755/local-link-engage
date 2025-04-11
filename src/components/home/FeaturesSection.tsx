
import { GanttChart, Megaphone, Building, BarChart4 } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Building className="h-6 w-6 text-primary" />,
      title: "Neighborhood-Specific Information",
      description:
        "Get updates on infrastructure projects, public safety alerts, and permit applications that directly impact your neighborhood.",
    },
    {
      icon: <GanttChart className="h-6 w-6 text-primary" />,
      title: "Plain Language Legislation",
      description:
        "Understand complex policies with AI-assisted plain language summaries, visual aids, and impact assessments.",
    },
    {
      icon: <Megaphone className="h-6 w-6 text-primary" />,
      title: "Direct Representation",
      description:
        "Communicate with elected officials, submit questions for meeting agendas, and track response times.",
    },
    {
      icon: <BarChart4 className="h-6 w-6 text-primary" />,
      title: "Community Opinion",
      description:
        "Participate in structured polling, discussion forums, and see how your neighbors feel about local issues.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Core Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Democracy in Your Pocket
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform makes civic participation accessible, transparent, and impactful.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 pt-12">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-start space-y-3 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-muted p-2">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
