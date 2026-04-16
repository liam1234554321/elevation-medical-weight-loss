"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  from: "user" | "bot";
  text: string;
}

const intents: { keywords: string[]; response: string }[] = [
  {
    keywords: ["hi", "hello", "hey", "good morning", "good afternoon"],
    response:
      "Hi there! 👋 Welcome to Elevation Medical Weight Loss. How can I help you today? I can tell you about our programs, pricing, locations, or help you book an appointment!",
  },
  {
    keywords: ["program", "service", "plan", "offer", "what do you"],
    response:
      "We offer a full range of physician-supervised programs:\n\n• Oral Diet Medications — $90/30 days\n• Semaglutide (GLP-1) Injections — from $200/mo\n• HCG Rapid Fat Loss — $425/30 days\n• Testosterone Therapy — from $450/3 months\n• Sermorelin Anti-Aging — $235/30 days\n• B Vitamin Injections — from $8\n• Botox — $13/unit\n\nAll plans are physician-supervised with no contracts!",
  },
  {
    keywords: ["price", "cost", "how much", "affordable", "cheap", "money"],
    response:
      "We believe weight loss should be affordable! Our oral diet medications start at just $90/month. Semaglutide injections from $200/month. No contracts, no hidden fees — ever. Would you like details on a specific program?",
  },
  {
    keywords: ["semaglutide", "ozempic", "wegovy", "glp-1", "glp1", "peptide"],
    response:
      "Semaglutide (GLP-1) is our most popular program! It's a once-weekly injection that helps control appetite and blood sugar.\n\n💉 Pricing by month:\n• Month 1: 0.25mg — $200\n• Month 2: 0.5mg — $250\n• Month 3: 1.0mg — $300\n• Month 4: 1.7mg — $350\n• Month 5+: 2.4mg — $400\n\nIncludes physician supervision. No contracts!",
  },
  {
    keywords: ["hcg", "rapid fat loss"],
    response:
      "Our HCG Rapid Fat Loss program is $425 for 30 days and includes B12 + Lipo+ injections. It's a physician-supervised plan designed for fast, safe results. Want to book a consultation?",
  },
  {
    keywords: ["phentermine", "diet pill", "oral"],
    response:
      "Our oral diet medication plans are our most affordable option:\n\n💊 30 days — $90\n💊 60 days — $170\n\nPhysician-supervised with regular check-ins. No contracts! Ready to get started?",
  },
  {
    keywords: ["testosterone", "trt", "low t", "men"],
    response:
      "Our Testosterone Replacement Therapy (TRT) is available for men experiencing low T symptoms:\n\n• 3 months — $450\n• 6 months — $875\n\nIncludes lab work and physician monitoring. Want to learn more or schedule a consultation?",
  },
  {
    keywords: ["sermorelin", "anti-aging", "growth hormone"],
    response:
      "Sermorelin therapy supports anti-aging, recovery, and body composition. It's $235 for 30 days, physician-supervised. Great for energy, sleep, and overall wellness!",
  },
  {
    keywords: ["vitamin", "b12", "fat burner", "lipo", "injection", "shot"],
    response:
      "Our vitamin injection menu:\n\n💉 B12 — $8\n💉 Fat Burner (Lipo+) — $15\n💉 B12 + Fat Burner Combo — $23\n💉 Super Lipo — $25\n💉 Biotin — $15\n\nNo appointment needed for injections at most locations!",
  },
  {
    keywords: ["botox"],
    response:
      "We offer Botox at $13/unit with packages available. Administered by trained medical professionals. Contact us to schedule your consultation!",
  },
  {
    keywords: ["location", "where", "near", "clinic", "office", "address"],
    response:
      "We have 15 locations across the Pittsburgh region, Weirton, and Morgantown! 📍\n\nBridgeville, Cranberry, Greensburg, Irwin, McMurray, Monroeville, Moon Township, Mt. Lebanon, North Hills, Pleasant Hills, Robinson, Upper St. Clair, Washington, Weirton, and Morgantown.\n\nVisit /locations for addresses and hours!",
  },
  {
    keywords: ["telehealth", "virtual", "online", "remote", "video"],
    response:
      "Yes! We offer telehealth visits for both new and returning patients. It's a great option if you prefer the convenience of a virtual appointment. Book at /book or call us!",
  },
  {
    keywords: ["doctor", "cooper", "who", "physician", "staff"],
    response:
      "Elevation is led by Dr. Mye Cooper, DO — a board-certified physician who founded this family-owned practice. Our team of medical professionals is dedicated to personalized, affordable weight loss care.",
  },
  {
    keywords: ["insurance", "pay", "accept", "coverage"],
    response:
      "We're a cash-pay practice — no insurance needed! This keeps our prices low and transparent. No contracts, no hidden fees. Plans start at just $90/month.",
  },
  {
    keywords: ["book", "appointment", "schedule", "sign up", "start"],
    response:
      "Ready to get started? 🎉\n\nBook online: elevationweightloss.setmore.com\nCall us: (412) 345-6789\nOr visit /book on our website.\n\nFirst visits typically take about 30 minutes!",
  },
  {
    keywords: ["form", "new patient", "paperwork"],
    response:
      "New patient forms are available online! You can fill them out before your visit to save time. Check our website or ask the front desk when you arrive.",
  },
  {
    keywords: ["thanks", "thank", "bye", "goodbye", "later"],
    response:
      "You're welcome! 😊 Don't hesitate to reach out if you have more questions. We're here to help you on your weight loss journey. Have a great day!",
  },
];

function getResponse(input: string): string {
  const lower = input.toLowerCase().trim();

  for (const intent of intents) {
    for (const keyword of intent.keywords) {
      if (lower.includes(keyword)) {
        return intent.response;
      }
    }
  }

  return "Great question! For the most up-to-date info, visit elevationweightloss.com or call us at (412) 345-6789. You can also book online at elevationweightloss.setmore.com!";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi! 👋 I'm the Elevation assistant. Ask me about our programs, pricing, locations, or anything else!",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = { from: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    const delay = 800 + Math.random() * 400;
    setTimeout(() => {
      const reply = getResponse(trimmed);
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
      setTyping(false);
    }, delay);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full bg-el-green text-white shadow-lg hover:bg-el-green-dark transition-colors flex items-center justify-center"
          aria-label="Open chat"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] h-[520px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-el-charcoal px-5 py-4 flex items-center justify-between flex-shrink-0">
            <div>
              <p className="font-montserrat text-sm font-semibold text-white">
                Elevation Medical Weight Loss
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                Ask us anything!
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                    msg.from === "user"
                      ? "bg-el-green text-white rounded-br-md"
                      : "bg-white text-el-charcoal shadow-sm rounded-bl-md border border-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white text-el-charcoal shadow-sm rounded-2xl rounded-bl-md border border-gray-100 px-4 py-2.5 text-sm">
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                    <span
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.15s" }}
                    />
                    <span
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex-shrink-0 border-t border-gray-200 bg-white px-4 py-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 border border-gray-200 rounded-full px-4 py-2.5 text-sm font-montserrat focus:outline-none focus:border-el-green transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-10 h-10 rounded-full bg-el-green text-white flex items-center justify-center hover:bg-el-green-dark transition-colors disabled:opacity-40"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
