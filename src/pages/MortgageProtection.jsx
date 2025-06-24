import React, { useState, useEffect, useRef } from "react";
import { FaCaretRight } from "react-icons/fa";
import {
    FaHome,       // Residential Mortgages
    FaBuilding,     // Commercial Mortgages
    FaUmbrella,     // Mortgage Protection
    FaHeart,        // Critical Illness Cover
    FaBriefcase,    // Corporate Protection
    FaMoneyBill,    // Income Protection
    FaHospital,     // Private Medical Healthcare
    FaUsers         // Single/Joint Applicants
} from "react-icons/fa";
import Hero from "../components/Hero";
import CtaSection from "../components/CtaSection";
import QualitySection from "../components/QualitySection";
import NewsletterSection from "../components/NewsletterSection";
import "../css/ProgramPage.css";
import "../css/commercialmortgages.css";
import "../css/mortgageprotection.css";
import FirstTimeBuyersLoan from "../assets/architecture-3121009.webp";
import CtaImg1 from "../assets/palace-1366178.webp";
import CtaImg2 from "../assets/building-img.webp";
import CtaImg3 from "../assets/loan-img.webp";
import CtaImg4 from "../assets/building-img2.webp";
import backgroundImage from "../assets/palace-1366178.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHeart, faCoins, faUserShield, faHospital } from '@fortawesome/free-solid-svg-icons';

const TypingText = () => {
    const fullMessageList = [
        ["Secure Your Future.", "No Brokerage Fees."],
        ["Peace of Mind for Your Family.", "No Brokerage Fees."],
        ["Safeguard Your Investment.", "No Brokerage Fees."],
        ["Don't Leave it to Chance.", "Protect Your Mortgage Today."],
        ["Financial Security.", "For What Matters Most."],
        ["Your Family's Safety Net.", "Completely Fee-Free."],
        ["Protect Your Biggest Asset.", "Without any Broker Fees."],
        ["Insurance You Can Depend On.", "For Life's Uncertainties."],
        ["Secure Your Mortgage.", "Protect Your Loved Ones."],
        ["Mortgage Protection Experts.", "Completely Fee-Free."]
    ];

    const getRandomMessage = () => fullMessageList[Math.floor(Math.random() * fullMessageList.length)];
    const [currentMessage, setCurrentMessage] = useState(getRandomMessage());
    const [displayedText, setDisplayedText] = useState(["", ""]);
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [pause, setPause] = useState(false);
    const [fontSize, setFontSize] = useState(1.5);
    const [maxFontSize, setMaxFontSize] = useState(1.5);
    const containerRef = useRef(null);
    const lineRefs = [useRef(null), useRef(null)];

    const updateMaxFontSize = () => {
        const screenWidth = window.innerWidth;
        const maxSize = screenWidth >= 1500 ? 3.0 : 1.5;
        setMaxFontSize(maxSize);
        setFontSize(maxSize);
    };

    const adjustFontSize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 1150) return;

        if (!containerRef.current || !lineRefs[0].current || !lineRefs[1].current) return;
        const containerWidth = containerRef.current.offsetWidth;
        const lineWidths = lineRefs.map((ref) => ref.current.offsetWidth);
        const maxWidth = Math.max(...lineWidths);

        if (maxWidth > containerWidth && fontSize > 1.0) {
            setFontSize((prev) => parseFloat((prev - 0.1).toFixed(2)));
        }
    };

    useEffect(() => {
        updateMaxFontSize();
        window.addEventListener("resize", updateMaxFontSize);
        return () => window.removeEventListener("resize", updateMaxFontSize);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => adjustFontSize(), 100);
        return () => clearTimeout(timeout);
    }, [displayedText]);

    useEffect(() => {
        if (pause) return;

        const currentLineText = currentMessage[lineIndex];
        let timeout;

        if (!isDeleting) {
            if (charIndex <= currentLineText.length) {
                timeout = setTimeout(() => {
                    setDisplayedText((prev) => {
                        const updated = [...prev];
                        updated[lineIndex] = currentLineText.substring(0, charIndex);
                        return updated;
                    });
                    setCharIndex((prev) => prev + 1);
                }, 50);
            }

            if (charIndex > currentLineText.length) {
                if (lineIndex < currentMessage.length - 1) {
                    setCharIndex(0);
                    setLineIndex((prev) => prev + 1);
                } else {
                    setPause(true);
                    setTimeout(() => {
                        setIsDeleting(true);
                        setPause(false);
                        setCharIndex(currentLineText.length);
                    }, 20000);
                }
            }
        } else {
            if (charIndex >= 0) {
                timeout = setTimeout(() => {
                    setDisplayedText((prev) => {
                        const updated = [...prev];
                        updated[lineIndex] = currentLineText.substring(0, charIndex);
                        return updated;
                    });
                    setCharIndex((prev) => prev - 1);
                }, 40);
            }

            if (charIndex < 0) {
                if (lineIndex > 0) {
                    setLineIndex((prev) => prev - 1);
                    setCharIndex(currentMessage[lineIndex - 1].length);
                } else {
                    setIsDeleting(false);
                    setCharIndex(0);
                    setLineIndex(0);
                    setCurrentMessage(getRandomMessage());
                    setFontSize(maxFontSize);
                }
            }
        }

        return () => clearTimeout(timeout);
    }, [charIndex, lineIndex, isDeleting, pause, currentMessage]);

    return (
        <div className="typing-container" ref={containerRef} style={{ fontSize: `${fontSize}rem` }}>
            <div className="typing-line" ref={lineRefs[0]}>
                {displayedText[0]}
                {lineIndex === 0 && <span className="blinking-cursor">|</span>}
            </div>
            <div className="typing-line" ref={lineRefs[1]}>
                {displayedText[1]}
                {lineIndex === 1 && <span className="blinking-cursor">|</span>}
            </div>
        </div>
    );
};

const animationStyle = `.typing-container {
    position: absolute;
    top: 40%;
    left: 80%;
    transform: translate(-50%, -50%);
    font-weight: 770;
    color: #ffffff;
    z-index: 9;
    pointer-events: none;
    text-align: center;
    line-height: 1.4;
    max-width: 40vw;
}
.typing-line {
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.blinking-cursor {
    font-weight: 100;
    font-size: 1em;
    color: white;
    animation: blink 1s infinite;
    margin-left: 5px;
}
@keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
}
@media screen and (max-width: 1149px) {
    .typing-container {
        display: none;
    }
};`;

const MortgageProtection = () => {
    const [contactMethod, setContactMethod] = useState("");
    const [formData, setFormData] = useState({
        applicantType: "Single", // Added applicantType state
        firstName: "",
        lastName: "",
        firstName2: "",  // Added for Joint Applicants
        lastName2: "",   // Added for Joint Applicants
        dob: "",
        email: "",
        phoneNumber: "",
        smoker: "",
        mortgageAmount: "",
        coverageAmount: "",
        corporateProtection: false, // Added corporateProtection
        acceptPrivateNotice: false,
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [bestTimeToCall, setBestTimeToCall] = useState("");
    const [otherDate, setOtherDate] = useState("");
    const [otherDateTimeSlot, setOtherDateTimeSlot] = useState("");
    const [timeSlots, setTimeSlots] = useState([]);
    const [otherDates, setOtherDates] = useState([]);
    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
    const [selectedServices, setSelectedServices] = useState({  // Added for service selection
        mortgageProtection: false,
        incomeProtection: false,
        criticalIllness: false,
        privateMedicalHealthcare: false,
    });

    useEffect(() => {
        generateTimeSlots();
        generateOtherDates();
    }, []);

    function generateTimeSlots() {
        const today = new Date();
        let currentDay = today.getDay();
        let currentHour = today.getHours();
        let currentMinute = today.getMinutes();

        const officeHours = {
            1: { start: 9, end: 21 },
            2: { start: 9, end: 21 },
            3: { start: 9, end: 21 },
            4: { start: 9, end: 21 },
            5: { start: 9, end: 21 },
            6: { start: 9, end: 18 },
        };

        const getNextAvailableDay = (day) => {
            let nextDay = day;
            let daysChecked = 0;
            while (daysChecked < 7) {
                nextDay = (nextDay + 1) % 7;
                if (nextDay !== 0 && officeHours[nextDay]) {
                    return nextDay;
                }
                daysChecked++;
            }
            return null;
        };

        const prepTimeInMinutes = 30;
        let adjustedMinutes = currentMinute + prepTimeInMinutes;
        let adjustedHour = currentHour;

        if (adjustedMinutes >= 60) {
            adjustedHour += 1;
            adjustedMinutes -= 60;
        }

        let startHour = Math.max(adjustedHour, officeHours[currentDay]?.start || 0);
        let startMinute = adjustedMinutes > 0 ? 30 : 0;
        let slots = [];
        let daysGenerated = 0;
        while (slots.length < 6 && daysGenerated < 7) {
            if (!officeHours[currentDay]) {
                currentDay = getNextAvailableDay(currentDay);
                if (currentDay === null) break;
                today.setDate(today.getDate() + ((currentDay - today.getDay() + 7) % 7));
                startHour = officeHours[currentDay].start;
                startMinute = 0;
                daysGenerated++;
                continue;
            }

            if (startHour + 2 <= officeHours[currentDay].end) {
                const slotStartFormatted = formatTime(startHour, startMinute);
                const slotEndFormatted = formatTime(startHour + 2, 0);
                slots.push(`${formatDate(today)}, ${slotStartFormatted} - ${slotEndFormatted}`);
                startHour += 2;
                startMinute = 0;
            } else {
                currentDay = getNextAvailableDay(currentDay);
                if (currentDay === null) break;
                today.setDate(today.getDate() + ((currentDay - today.getDay() + 7) % 7));
                startHour = officeHours[currentDay].start;
                startMinute = 0;
                daysGenerated++;
            }
        }
        setTimeSlots(slots);
    }

    function generateOtherDates() {
        let today = new Date();
        let dates = [];
        let daysAdded = 0;
        while (dates.length < 7 && daysAdded < 14) {
            today.setDate(today.getDate() + 1);
            if (today.getDay() !== 0) {
                dates.push(formatDate(today));
            }
            daysAdded++;
        }
        setOtherDates(dates);
    }

    function formatTime(hour, minute = 0) {
        const period = hour >= 12 ? "PM" : "AM";
        const adjustedHour = hour % 12 === 0 ? 12 : hour % 12;
        const formattedMinute = minute < 10 ? `0${minute}` : minute;
        return `${adjustedHour}:${formattedMinute} ${period}`;
    }

    function formatDate(date) {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const day = days[date.getDay()];
        const dateNum = date.getDate();
        const month = months[date.getMonth()];
        const suffix =
            dateNum === 1 || dateNum === 21 || dateNum === 31
                ? "st"
                : dateNum === 2 || dateNum === 22
                    ? "nd"
                    : dateNum === 3 || dateNum === 23
                        ? "rd"
                        : "th";
        return `${day} ${dateNum}${suffix} ${month}`;
    }

    function generateTimeSlotsForDate(selectedDateString) {
        const dayName = selectedDateString.split(" ")[0];
        const dayMap = {
            Monday: 1,
            Tuesday: 2,
            Wednesday: 3,
            Thursday: 4,
            Friday: 5,
            Saturday: 6,
        };

        const dayOfWeek = dayMap[dayName];
        let slots = [];

        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
            slots = [
                "9:00 AM - 11:00 AM",
                "11:00 AM - 1:00 PM",
                "1:00 PM - 3:00 PM",
                "3:00 PM - 5:00 PM",
                "5:00 PM - 7:00 PM",
                "7:00 PM - 9:00 PM",
            ];
        } else if (dayOfWeek === 6) {
            slots = [
                "9:00 AM - 11:00 AM",
                "11:00 AM - 1:00 PM",
                "1:00 PM - 3:00 PM",
                "3:00 PM - 5:00 PM",
                "5:00 PM - 7:00 PM",
            ];
        }

        return slots;
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === "otherDate") {
            setOtherDate(value);
            const generatedSlots = generateTimeSlotsForDate(value);
            setAvailableTimeSlots(generatedSlots);
            setOtherDateTimeSlot("");
            return;
        }

        if (name === "otherDateTimeSlot") {
            setOtherDateTimeSlot(value);
            return;
        }

        if (name === "bestTimeToCall") {
            setBestTimeToCall(value);
            if (value !== "Other") {
                setOtherDate("");
                setAvailableTimeSlots([]);
                setOtherDateTimeSlot("");
            }
            return;
        }

        if (name === "contactMethod") {
            setContactMethod(value);
            return;
        }

        if (['mortgageProtection', 'incomeProtection', 'criticalIllness', 'privateMedicalHealthcare'].includes(name)) {
            setSelectedServices(prev => ({ ...prev, [name]: checked }));
            return;
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        const API_URL = "http://localhost:3000/submit-mortgage-protection";

        const cleanedData = {
            type: "mortgage_protection_request",
            applicantType: formData.applicantType, // Include applicantType
            firstName: formData.firstName,
            lastName: formData.lastName,
            firstName2: formData.firstName2,  // Include firstName2
            lastName2: formData.lastName2,   // Include lastName2
            dob: formData.dob,
            email: contactMethod === "Email" ? formData.email : "",
            phoneNumber: contactMethod === "Phone" ? formData.phoneNumber : "",
            selectedServices: selectedServices, // Include selected services
            smoker: formData.smoker,
            mortgageAmount: formData.mortgageAmount,
            coverageAmount: formData.coverageAmount,
            corporateProtection: formData.corporateProtection, // Include corporateProtection
            bestTimeToCall: bestTimeToCall,
            otherDate: otherDate,
            otherDateTimeSlot: otherDateTimeSlot,
            acceptPrivateNotice: formData.acceptPrivateNotice,
        };

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cleanedData),
            });

            const result = await response.json();
            setMessage(result.message ? "✅ Request submitted successfully!" : "❌ Submission failed. Please try again.");
        } catch (error) {
            setMessage("⚠️ Error submitting form. Please check your internet connection.");
            console.error("❌ Submission error:", error);
        }

        setLoading(false);
    };

    return (
        <>
            <style>{animationStyle}</style>

            <Hero
                title="Mortgage Protection – Secure What Matters Most"
                subHeading="Protect Your Home and Loved Ones with Confidence"
                detail="Ensure peace of mind for your family and safeguard your property investment with tailored mortgage protection. Our expert advisors are here to guide you through the best options."
                className="hero-1"
                imageUrl={FirstTimeBuyersLoan}
                id="hero"
            />
            <TypingText />

            <div className="programs">
              <h2 className="secondry-heading" data-aos="fade-up">Find the right protection products for you</h2>
              <p className="default-text" data-aos="fade-up">
                  We offer tailored protection solutions to safeguard your financial future. Our specialisations include Mortgage Protection, Income Protection, Critical Illness cover, and Private Medical Healthcare, ensuring comprehensive support. Feel free to reach out via live chat by clicking the bottom right circle or contact us by phone to discuss your specific requirements.
              </p>
              <div className="program-row">
                  <div className="program-card" data-aos="zoom-in">
                      <div className="program-img-wrapper">
                          <FontAwesomeIcon icon={faShieldHeart} className="program-icon" />
                      </div>
                      <div className="program-card-body">
                          <h4 className="program-title">Mortgage Protection</h4>
                          <p className="program-description">Designed to clear your mortgage in the event of a catastrophe.</p>
                          <label className="checkbox-label">
                              <input
                                  type="checkbox"
                                  name="mortgageProtection"
                                  checked={selectedServices.mortgageProtection}
                                  onChange={handleChange}
                              />
                              Select
                          </label>
                      </div>
                  </div>

                  <div className="program-card" data-aos="zoom-in">
                      <div className="program-img-wrapper">
                          <FontAwesomeIcon icon={faCoins} className="program-icon" />
                      </div>
                      <div className="program-card-body">
                          <h4 className="program-title">Income Protection</h4>
                          <p className="program-description">Designed to replace your income if you can't work due to ill health.</p>
                          <label className="checkbox-label">
                              <input
                                  type="checkbox"
                                  name="incomeProtection"
                                  checked={selectedServices.incomeProtection}
                                  onChange={handleChange}
                              />
                              Select
                          </label>
                      </div>
                  </div>

                  <div className="program-card" data-aos="zoom-in">
                      <div className="program-img-wrapper">
                          <FontAwesomeIcon icon={faUserShield} className="program-icon" />
                      </div>
                      <div className="program-card-body">
                          <h4 className="program-title">Critical Illness</h4>
                          <p className="program-description">Pays a lump sum if diagnosed with a critical illness (e.g., heart attack).</p>
                          <label className="checkbox-label">
                              <input
                                  type="checkbox"
                                  name="criticalIllness"
                                  checked={selectedServices.criticalIllness}
                                  onChange={handleChange}
                              />
                              Select
                          </label>
                      </div>
                  </div>

                  <div className="program-card" data-aos="zoom-in">
                      <div className="program-img-wrapper">
                          <FontAwesomeIcon icon={faHospital} className="program-icon" />
                      </div>
                      <div className="program-card-body">
                          <h4 className="program-title">Private Medical Healthcare</h4>
                          <p className="program-description">Designed for you to access health services/treatments faster.</p>
                          <label className="checkbox-label">
                              <input
                                  type="checkbox"
                                  name="privateMedicalHealthcare"
                                  checked={selectedServices.privateMedicalHealthcare}
                                  onChange={handleChange}
                              />
                              Select
                          </label>
                      </div>
                  </div>
              </div>
          </div>

            <div className="form-container">
                <div className="form-box">
                    <h2 className="form-title">Get a Personalised Quote</h2>
                    <p className="form-subtext">
                        Please fill in your details to receive a personalised quote from our experienced advisors.
                    </p>

                    {message && <p className="submission-message">{message}</p>}

                    <form onSubmit={handleSubmit} className="styled-form">
                        <div className="form-group">
                            <label className="form-label">Preferred Contact Method:</label>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="contactMethod"
                                        value="Phone"
                                        onChange={handleChange}
                                    /> Phone
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="contactMethod"
                                        value="Email"
                                        onChange={handleChange}
                                    /> Email
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Applicant Type</label>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="applicantType"
                                        value="Single"
                                        onChange={handleChange}
                                        checked={formData.applicantType === "Single"}
                                    /> Single
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="applicantType"
                                        value="Joint"
                                        onChange={handleChange}
                                        checked={formData.applicantType === "Joint"}
                                    /> Joint
                                </label>
                            </div>
                        </div>

                        {formData.applicantType === "Single" ? (
                            <>
                                <div className="form-group">
                                    <label className="form-label">Full Name</label>
                                    <input className="form-input" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="form-group">
                                    <label className="form-label">First Applicant Full Name</label>
                                    <input className="form-input" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Second Applicant Full Name</label>
                                    <input className="form-input" type="text" name="firstName2" value={formData.firstName2} onChange={handleChange} required />
                                </div>
                            </>
                        )}

                        <div className="form-group">
                            <label className="form-label">Date of Birth</label>
                            <input className="form-input" type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Does any of the applicants smoke?</label>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="smoker"
                                        value="Yes"
                                        onChange={handleChange}
                                    /> Yes
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="smoker"
                                        value="No"
                                        onChange={handleChange}
                                    /> No
                                </label>
                            </div>
                        </div>


                        <div className="form-group">
                            <label className="form-label">Would you be interested in Key Person Insurance? <a href="/key-person-insurance" className="form-link">What is Key Person Insurance?</a></label>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="keypersonr"
                                        value="Yes"
                                        onChange={handleChange}
                                    /> Yes
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="keyperson"
                                        value="No"
                                        onChange={handleChange}
                                    /> No
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Would you be interested in Corporate Protection?<a href="/corporate-protection" className="form-link">What is Corporate Protection?</a> </label>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="corporateprotection"
                                        value="Yes"
                                        onChange={handleChange}
                                    /> Yes
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="corporateprotection"
                                        value="No"
                                        onChange={handleChange}
                                    /> No
                                </label>
                            </div>
                        </div>

                        {contactMethod === "Phone" && (
                            <>
                                <div className="form-group">
                                    <label className="form-label">Phone Number</label>
                                    <input className="form-input" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">
                                        What's the best time to call? <span className="required">*</span>
                                    </label>
                                    <select
                                        name="bestTimeToCall"
                                        className="form-input"
                                        value={bestTimeToCall}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Time</option>
                                        {timeSlots.map((slot, index) => (
                                            <option key={index} value={slot}>
                                                {slot}
                                            </option>
                                        ))}
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {bestTimeToCall === "Other" && (
                                    <>
                                        <div className="form-group">
                                            <label className="form-label">
                                                Select a date for availability <span className="required">*</span>
                                            </label>
                                            <select
                                                name="otherDate"
                                                className="form-input"
                                                value={otherDate}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Date</option>
                                                {otherDates.map((date, index) => (
                                                    <option key={index} value={date}>
                                                        {date}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {otherDate && (
                                            <div className="form-group">
                                                <label className="form-label">
                                                    Available Time Slots for {otherDate} <span className="required">*</span>
                                                </label>
                                                <select
                                                    name="otherDateTimeSlot"
                                                    className="form-input"
                                                    value={otherDateTimeSlot}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="">Select Slot</option>
                                                    {availableTimeSlots.map((slot, index) => (
                                                        <option key={index} value={slot}>
                                                            {slot}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}
                                    </>
                                )}
                            </>
                        )}

                        {contactMethod === "Email" && (
                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                        )}

                        <div className="form-group">
                            <label className="form-label">Mortgage Amount to be covered (£)</label>
                            <input className="form-input" type="number" name="mortgageAmount" value={formData.mortgageAmount} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label className="form-checkbox" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'nowrap' }}>
                                <input
                                    type="checkbox"
                                    name="acceptPrivateNotice"
                                    checked={formData.acceptPrivateNotice}
                                    onChange={handleChange}
                                    required
                                />
                                <span style={{ whiteSpace: 'nowrap' }}>
                                    I accept the <a href="/privacy-notice" target="_blank" rel="noopener noreferrer">Privacy Notice</a>
                                </span>
                            </label>
                        </div>

                        <button type="submit" className="submit-btn" disabled={loading}>
                            {loading ? "Submitting..." : "Submit"} <FaCaretRight />
                        </button>
                    </form>
                </div>
            </div>

            <QualitySection
                preHeader="Protecting Your Home, Securing Your Future"
                mainHeading="Comprehensive Mortgage Protection"
                description="Safeguard your most valuable asset with our tailored mortgage protection plans.  We offera range of solutions designed to protect your family and investment, ensuring financial security no matter what the future holds.  Our expert advisors will help you find the right coverage to fit your needs and budget."
                backgroundImage={backgroundImage}
            />

            <CtaSection
                ctaDirection="reverse light"
                ctaHeading="Why Choose Our Mortgage Protection Services?"
                ctaParagraph="We understand that your home is more than just a property; it's where memories are made and futures are built.  That's why we're dedicated to providing comprehensive mortgage protection options with flexible terms and reliable coverage."
                ctaImg1={CtaImg1}
                ctaImg2={CtaImg2}
                altText1="Family Protection"
                altText2="Family Protection"
                id="cta-1"
            />

            <CtaSection
                ctaDirection=""
                ctaHeading="Secure Your Family's Financial Future"
                ctaParagraph="Our mortgage protection plans offer peace of mind, ensuring your loved ones won't have to worry about their home if the unexpected happens.  From critical illness coverage to life insurance, we'll help you find the perfect plan."
                ctaImg1={CtaImg3}
                ctaImg2={CtaImg4}
                altText1="Family Protection"
                altText2="Family Protection"
                btnClass="secondry-btn"
                id="cta-2"
            />

            <NewsletterSection id="newsletter" />
        </>
    );
};

export default MortgageProtection;