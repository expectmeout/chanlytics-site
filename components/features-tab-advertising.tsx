import { BarChart, DollarSign, Target, Users } from "lucide-react";

import { Feature108 } from "@/components/blocks/shadcnblocks-com-feature108"

const demoData = {
  badge: "",
  heading: "",
  description: "",
  tabs: [
    {
      value: "tab-1",
      icon: <BarChart className="h-auto w-4 shrink-0 text-primary" />,
      label: "Data-Driven Approach",
      content: {
        badge: "Performance Focused",
        title: "Continually optimize for maximum performance.",
        description:
          "We use data analytics and industry insights to make informed decisions. Our advertising campaigns are continuously monitored and optimized to ensure you get the best results possible, with transparent reporting on all performance metrics.",
        buttonText: "See Results",
        imageSrc:
          "/amazon-lady-screen.png",
        imageAlt: "Amazon Analytics Dashboard",
      },
    },
    {
      value: "tab-2",
      icon: <Target className="h-auto w-4 shrink-0 text-primary" />,
      label: "Amazon Advertising",
      content: {
        badge: "Expert Specialists",
        title: "Navigate the Amazon advertising ecosystem.",
        description:
          "Our team consists of experienced Amazon advertising experts who understand the platform inside out. We create customized strategies tailored to your brand's industry, specific products, target audiences, and business goals.",
        buttonText: "Learn More",
        imageSrc:
          "/amazon-advertising-dashboard.png",
        imageAlt: "Amazon Advertising Dashboard",
      },
    },
    {
      value: "tab-3",
      icon: <DollarSign className="h-auto w-4 shrink-0 text-primary" />,
      label: "Budget Optimization",
      content: {
        badge: "ROAS Maximization",
        title: "Make every advertising dollar count.",
        description:
          "We manage your budget efficiently across Sponsored Products, Sponsored Brands, Sponsored Display, and Amazon DSP to create a full-funnel strategy that maximizes visibility, conversions, and ROI across marketplace platforms.",
        buttonText: "Get Started",
        imageSrc:
          "/amazon-aplus-content.png",
        imageAlt: "Budget Optimization Dashboard",
      },
    },
  ],
};

function Feature108Demo() {
  return <Feature108 {...demoData} />;
}

export { Feature108Demo };
