"use client";
import React, { useEffect, useState } from "react";

const quotes = [
  "Push yourself because no one else is going to do it for you.",
  "Sweat is just your fat crying.",
  "The body achieves what the mind believes.",
  "Train insane or remain the same.",
  "Your only limit is you.",
];

export default function MotivationalQuote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  }, []);

  return (
    <div className="bg-gradient-to-r from-accent-teal/30 to-accent-blue/30 border border-white/10 rounded-xl p-4 text-center shadow-md">
      <p className="text-white text-lg italic">"{quote}"</p>
    </div>
  );
}
