import { Phone, Mail, MapPin } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import Contact from "../components/Contact.jsx";

const ContactPage = () => {
  return (
    <div className="container-full contact-page">
      {/* Hero Section - Using PageHero Component */}
      <PageHero
        title="Contact Us"
        subtitle="Get In Touch"
        description="At Ocean Serenity Marine Pvt Ltd, we're here to help you with all your marine service needs. Reach out to us for inquiries, quotes, and expert support for your maritime requirements."
      />

      <Contact />
    </div>
  );
};

export default ContactPage;
