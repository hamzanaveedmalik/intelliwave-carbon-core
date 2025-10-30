import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: 'How long does it take to build my website?',
    answer:
      'Our standard websites take 4-6 weeks from start to finish. Custom web applications typically take 8-12 weeks. We provide detailed timelines during our free consultation.',
  },
  {
    question: "What's included in the 40% discount for founding clients?",
    answer:
      'The first 15 clients receive 40% off our standard pricing. This includes all features and support, with the same quality and delivery timeline. Limited spots available.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer:
      'Yes! All packages include free support for 1-3 months after launch. We also offer ongoing maintenance packages starting from £99/month.',
  },
  {
    question: "Can I make changes to my website after it's built?",
    answer:
      "Absolutely. We provide training on how to update content, and we're available for additional changes. Most clients find our CMS easy to use for regular updates.",
  },
  {
    question: "What if I'm not happy with the result?",
    answer:
      "We offer a 100% money-back guarantee if you're not satisfied with the final result. We work closely with you throughout the process to ensure you love your new website.",
  },
  {
    question: 'Do you work with businesses outside the UK?',
    answer:
      "While we're UK-based and specialize in UK businesses, we're happy to work with international clients. Our GMT timezone works well with European and US East Coast clients.",
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, bank transfers, and PayPal. We can also set up payment plans for larger projects.',
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer:
      'Yes! All our websites are fully responsive and optimized for mobile devices. Mobile-friendliness is included in every package at no extra cost.',
  },
];

export const FAQ = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our web development services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
