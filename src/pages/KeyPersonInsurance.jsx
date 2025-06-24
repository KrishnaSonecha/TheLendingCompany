import React, { useState } from "react";
import Hero from "../components/Hero";
import QualitySection from "../components/QualitySection";
import NewsletterSection from "../components/NewsletterSection";
import backgroundImage from "../assets/palace-1366178.webp";
import "../css/FAQs.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const keyPersonFAQs = [
    {
        question: "What is Key Person Insurance?",
        answer:
            "Key Person Insurance is a life insurance policy taken out by a business on the life of an employee who is critical to the business's success. The business is the beneficiary and pays the premiums.",
    },
    {
        question: "Why is Key Person Insurance important?",
        answer:
            "It provides financial stability to a business in the event of the death or critical illness of a key employee. The payout can be used to cover lost profits, recruitment costs, and other expenses associated with replacing the key person.",
    },
    {
        question: "Who is considered a 'key person'?",
        answer:
            "A key person is an employee whose absence due to death or critical illness would significantly impact the business's revenue, operations, or overall profitability. This could be a CEO, a top salesperson, a technical expert, or anyone with unique skills or knowledge.",
    },
    {
        question: "What does Key Person Insurance cover?",
        answer:
            "It typically covers death and can often include critical illness cover, providing a lump sum payout upon the diagnosis of a specified serious illness.",
    },
    {
        question: "How is the coverage amount determined?",
        answer:
            "The coverage amount is usually determined based on the key person's contribution to the company's profits, the cost of replacing them, and any outstanding debts or liabilities that their absence might affect.",
    },
    {
        question: "Who pays the premiums for Key Person Insurance?",
        answer:
            "The business pays the premiums and is the beneficiary of the policy.",
    },
    {
        question: "Are the premiums tax-deductible?",
        answer:
            "This is typically a matter best addressed by your accountant, as tax treatment can vary depending on your specific circumstances. However, if you require specialist advice, we’d be happy to connect you with trusted firms who can assist.",
    },
];

const KeyPersonInsurance = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Hero
                title="Key Person Insurance"
                subHeading="Protect Your Most Valuable Assets: Your Key People"
                detail="Discover how Key Person Insurance can safeguard your business against the financial impact of losing a crucial employee."
                className="hero-4"
                imageUrl={backgroundImage}
            />

            <section className="faqs-container">
                <div className="intro-text">
                    <h2 style={{ marginBottom: '1rem' }}>What is Key Person Insurance?</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Key Person Insurance is a vital safeguard for businesses, providing financial protection against the potential loss of a critical employee due to death or critical illness. This insurance acts as a financial buffer, helping the business to navigate the challenging period of transition, cover recruitment and training costs for a replacement, and stabilize overall revenue.
                    </p>

                    <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem' }}>Benefits of Key Person Insurance</h3>
                    <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                        <li>Provides financial stability during a difficult transition.</li>
                        <li>Helps cover the costs of recruiting and training a replacement.</li>
                        <li>Protects the business's revenue and profitability.</li>
                        <li>Can reassure stakeholders and lenders about business continuity.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem' }}>Potential Considerations</h3>
                    <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
                        <li>Requires careful assessment to determine the appropriate coverage amount.</li>
                        <li>Premiums are an ongoing business expense.</li>
                        <li>The definition of 'critical illness' varies between policies.</li>
                    </ul>
                </div>

                <div className="faq-list">
                    <h3 style={{ marginBottom: '1rem' }}>Frequently Asked Questions</h3>
                    {keyPersonFAQs.map((item, index) => (
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
                preHeader="Secure Your Business's Future"
                mainHeading="Are Key Employees Crucial to Your Success?"
                description="Learn how Key Person Insurance can provide a financial safety net for your business. Speak to our advisors for a tailored consultation."
                buttonText="Discuss Key Person Cover"
                buttonLink="/configure"
                backgroundImage={backgroundImage}
            />

            <NewsletterSection />
        </>
    );
};

export default KeyPersonInsurance;