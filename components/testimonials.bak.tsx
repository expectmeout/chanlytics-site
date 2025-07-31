"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=9&inc=name,picture');
        const data = await response.json();
        const users = data.results;

        const roles = [
          "Operations Manager", "IT Manager", "Customer Support Lead",
          "CEO", "Project Manager", "Business Analyst",
          "Marketing Director", "Sales Manager", "E-commerce Manager"
        ];

        const originalTexts = [
          "Chanlytics' AI agent is a game-changer. It instantly responds to leads from our social media, so we never miss an opportunity. Our booking rate has skyrocketed.",
          "We used to lose so many leads to missed calls. Now, Chanlytics' AI handles them 24/7, booking appointments automatically. It's like having a receptionist who never sleeps.",
          "The end-to-end automation is incredible. From capturing a lead to sending the final invoice, everything is handled. It has completely streamlined our sales process.",
          "The internal AI assistant is my favorite feature. I can just ask 'How many new clients did we onboard this week?' and get an instant answer. No more digging through spreadsheets.",
          "Integrating Chanlytics with our existing CRM was seamless. It automated our entire workflow, from lead nurturing to requesting reviews. Our efficiency has gone through the roof.",
          "Our clients are happier than ever. They get instant responses and easy booking, no matter when they reach out. Chanlytics has transformed our customer service.",
          "Since implementing Chanlytics, our lead conversion has increased by 40%. The AI handles all the initial follow-up, so our sales team can focus on closing deals.",
          "We get a ton of inquiries through Instagram DMs. Chanlytics' AI responds instantly and books demos for us. It's been a massive unlock for our social media marketing.",
          "Chanlytics automated our entire client pipeline. We capture more leads, book more appointments, and manage everything effortlessly. It's the most powerful business automation tool we've ever used.",
        ];

        const combinedData = users.map((user: any, index: number) => ({
          text: originalTexts[index],
          image: user.picture.thumbnail,
          name: `${user.name.first} ${user.name.last}`,
          role: roles[index],
        }));

        setTestimonials(combinedData);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) {
    return <div className="text-center my-20">Loading testimonials...</div>;
  }

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="bg-background my-8 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
