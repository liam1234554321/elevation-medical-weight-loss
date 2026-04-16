"use client";

import { useState } from "react";
import PhoneNotificationMockup from "./PhoneNotificationMockup";

const interestOptions = [
  "Oral Diet Medications $90/mo",
  "Semaglutide Injections",
  "HCG Rapid Fat Loss",
  "Testosterone Therapy",
  "Sermorelin Anti-Aging",
  "Vitamin Injections",
  "Botox",
  "General Inquiry",
];

const locationOptions = [
  "Bridgeville",
  "Cranberry",
  "Greensburg",
  "Irwin",
  "McMurray",
  "Monroeville",
  "Moon Township",
  "Mt. Lebanon",
  "North Hills",
  "Pleasant Hills",
  "Robinson",
  "Upper St. Clair",
  "Washington",
  "Weirton",
  "Morgantown",
];

const visitTypeOptions = ["In-Person", "Telehealth"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [preferredLocation, setPreferredLocation] = useState("");
  const [visitType, setVisitType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="animate-fadeInUp">
        <div className="text-center mb-8">
          <h3 className="font-cormorant text-3xl font-bold text-el-green mb-2">
            Thank You, {firstName}!
          </h3>
          <p className="text-el-text">
            We&apos;ll be in touch soon. Here&apos;s a preview of what to expect:
          </p>
        </div>
        <PhoneNotificationMockup firstName={firstName} />
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-el-charcoal font-montserrat focus:outline-none focus:border-el-green focus:ring-1 focus:ring-el-green transition-colors";
  const labelClass =
    "block font-montserrat text-sm font-medium text-el-charcoal mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>First Name *</label>
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputClass}
            placeholder="First name"
          />
        </div>
        <div>
          <label className={labelClass}>Last Name *</label>
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={inputClass}
            placeholder="Last name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Phone *</label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
            placeholder="(412) 555-1234"
          />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>I&apos;m Interested In</label>
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className={inputClass}
        >
          <option value="">Select a service...</option>
          {interestOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Preferred Location</label>
          <select
            value={preferredLocation}
            onChange={(e) => setPreferredLocation(e.target.value)}
            className={inputClass}
          >
            <option value="">Select a location...</option>
            {locationOptions.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Visit Type</label>
          <select
            value={visitType}
            onChange={(e) => setVisitType(e.target.value)}
            className={inputClass}
          >
            <option value="">Select visit type...</option>
            {visitTypeOptions.map((vt) => (
              <option key={vt} value={vt}>
                {vt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className={inputClass}
          placeholder="Tell us about your goals..."
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto bg-white text-el-green border border-gray-200 rounded-full px-10 py-3 font-montserrat font-semibold text-sm uppercase tracking-wide hover:bg-green-50 hover:border-el-green transition-all"
      >
        Send Message
      </button>
    </form>
  );
}
