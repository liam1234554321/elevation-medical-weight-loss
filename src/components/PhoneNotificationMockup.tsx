interface PhoneNotificationMockupProps {
  firstName: string;
}

export default function PhoneNotificationMockup({
  firstName,
}: PhoneNotificationMockupProps) {
  return (
    <div className="max-w-sm mx-auto">
      {/* Phone frame */}
      <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
        {/* Screen */}
        <div className="bg-white rounded-[2rem] overflow-hidden">
          {/* Status bar */}
          <div className="bg-gray-100 px-6 py-3 flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-600">9:41 AM</span>
            <span className="text-xs font-semibold text-gray-600">Messages</span>
            <span className="text-xs text-gray-400">100%</span>
          </div>

          {/* Chat area */}
          <div className="p-4 min-h-[280px] flex flex-col justify-end">
            {/* SMS bubble */}
            <div className="bg-gray-100 rounded-2xl rounded-tl-md p-4 max-w-[85%]">
              <p className="text-sm text-gray-800 leading-relaxed">
                Hi {firstName || "there"}! 👋 This is Elevation Medical Weight
                Loss. Thanks for reaching out! We&apos;ll be in touch within 24
                hours to schedule your visit. No contracts, no hidden fees —
                just results. Book online anytime at{" "}
                <span className="text-blue-500 underline">
                  elevationweightloss.setmore.com
                </span>{" "}
                — The Elevation Team
              </p>
            </div>

            {/* Timestamp */}
            <p className="text-[10px] text-gray-400 mt-2 ml-1">
              Today 9:41 AM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
