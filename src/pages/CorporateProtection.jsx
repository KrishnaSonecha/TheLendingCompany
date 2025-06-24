import React, { useState } from "react";
import Hero from "../components/Hero";
import QualitySection from "../components/QualitySection";
import NewsletterSection from "../components/NewsletterSection";
import backgroundImage from "../assets/palace-1366178.webp";
import "../css/FAQs.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const corporateFAQs = [
  {
    question: "What is corporate protection?",
    answer:
      "Corporate protection refers to insurance and financial planning solutions designed to protect a business and its key stakeholders from financial loss due to unforeseen events such as death, illness, or departure of a key person.",
  },
  {
    question: "Why is corporate protection important?",
    answer:
      "It ensures that your business can continue to operate smoothly by providing financial support during critical events. It also helps maintain business continuity and protects both the company and its employees.",
  },
  {
    question: "What types of corporate protection are available?",
    answer:
      "Common types include key person insurance, shareholder protection, relevant life policies, and business loan protection.",
  },
  {
    question: "Who should consider corporate protection?",
    answer:
      "Any business owner, director, or key stakeholder in a company should consider corporate protection to safeguard their business interests and yourselves."
  }
];

const CorporateProtection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Hero
        title="Corporate Protection"
        subHeading="Safeguard Your Business Future"
        detail="Explore the importance of corporate protection and how it can shield your business from unexpected events."
        className="hero-4"
        imageUrl={backgroundImage}
      />

      <section className="faqs-container">
        <div className="intro-text">
          <h2 style={{ marginBottom: '1rem' }}>What is Corporate Protection?</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Corporate protection consists of financial safeguards designed to help a business survive and thrive during unforeseen circumstances—such as the death or illness of a key employee, or a dispute between business partners. 
            These measures typically include tailored insurance policies and legal agreements that ensure a smooth operational transition and sustained business continuity.
          </p>

          <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem' }}>Benefits of Corporate Protection</h3>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li>Ensures business continuity</li>
            <li>Protects shareholders and stakeholders</li>
            <li>Provides funds to cover key person loss or repay loans</li>
            <li>Supports employee and director welfare</li>
          </ul>

          <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem' }}>Potential Drawbacks</h3>
          <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            <li>Requires upfront investment in policies</li>
            <li>May involve complex setup depending on business structure</li>
            <li>Coverage limitations depending on the insurer and terms</li>
          </ul>
        </div>

        <div className="faq-list">
          <h3 style={{ marginBottom: '1rem' }}>Frequently Asked Questions</h3>
          {corporateFAQs.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="faq-icon" />
                ) : (
                  <FaChevronDown className="faq-icon" />
                )}
              </div>
              {openIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <QualitySection
        preHeader="Protect Your Business"
        mainHeading="Want to Know More About Corporate Protection?"
        description="Our advisors can guide you through your options and recommend tailored solutions for your company."
        buttonText="Speak to an Advisor"
        buttonLink="/configure"
        backgroundImage={backgroundImage}
      />

      <NewsletterSection />
    </>
  );
};

export default CorporateProtection;