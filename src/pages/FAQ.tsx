
import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  // FAQ content organized by categories
  const faqCategories = [
    {
      category: "Account & Registration",
      questions: [
        {
          question: "How do I create an account on LocalLink?",
          answer: "You can create an account by clicking on the 'Register' button in the top navigation bar. You'll need to provide your name, email address, and create a password. You'll also need to verify your address to ensure you receive information relevant to your area."
        },
        {
          question: "Why do I need to verify my address?",
          answer: "Address verification helps us ensure you receive information that's specific to your neighborhood and jurisdiction. This allows for a personalized experience with content that's relevant to your location."
        },
        {
          question: "Is my personal information secure?",
          answer: "Yes, we take data security very seriously. Your personal information is encrypted and stored securely. We do not share your information with third parties without your consent. You can read more about our data practices in our Privacy Policy."
        },
        {
          question: "Can I change my notification preferences?",
          answer: "Yes, you can customize your notification preferences in your account settings. You can choose to receive alerts about specific topics, set the frequency of notifications, and select your preferred communication channels."
        }
      ]
    },
    {
      category: "Platform Features",
      questions: [
        {
          question: "How does the neighborhood-specific feed work?",
          answer: "The neighborhood feed is customized based on your verified address. It shows you local government activities, proposed legislation, infrastructure projects, and community announcements that affect your specific area."
        },
        {
          question: "What kind of issues can I report through the platform?",
          answer: "You can report a variety of community issues, including road problems, sanitation issues, water supply problems, electricity issues, pollution concerns, public safety hazards, traffic problems, noise complaints, and public property damage."
        },
        {
          question: "How can I contact my elected representatives?",
          answer: "Once logged in, you can use our direct messaging feature to communicate with your elected officials. The system identifies your representatives based on your verified address, making it easy to reach the right person."
        },
        {
          question: "How do community polls work?",
          answer: "Community polls allow you to share your opinion on local issues. You can vote on existing polls or, in some cases, propose new topics for polling. Results are displayed with demographic breakdowns to show representation across the community."
        }
      ]
    },
    {
      category: "Government Interaction",
      questions: [
        {
          question: "Who responds to the issues I report?",
          answer: "Reports are directed to the appropriate government department based on the issue type and location. Government officials who are responsible for that area will review and respond to your submission."
        },
        {
          question: "How long does it typically take to get a response?",
          answer: "Response times vary depending on the issue type, urgency, and department workload. You can track the status of your submission through your account, and the platform shows average response times for different types of issues."
        },
        {
          question: "Can I see what other citizens are reporting?",
          answer: "Yes, you can view public reports in your area through the neighborhood feed. This helps avoid duplicate reports and allows you to support issues raised by others in your community."
        },
        {
          question: "How are legislative proposals simplified for understanding?",
          answer: "Our platform uses a combination of expert analysis and AI technology to translate complex legal language into plain, accessible formats. Each proposal includes summaries of different lengths, visual aids, and impact assessments."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What should I do if I encounter a technical issue?",
          answer: "If you experience technical difficulties, please visit our Contact page and submit a support request. Be sure to include details about the issue, what you were trying to do, and any error messages you received."
        },
        {
          question: "Is the platform accessible on mobile devices?",
          answer: "Yes, LocalLink is fully responsive and optimized for mobile use. You can access all features through your mobile browser, or download our mobile app for iOS and Android devices."
        },
        {
          question: "What browsers are supported?",
          answer: "LocalLink works with all major modern browsers, including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend keeping your browser updated to the latest version."
        },
        {
          question: "Can I use the platform if I have limited internet access?",
          answer: "Yes, we've designed features with low-bandwidth options. For those with very limited access, we also offer offline materials and SMS notification options for critical updates."
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Find answers to common questions about using the LocalLink platform to engage with your local government.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {faqCategories.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-xl font-semibold">{category.category}</h2>
              <Accordion type="single" collapsible className="border rounded-md">
                {category.questions.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${idx}-${i}`}>
                    <AccordionTrigger className="px-4 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p>{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4">Can't find what you're looking for?</p>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button variant="outline">Contact Support</Button>
            </Link>
            <Link to="/how-it-works">
              <Button>Learn How It Works</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
