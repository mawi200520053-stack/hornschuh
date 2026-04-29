"use client";

import { useState } from "react";
import JobModal, { type Stelle } from "@/components/JobModal";

interface Props {
  stellen: Stelle[];
}

export default function KarriereStellenListe({ stellen }: Props) {
  const [activeJob, setActiveJob] = useState<Stelle | null>(null);

  return (
    <>
      <div className="space-y-4">
        {stellen.map((stelle) => (
          <div
            key={stelle.id}
            className="bg-white rounded-lg overflow-hidden transition-all duration-300 cursor-pointer group"
            style={{
              borderLeft: "4px solid #255aa0",
              border: "1px solid #e5e5e5",
              borderLeftWidth: "4px",
              borderLeftColor: "#255aa0",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}
            onClick={() => setActiveJob(stelle)}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#255aa0" }}>
                  Veröffentlicht: {stelle.datum}
                </p>
                <h3 className="text-xl sm:text-2xl font-black mb-2" style={{ color: "#1a1a1a" }}>
                  {stelle.titel}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  {stelle.kurztext}
                </p>
              </div>
              <div className="flex-shrink-0">
                <span
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors duration-200"
                  style={{ backgroundColor: "#255aa0" }}
                >
                  Stelle ansehen
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <JobModal job={activeJob} onClose={() => setActiveJob(null)} />
    </>
  );
}
