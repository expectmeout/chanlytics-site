import React from 'react';
import { CheckCircle2, XCircle, Zap, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const comparisonData = [
  {
    feature: 'Lead Capture & Response',
    aiBenefit: '24/7 automated lead engagement across platforms',
    manualDrawback: 'Missed leads outside business hours, slow responses',
  },
  {
    feature: 'Appointment Scheduling',
    aiBenefit: 'Automated booking, reminders, and calendar sync',
    manualDrawback: 'Time-consuming, error-prone manual coordination',
  },
  {
    feature: 'Client Communication',
    aiBenefit: 'Consistent, personalized, and timely follow-ups',
    manualDrawback: 'Inconsistent messaging, forgotten follow-ups',
  },
  {
    feature: 'Performance Tracking',
    aiBenefit: 'Real-time analytics and actionable insights dashboard',
    manualDrawback: 'Difficult to track, delayed data, manual reporting',
  },
  {
    feature: 'Operational Scalability',
    aiBenefit: 'Systems designed to grow with your business effortlessly',
    manualDrawback: 'Operations struggle to scale, bottlenecks form quickly',
  },
  {
    feature: 'Data-Driven Decisions',
    aiBenefit: 'AI-powered insights for strategic business choices',
    manualDrawback: 'Decisions based on guesswork or incomplete data',
  },
  {
    feature: 'Workflow Efficiency',
    aiBenefit: 'Streamlined end-to-end process automation',
    manualDrawback: 'Repetitive manual tasks drain time and resources',
  },
];

export default function ComparisonChart() {
  return (
    <section className="pt-0 pb-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-normal md:text-5xl">
            The Chanlytics Advantage: AI vs. Manual
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover how AI automation transforms your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* With Chanlytics AI Column */}
          <Card className="border-primary/20 bg-slate-50 shadow-xl dark:bg-gradient-to-br dark:from-zinc-900 dark:to-black">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl font-semibold text-primary">With Chanlytics AI</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              {comparisonData.map((item, index) => (
                <div key={index} className={`py-3 ${index < comparisonData.length - 1 ? 'border-b border-border' : ''}`}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">{item.feature}</h4>
                      <p className="text-sm text-muted-foreground">{item.aiBenefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Manual Approach Column */}
          <Card className="border-destructive/20 bg-slate-50 shadow-xl dark:bg-gradient-to-br dark:from-zinc-900 dark:to-black">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-destructive" />
                <CardTitle className="text-2xl font-semibold text-destructive">Manual Approach</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              {comparisonData.map((item, index) => (
                <div key={index} className={`py-3 ${index < comparisonData.length - 1 ? 'border-b border-border' : ''}`}>
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 flex-shrink-0 text-destructive mt-1" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">{item.feature}</h4>
                      <p className="text-sm text-muted-foreground">{item.manualDrawback}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
