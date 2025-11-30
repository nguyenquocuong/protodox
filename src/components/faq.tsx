import { CreditCard, Edit3, HelpCircle, Utensils } from "lucide-react";

const faq = [
  {
    icon: HelpCircle,
    question: "Is Ficro a workout app too?",
    answer:
      "Not yet! Our focus is nutrition — what fuels your fitness journey.",
  },
  {
    icon: Utensils,
    question: "Can I use Ficro if I have allergies?",
    answer:
      "Yes — you can exclude ingredients or allergens in your preferences.",
  },
  {
    icon: Edit3,
    question: "Is the meal plan customizable?",
    answer:
      "100%. You can swap meals, regenerate plans, or adjust preferences anytime.",
  },
  {
    icon: CreditCard,
    question: "Will you charge me after signup?",
    answer:
      "Nope. You start with Free. We’ll only charge if you choose a paid plan after trial.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="flex items-center justify-center px-6 py-12 sm:py-20"
    >
      <div className="max-w-screen-lg">
        <h2 className="text-center text-3xl !leading-[1.15] font-bold tracking-tight xs:text-4xl md:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-center text-muted-foreground xs:text-lg">
          Quick answers to common questions about our products and services.
        </p>

        <div className="mt-12 grid overflow-hidden rounded-xl bg-background outline outline-[1px] outline-offset-[-1px] outline-border md:grid-cols-2">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="-mt-px -ml-px border p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent xs:h-10 xs:w-10">
                <Icon className="h-4 w-4 xs:h-6 xs:w-6" />
              </div>
              <div className="mt-3 mb-2 flex items-start gap-2 text-lg font-semibold tracking-tight xs:text-[1.35rem]">
                <span>{question}</span>
              </div>
              <p className="text-sm xs:text-base">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
