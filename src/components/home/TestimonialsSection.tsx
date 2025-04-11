
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "As a working parent, I never had time to attend town halls. Now I can participate in local decisions while waiting for soccer practice to end.",
      name: "Sarah Johnson",
      role: "Community Member",
      avatar: "SJ",
    },
    {
      quote:
        "The plain language summaries have transformed how I understand local policy. I finally feel informed enough to voice my opinion.",
      name: "Marcus Chen",
      role: "Neighborhood Advocate",
      avatar: "MC",
    },
    {
      quote:
        "I've lived in this city for 30 years and never felt heard until now. The direct communication with officials makes all the difference.",
      name: "Eleanor Ramírez",
      role: "Retired Teacher",
      avatar: "ER",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Hear from Our Community
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Real stories from citizens who have transformed their civic engagement.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 pt-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
