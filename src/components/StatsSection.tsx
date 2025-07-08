'use client';

import React from "react";

const stats = [
  { value: "2005", label: "Company Established" },
  { value: "255", label: "Projects Done" },
  { value: "20 +", label: "Business Partners" },
  { value: "205", label: "Happy Clients" },
];

export const StatsSection = () => {
  return (
    <section className="bg-[#E38710] py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 text-center divide-x divide-[#f2a745]">
        {stats.map((stat, index) => (
          <div key={index} className="px-4">
            <h3 className="text-[42px] md:text-[50px] font-anton font-bold text-white leading-none">
              {stat.value}
            </h3>
            <p className="text-[#303849] text-[14px] font-medium mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
