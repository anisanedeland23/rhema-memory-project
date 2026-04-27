"use client";

import { useState } from "react";

export default function EntryGate({ children }: any) {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <button
          onClick={() => setEntered(true)}
          className="border border-white px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-all"
        >
          Tap to Enter
        </button>
      </div>
    );
  }

  return children;
}