import React from "react";
import Hero from "../components/Hero";
import QualitySection from "../components/QualitySection";
import NewsletterSection from "../components/NewsletterSection";
import backgroundImage from "../assets/palace-1366178.webp";
import "../css/FAQs.css";

const Complaints = () => {
  return (
    <>
      <Hero
        title="Complaints"
        subHeading="We Take Concerns Seriously"
        detail="Our complaints process is here to ensure every issue is resolved fairly and transparently. Please read our full policy below."
        className="hero-4"
        imageUrl={backgroundImage}
      />

      <section className="faqs-container">
        <div className="faq-list" style={{ textAlign: "center" }}>
          <iframe
            src="/Complaints.pdf"
            width="100%"
            height="1000px"
            style={{ border: "none" }}
            title="Complaints Policy PDF"
          >
            This browser does not support PDFs. Please download the PDF to view it:
            <a href="/Complaints.pdf" download>
              Download Complaints Policy
            </a>
          </iframe>
        </div>
      </section>

      <QualitySection
        preHeader="Need More Support?"
        mainHeading="We're Here to Help"
        description="Whether it’s feedback or a formal complaint, our team is committed to listening and improving your experience."
        buttonText="Contact Us"
        buttonLink="/configure"
        backgroundImage={backgroundImage}
      />

      <NewsletterSection />
    </>
  );
};

export default Complaints;