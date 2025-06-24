import React from "react";
import Hero from "../components/Hero";
import QualitySection from "../components/QualitySection";
import NewsletterSection from "../components/NewsletterSection";
import backgroundImage from "../assets/palace-1366178.webp";
import "../css/FAQs.css";

const PrivacyNotice = () => {
  return (
    <>
      <Hero
        title="Privacy Notice"
        subHeading="Your Data, Our Responsibility"
        detail="We believe in transparency and trust. You can view our complete privacy policy in the document below."
        className="hero-4"
        imageUrl={backgroundImage}
      />

      <section className="faqs-container">
        <div className="faq-list" style={{ textAlign: "center" }}>
          <iframe
            src="/PrivacyNotice.pdf"
            width="100%"
            height="1000px"
            style={{ border: "none" }}
            title="Privacy Notice PDF"
          >
            This browser does not support PDFs. Please download the PDF to view it:
            <a href="/PrivacyNotice.pdf" download>
              Download Privacy Notice
            </a>
          </iframe>
        </div>
      </section>

      <QualitySection
        preHeader="Still Have Questions?"
        mainHeading="Let’s Talk"
        description="Reach out any time to learn more about how your data is handled with care and compliance."
        buttonText="Contact Us"
        buttonLink="/configure"
        backgroundImage={backgroundImage}
      />

      <NewsletterSection />
    </>
  );
};

export default PrivacyNotice;