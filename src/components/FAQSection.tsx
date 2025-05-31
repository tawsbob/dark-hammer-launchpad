import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "@/hooks/useTranslation";

export const FAQSection = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("faqChannelsQuestion"),
      answer: t("faqChannelsAnswer")
    },
    {
      question: t("faqShortsQuestion"),
      answer: t("faqShortsAnswer")
    },
    {
      question: t("faqAnalyticsQuestion"),
      answer: t("faqAnalyticsAnswer")
    },
    {
      question: t("faqSchedulingQuestion"),
      answer: t("faqSchedulingAnswer")
    },
    {
      question: t("faqMobileQuestion"),
      answer: t("faqMobileAnswer")
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display-small font-bold text-gray-900 dark:text-white mb-4">
            {t("faqTitle")}
          </h2>
          <p className="text-title-large text-gray-600 dark:text-gray-300">
            {t("faqSubtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white dark:bg-gray-900 rounded-lg border-0 shadow-sm px-4 lg:px-6"
              >
                <AccordionTrigger className="text-left text-base lg:text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 py-4 lg:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm lg:text-base text-gray-600 dark:text-gray-300 pb-4 lg:pb-6 leading-relaxed">
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
