import { useState } from "react";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
};

type Option = {
  id: number;
  label: string;
  answer: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    from: "bot",
    text: "No problem! Maybe I can help you find what you're looking for?",
  },
];

const options: Option[] = [
  {
    id: 1,
    label: "I'm exploring solutions",
    answer:
      "Great! FivoPay helps businesses accept secure online payments, manage payouts, and monitor transactions in real time.",
  },
  {
    id: 2,
    label: "To see a demo",
    answer:
      "You can request a personalized demo from our team by filling out the form on the Contact page.",
  },
  {
    id: 3,
    label: "I need product support",
    answer:
      "Our support team is here to help. Share your issue via the Contact page and we’ll get back to you quickly.",
  },
  {
    id: 4,
    label: "I'm a partner or vendor",
    answer:
      "We’d love to collaborate. Please reach out through the Contact form and select the relevant partnership option.",
  },
];

const HelpWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Bubble button with bot icon */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 transition-colors"
          aria-label="Open help bot"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/20">
            {/* Simple bot icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <rect x="4" y="7" width="16" height="11" rx="4" />
              <circle cx="10" cy="12" r="1.3" />
              <circle cx="14" cy="12" r="1.3" />
              <path d="M12 4v3" />
              <circle cx="12" cy="4" r="1" />
            </svg>
          </span>
        </button>
      )}

      {/* Panel */}
      {isOpen && (
        <div className="w-96 max-w-[95vw] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-900">
          {/* Header */}
          <div className="flex items-center justify-between bg-blue-600 px-5 py-3.5 text-white">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 border border-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <rect x="4" y="7" width="16" height="11" rx="4" />
                  <circle cx="10" cy="12" r="1.3" />
                  <circle cx="14" cy="12" r="1.3" />
                  <path d="M12 4v3" />
                  <circle cx="12" cy="4" r="1" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold leading-tight">Fivo Assistant</p>
                <p className="text-[11px] text-blue-100 leading-tight">
                  Online • Typically replies in minutes
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/80 hover:bg-blue-500 hover:text-white"
              aria-label="Close help widget"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-3 px-5 py-4">
            {/* Messages */}
            <div className="max-h-72 space-y-2 overflow-y-auto pr-1">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                      msg.from === "bot"
                        ? "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick options */}
            <div className="flex flex-wrap gap-2">
              {options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() =>
                    setMessages((prev) => [
                      ...prev,
                      {
                        id: prev.length + 1,
                        from: "user",
                        text: option.label,
                      },
                      {
                        id: prev.length + 2,
                        from: "bot",
                        text: option.answer,
                      },
                    ])
                  }
                  className="rounded-full border border-blue-500 bg-white px-3 py-1 text-xs font-medium text-blue-600 shadow-sm hover:bg-blue-50 active:bg-blue-100 dark:bg-slate-900 dark:text-blue-300 dark:hover:bg-slate-800"
                >
                  {option.label}
                </button>
              ))}
            </div>

            <p className="text-[11px] text-slate-400 dark:text-slate-500">
              Choose an option above…
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpWidget;

