
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "What do I get by joining the VibeTube whitelist?",
      answer: "You'll get exclusive early access to VibeTube before public launch, special introductory pricing or perks, and the chance to provide direct feedback to shape the platform."
    },
    {
      question: "Who is VibeTube for?",
      answer: "VibeTube is designed for any YouTube creator or manager handling multiple channels who wants to save time, get better insights, and streamline their entire workflow."
    },
    {
      question: "When will VibeTube launch?",
      answer: "We're working hard to get VibeTube to you soon! Whitelist members will be the first to know about launch dates and get access. (We're targeting Q4 2025 for our initial release)."
    },
    {
      question: "What core features can I expect at launch for whitelist users?",
      answer: "Expect a powerful multi-channel dashboard, unified analytics, streamlined content uploading & scheduling, and integrated comment management – all designed to be your YouTube cockpit."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display-small font-bold text-gray-900 dark:text-white mb-4">
            Whitelist FAQ
          </h2>
          <p className="text-title-large text-gray-600 dark:text-gray-300">
            Everything you need to know about VibeTube
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
                <AccordionTrigger className="text-left text-title-medium font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 py-6">
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
