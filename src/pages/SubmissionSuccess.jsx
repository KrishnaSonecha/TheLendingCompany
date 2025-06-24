import React, { useEffect } from "react";
import Hero from "../components/Hero";
import ThankYouBanner from "../assets/palace-1366178.webp"; // use your preferred banner here
import "../css/FormStyles.css"; // same as Configure

const SubmissionSuccess = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero
        title="Your Application Has Been Received"
        subHeading="Thank you for choosing The Lending Company"
        detail="Our team will be in touch shortly to discuss your financing needs."
        className="hero-2"
        imageUrl={ThankYouBanner}
      />

      <div
        style={{
          backgroundColor: "#fff",
          textAlign: "center",
          padding: "60px 20px",
          minHeight: "40vh",
        }}
      >
        <h2 style={{ color: "#1d2d50", fontWeight: "600" }}>
          Your form has been submitted!
        </h2>
        <p style={{ marginTop: "10px" }}>
          One of our advisors will reach out to you shortly.
        </p>
      </div>
    </>
  );
};

export default SubmissionSuccess;