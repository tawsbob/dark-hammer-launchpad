
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How many YouTube channels can I manage?",
      answer: "Dark Hammer supports unlimited channels on all plans. Whether you have 2 or 20 channels, our dashboard scales with your creator empire."
    },
    {
      question: "Does it work with YouTube Shorts and long-form content?",
      answer: "Absolutely! Dark Hammer optimizes workflows for all content types - Shorts, long-form, live streams, and premieres. Our scheduler adapts to each format's best practices."
    },
    {
      question: "What about analytics and revenue tracking?",
      answer: "We aggregate analytics from all your channels into one unified view. Track subscribers, views, engagement, and monetization metrics without jumping between Creator Studio tabs."
    },
    {
      question: "Can I bulk schedule content across multiple channels?",
      answer: "Yes! Upload once, distribute everywhere. Our intelligent scheduler considers each channel's optimal posting times and audience preferences automatically."
    },
    {
      question: "Is there a mobile app coming?",
      answer: "Mobile app is planned for V2 launch. The web version is fully responsive and works great on mobile browsers for now."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display-small font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-title-large text-gray-600 dark:text-gray-300">
            Everything you need to know about Dark Hammer
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white dark:bg-gray-900 rounded-lg border-0 shadow-sm px-6"
              >
                <AccordionTrigger className="text-left text-title-medium font-semibold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body-medium text-gray-600 dark:text-gray-300 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
