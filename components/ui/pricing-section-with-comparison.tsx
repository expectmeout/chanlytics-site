import { Check, Minus, MoveRight, PhoneCall, Users, BarChart, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

// Define render helpers for the comparison table
const renderCheck = () => <Check className="w-4 h-4 text-primary" />;
const renderMinus = () => <Minus className="w-4 h-4 text-muted-foreground" />;
const renderText = (text: string) => <p className="text-muted-foreground text-sm text-center">{text}</p>;

function Pricing() {
  return (
    <div className="w-full pt-16 lg:pt-0 pb-20 lg:pb-40 bg-background">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">

          {/* Wrapper for horizontal scrolling on mobile */}
          <div className="w-full overflow-x-auto pt-20">
            {/* Single Grid for Tiers + Comparison Table - 4 cols, min-width for scroll */}
            <div className="grid text-left min-w-[840px] lg:min-w-full grid-cols-4 divide-border">

              {/* --- Row 1: Tiers --- */} 
              {/* Feature Title Column (Desktop Only) */}
              <div className="flex flex-col justify-between px-3 lg:px-6 py-4">
                <div>
                  <p className="text-lg font-semibold mb-3">Core Features</p>
                  <p className="text-sm text-muted-foreground">Comparison of key capabilities across our main service offerings.</p>
                </div>
                <div className="h-16"></div>
              </div>

              {/* Operations Tier */}
              {/* Added lg:border-l */} 
              <div className="col-span-1 px-3 py-4 md:px-6 md:py-4 gap-2 flex flex-col lg:border-l">
                <p className="text-2xl flex items-center gap-2"><Users className="w-6 h-6 text-primary"/> Operations</p>
                <p className="text-sm text-muted-foreground min-h-[80px]">
                  Dedicated VA teams to manage your day-to-day marketplace tasks, inventory, and customer support.
                </p>
                <p className="flex flex-col lg:flex-row lg:items-end gap-1 text-xl mt-8">
                  <span className="text-sm text-muted-foreground mr-1">Starts at</span>
                  <span className="text-4xl">$Custom</span>
                  <span className="text-sm text-muted-foreground"> / setup</span>
                </p>
                <Button variant="outline" className="gap-4 mt-8" asChild>
                   <Link href="/examples/services/operations">
                     Learn More <MoveRight className="w-4 h-4" />
                   </Link>
                </Button>
              </div>

              {/* Advertising Tier */} 
              {/* Added lg:border-l */}
              <div className="col-span-1 px-3 py-4 md:px-6 md:py-4 gap-2 flex flex-col lg:border-l bg-muted/30">
                <p className="text-2xl flex items-center gap-2"><BarChart className="w-6 h-6 text-primary"/> Advertising</p>
                <p className="text-sm text-muted-foreground min-h-[80px]">
                  Expert management of Sponsored Products, Brands, and Display ads on Amazon & Walmart.
                </p>
                <p className="flex flex-col lg:flex-row lg:items-end gap-1 text-xl mt-8">
                  <span className="text-sm text-muted-foreground mr-1">Starts at</span>
                  <span className="text-4xl">$Custom</span>
                  <span className="text-sm text-muted-foreground"> / month</span>
                </p>
                <Button className="gap-4 mt-8" asChild>
                   <Link href="/examples/services/advertising">
                     Learn More <MoveRight className="w-4 h-4" />
                   </Link>
                </Button>
              </div>

              {/* AI Automations Tier */} 
              {/* Added lg:border-l */} 
              <div className="col-span-1 px-3 py-4 md:px-6 md:py-4 gap-2 flex flex-col lg:border-l">
                <p className="text-2xl flex items-center gap-2"><BarChart className="w-6 h-6 text-primary"/> AI Automations</p>
                <p className="text-sm text-muted-foreground min-h-[80px]">
                  Expert management of Sponsored Products, Brands, and Display ads on Amazon & Walmart.
                </p>
                <p className="flex flex-col lg:flex-row lg:items-end gap-1 text-xl mt-8">
                  <span className="text-sm text-muted-foreground mr-1">Starts at</span>
                  <span className="text-4xl">$Custom</span>
                  <span className="text-sm text-muted-foreground"> / project</span>
                </p>
                <Button variant="outline" className="gap-4 mt-8" asChild>
                  <Link href="/examples/services/ai-automations">
                    Contact Us <PhoneCall className="w-4 h-4" />
                   </Link>
                </Button>
              </div>

              {/* --- Row 2: Header for Comparison Table --- */}
              <div className="px-3 lg:px-6 py-4">
                <b>Key Capabilities</b>
              </div>
              <div className="flex items-center justify-center px-3 py-4 md:px-6 md:py-4 lg:border-l">
                <p className="text-sm font-semibold text-center">Operations</p>
              </div>
              <div className="flex items-center justify-center px-3 py-4 md:px-6 md:py-4 lg:border-l bg-muted/30">
                 <p className="text-sm font-semibold text-center">Advertising</p>
              </div>
              <div className="flex items-center justify-center px-3 py-4 md:px-6 md:py-4 lg:border-l">
                 <p className="text-sm font-semibold text-center">AI Automations</p>
              </div>

              {/* --- Row 3: Feature: Dedicated Team --- */}
              <div className="px-3 lg:px-6 py-4">Dedicated Team Size</div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center lg:border-l">
                {renderText("Scalable")}
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center lg:border-l bg-muted/30">
                {renderText("Managed In-House")}
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center lg:border-l">
                 {renderMinus()}
              </div>

              {/* --- Row 4: Feature: Campaign Management --- */}
              <div className="px-3 lg:px-6 py-4">Campaign Management</div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center lg:border-l">
                {renderMinus()}
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center lg:border-l bg-muted/30">
                {renderCheck()}
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center lg:border-l">
                {renderMinus()}
              </div>

              {/* --- Row 5: Feature: Workflow Automation --- */}
              <div className="px-3 lg:px-6 py-4">Workflow Automation</div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center lg:border-l">
                {renderCheck()}
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center lg:border-l bg-muted/30">
                {renderMinus()}
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center lg:border-l">
                {renderCheck()}
              </div>

              {/* --- Row 6: Feature: Reporting --- */}
              <div className="px-3 lg:px-6 py-4">Performance Reporting</div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center lg:border-l">
                {renderCheck()}
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center lg:border-l bg-muted/30">
                {renderCheck()}
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center lg:border-l">
                {renderCheck()}
              </div>

              {/* --- Row 7: Feature: Support Level --- */}
              <div className="px-3 lg:px-6 py-4">Support Level</div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center lg:border-l">
                {renderText("Live Analytics ChatGPT/Optional Dedicated Specialist")}
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center lg:border-l bg-muted/30">
                {renderText("Dedicated Specialist/Live Analytics ChatGPT")}
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center lg:border-l">
                {renderText("Dedicated Specialist")}
              </div>

              {/* --- Row 8: Feature: Platform Focus --- */}
              <div className="px-3 lg:px-6 py-4">Platform Focus</div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center lg:border-l">
                {renderText("Amazon & Walmart")}
              </div>
              <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center lg:border-l bg-muted/30">
                 {renderText("Amazon & Walmart")}
              </div>
              <div className="px-3 py-1 md:px-6 md:py4 flex justify-center items-center lg:border-l">
                {renderText("All Systems")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing }; 