"use client";

import { CircleCheck } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { cn } from "@/lib/utils";

const YEARLY_DISCOUNT = 20;
const plans = [
  {
    name: "Free",
    price: 0,
    description:
      "Perfect for trying Ficro out. Get started with the essentials.",
    features: [
      { title: "1 personalized meal plan/week" },
      { title: "Basic grocery list" },
      { title: "Up to 2 dietary preferences" },
      { title: "Limited preferences" },
    ],
    buttonText: "Get started",
  },
  {
    name: "Pro",
    price: 9,
    isRecommended: true,
    description: "For individuals serious about hitting their nutrition goals.",
    features: [
      { title: "Unlimited meal plans" },
      { title: "Full dietary preference customization" },
      { title: "Editable grocery lists" },
      { title: "Save meal history" },
      { title: "Macro breakdown & calorie goal" },
    ],
    buttonText: "Try for 7 days free",
    isPopular: true,
  },
  {
    name: "Elite",
    price: 19,
    description:
      "Best for high performers who want full automation and priority access.",
    features: [
      { title: "AI-tuned meals by goal" },
      { title: "Auto macro & calorie recalibration monthly" },
      { title: "Calendar sync (Google/Apple)" },
      { title: "Early feature access" },
      { title: "Priority support" },
    ],
    buttonText: "Get started",
  },
];

const Pricing = () => {
  const [selectedBillingPeriod, setSelectedBillingPeriod] = useState("monthly");

  return (
    <div
      id="pricing"
      className="flex flex-col items-center justify-center px-6 py-12 xs:py-20"
    >
      <h1 className="text-center text-3xl font-bold tracking-tight xs:text-4xl md:text-5xl">
        Pricing
      </h1>
      <Tabs
        value={selectedBillingPeriod}
        onValueChange={setSelectedBillingPeriod}
        className="mt-8"
      >
        <TabsList className="h-11 rounded-full px-1.5 py-1">
          <TabsTrigger
            value="monthly"
            className="rounded-full py-1.5 text-muted-foreground data-[state=active]:text-foreground"
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            value="yearly"
            className="rounded-full py-1.5 text-muted-foreground data-[state=active]:text-foreground"
          >
            Yearly (Save {YEARLY_DISCOUNT}
            %)
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="mx-auto mt-12 grid max-w-screen-lg grid-cols-1 justify-center gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn("relative border rounded-xl p-6 bg-background/50", {
              "border-[2px] border-primary bg-background": plan.isPopular,
            })}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                Most Popular
              </Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">
              $
              {selectedBillingPeriod === "monthly"
                ? plan.price
                : Math.floor(plan.price * ((100 - YEARLY_DISCOUNT) / 100))}
              <span className="ml-1.5 text-sm font-normal text-muted-foreground">
                /month
              </span>
            </p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>

            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className="mt-6 w-full rounded-full text-base"
            >
              {plan.buttonText}
            </Button>
            <Separator className="my-8" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-1.5">
                  <CircleCheck className="mt-1 h-4 w-4 text-green-600" />
                  {feature.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
