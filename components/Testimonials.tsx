import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";
 
const reviews = [
  {
    name: "Sarah L.",
    username: "@sarahl_biz",
    body: "Chanlytics increased our booked appointments by 40% in the first month. We're saving 15+ hours a week on admin tasks. It's been a total game-changer for our local business.",
    rating: 5,
  },
  {
    name: "Mark C.",
    username: "@markc_agency",
    body: "The AI system is like having a sales development rep that works 24/7. We've stopped worrying about missed leads and can focus on high-level strategy for our clients. The peace of mind is priceless.",
    rating: 5,
  },
  {
    name: "Emily R.",
    username: "@emilyr_growth",
    body: "Integrating Chanlytics with our CRM was seamless. It automated our entire workflow, from lead nurturing to requesting reviews. Our efficiency has gone through the roof.",
    rating: 5,
  },
  {
    name: "David S.",
    username: "@davids_tech",
    body: "The internal AI assistant is my favorite feature. I can just ask 'How many new clients did we onboard this week?' and get an instant answer. No more digging through spreadsheets.",
    rating: 5,
  },
  {
    name: "Jessica M.",
    username: "@jessicam_leads",
    body: "Since implementing Chanlytics, our lead conversion has increased by 40%. The AI handles all the initial follow-up, so our sales team can focus on closing deals.",
    rating: 5,
  },
  {
    name: "Chris P.",
    username: "@chrisp_social",
    body: "We get a ton of inquiries through Instagram DMs. Chanlytics' AI responds instantly and books demos for us. It's been a massive unlock for our social media marketing.",
    rating: 5,
  },
];
 
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
 
const ReviewCard = ({
  name,
  username,
  body,
  rating,
}: {
  name: string;
  username: string;
  body: string;
  rating: number;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 md:w-72 cursor-pointer overflow-hidden rounded-xl border p-4 md:p-5",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-[#38bdf8]/30 dark:bg-gradient-to-r dark:from-[#0070F3]/30 dark:to-[#38bdf8]/30 dark:hover:bg-gradient-to-r dark:hover:from-[#0070F3]/40 dark:hover:to-[#38bdf8]/40",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-1 mt-2">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
 
export default function Testimonials() {
  const [paused, setPaused] = useState(false);
  const scrollToBooking = useCallback(() => {
    const targetElement = document.getElementById('booking');
    if (targetElement) {
      const headerOffset = 70;
      const buffer = 20;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset - buffer;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);
  return (
    <section className="pt-12 md:pt-20 pb-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">+More bookings. −Less busywork.</h2>
          <p className="mt-4 text-lg text-muted-foreground">Examples from recent customers: +40% bookings in month one, 15+ hours saved per week, and zero missed leads.</p>
          <div className="mt-6">
            <Button size="lg" className="px-8" onClick={scrollToBooking}>
              Get Started
            </Button>
          </div>
        </div>
        <style>{`.paused * { animation-play-state: paused !important; }`}</style>
        <div
          className={cn("relative flex w-full flex-col items-center justify-center overflow-hidden", paused && "paused")}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          onTouchCancel={() => setPaused(false)}
        >
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}