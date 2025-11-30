import { BrainCircuit, ChefHat, ListChecks, ShoppingCart } from "lucide-react";

const features = [
  {
    icon: ChefHat,
    title: "Personalized Meal Plans",
    description:
      "Get nutrition plans tailored to your fitness goals — whether you're cutting, bulking, or just staying consistent.",
  },
  {
    icon: ShoppingCart,
    title: "Smart Grocery Lists",
    description:
      "Auto-generated shopping lists organized by aisle. Spend less time thinking and more time thriving.",
  },
  {
    icon: ListChecks,
    title: "Dietary Preferences? Covered.",
    description:
      "Vegan, keto, halal, gluten-free — we’ll adapt to your needs without sacrificing taste or performance.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered, Human-Centered",
    description:
      "We use AI to simplify nutrition, not complicate it. You stay in control, always.",
  },
];

const Features = () => {
  return (
    <div id="features" className="w-full px-6 py-12 xs:py-20">
      <h2 className="text-center text-3xl font-bold tracking-tight xs:text-4xl sm:text-5xl">
        What You Get with Ficro
      </h2>
      <div className="mx-auto mt-10 grid w-full max-w-screen-lg gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col rounded-xl border bg-background px-5 py-6"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              <feature.icon className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold">{feature.title}</span>
            <p className="mt-1 text-[15px] text-foreground/80">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
