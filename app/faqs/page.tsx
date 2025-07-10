import { AccordionGroup } from "@/components/AccordionGroup";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const getting_started = [
  {
    question: "What is My Health Notion (MHN)?",
    answer:
      "MHN is an AI-powered health platform that helps you securely store, manage, and understand your medical records while offering personalized health insights and lifestyle tracking.",
  },
  {
    question: "Is MHN free to use?",
    answer:
      "MHN offers a free version with essential features. Premium features may be available with subscription plans in the future.",
  },
  {
    question: "How do I create an MHN account?",
    answer:
      "You can sign up using your email or phone number through our mobile app available on the Google Play Store and App Store.",
  },
  {
    question: "Is my personal and medical data safe with MHN?",
    answer:
      "Absolutely. MHN uses end-to-end encryption and follows stringent data privacy standards to ensure your health information stays protected.",
  },
];

const managing_health_records = [
  {
    question: "How do I share my records with a doctor or caregiver?",
    answer:
      "MHN allows you to securely share selected records with doctors or caregivers via the app with customizable time limits and permissions.",
  },
  {
    question: "Can I upload reports from any hospital or diagnostic center?",
    answer:
      "Yes! You can upload reports from any source—whether scanned, photographed, or emailed to your MHN account.",
  },
  {
    question: "Can I track my health progress using MHN?",
    answer:
      "Yes, MHN provides timeline views, trends, and summaries to help you monitor changes in your health over time.",
  },
  {
    question: "What file types can I upload?",
    answer:
      "You can upload PDFs, images (JPG/PNG), and digital reports through email, upload, or direct sync (where available).",
  },
];

const smart_ai = [
  {
    question: "What kind of insights does MHN provide?",
    answer:
      "MHN's AI offers insights into your health parameters, flags abnormalities, and provides suggestions for lifestyle or diet improvements.",
  },
  {
    question: "Will MHN give me medical advice or diagnosis?",
    answer:
      "No. MHN does not replace a doctor. It provides data-driven insights and prompts that you can discuss with your healthcare provider.",
  },
  {
    question: "How accurate are the AI-based insights?",
    answer:
      "Our AI is trained using validated medical guidelines and datasets. However, always consult a healthcare professional for diagnosis and treatment.",
  },
];

const tech_support = [
  {
    question: "Is MHN available on both Android and iOS?",
    answer:
      "Yes, MHN is available for download on both Android and iOS platforms.",
  },
  {
    question: "How often is MHN updated?",
    answer:
      "We regularly update MHN to improve performance, introduce new features, and enhance user experience.",
  },
  {
    question: "Will I lose my data if I change devices?",
    answer:
      "No. As long as you log in with the same credentials, your data stays securely stored and synced across devices.",
  },
  {
    question: "Does MHN require an internet connection to function?",
    answer:
      "Yes, most features like AI insights and syncing require internet. You can access downloaded files offline.",
  },
];

const account_support = [
  {
    question: "I forgot my password. What should I do?",
    answer:
      'Click on "Forgot Password" on the login screen and follow the instructions to reset your password via phone, or contact us at +91 999 222 57 24 or support@myhealthnotion.ai.',
  },
  {
    question: "The app is not working properly. Who can I contact?",
    answer:
      "Please email us at support@myhealthnotion.ai or call +91 999 222 57 24 for quick assistance.",
  },
  {
    question: "Can I delete my account and data?",
    answer:
      "Yes. You can request account deletion from the settings menu or by contacting support. All associated data will be permanently removed.",
  },
  {
    question: "Can I use MHN outside of India?",
    answer:
      "Yes, you can access and use MHN globally. However, localized integrations are currently focused on India.",
  },
  {
    question: "Is there a subscription or payment involved?",
    answer:
      "Currently, the core features are free. We may introduce paid plans for advanced features in future updates.",
  },
];

const additional_features = [
  {
    question: "Can I add family members to my MHN account?",
    answer:
      "Yes! MHN allows you to create and manage health profiles for your family members under one account. It's perfect for parents, caregivers, or those managing elderly care.",
  },
  {
    question: "Can MHN track my vitals from fitness devices?",
    answer:
      "Yes, MHN supports syncing with compatible wearables (coming soon), allowing you to track vitals like heart rate, steps, sleep, and more.",
  },
  {
    question: "How does MHN's AI learn about my health?",
    answer:
      "MHN's AI uses your uploaded reports, lifestyle tracking, and recurring patterns to understand your unique health journey and refine its insights over time.",
  },
  {
    question: "Will I get alerts if something in my reports looks unusual?",
    answer:
      "Yes! Our AI flags abnormal values in lab reports and offers intelligent nudges, encouraging timely consultation or lifestyle adjustments.",
  },
  {
    question: "Can I export all my medical records from MHN?",
    answer:
      "Absolutely. You can download individual files or a compiled health report PDF for backup or sharing with healthcare providers.",
  },
  {
    question: "Is MHN available as both a mobile app and web platform?",
    answer:
      "Currently, MHN is available as a mobile app. A web version is in development to offer a more flexible experience across devices.",
  },
  {
    question: "Is MHN available in regional languages?",
    answer:
      "Multilingual support is in our roadmap. We're working on providing MHN in major Indian languages to make it more accessible.",
  },
  {
    question: "Can I provide feedback or suggest new features?",
    answer:
      "We'd love that! You can share your suggestions directly through the app or email us at feedback@myhealthnotion.ai. Your input helps us grow better, together.",
  },
  {
    question: "Does MHN work without an internet connection?",
    answer:
      "You can view downloaded reports and summaries offline. However, syncing data, accessing AI insights, and certain features require an internet connection.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-12 mt-12">
            <h1 className="md:text-4xl text-2xl font-bold tracking-tight text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="md:text-lg text-md text-gray-600 max-w-2xl mx-auto tracking-tight">
              Find answers to common questions about My Health Notion (MHN) and
              how to make the most of your health management journey.
            </p>
          </div>

          {/* FAQ Groups */}
          <div className="space-y-8">
            <AccordionGroup
              title="Getting Started"
              items={getting_started}
              groupId="getting-started"
            />

            <AccordionGroup
              title="Managing Health Records"
              items={managing_health_records}
              groupId="managing-records"
            />

            <AccordionGroup
              title="Smart AI Features"
              items={smart_ai}
              groupId="smart-ai"
            />

            <AccordionGroup
              title="Technical Support"
              items={tech_support}
              groupId="tech-support"
            />

            <AccordionGroup
              title="Account Support"
              items={account_support}
              groupId="account-support"
            />

            <AccordionGroup
              title="Additional Features"
              items={additional_features}
              groupId="additional-features"
            />
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              {
                "Can't find what you're looking for? Our support team is here to help."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@myhealthnotion.ai"
                className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
