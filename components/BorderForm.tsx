"use client";

import { 
  TopLeftSection,
  TopRightSection,
  BotLeftSection,
  BotRightSection
 } from "@/types";
import BorderSection from "./BorderSection";


export default function BorderForm() {
  const formSections = [TopLeftSection, TopRightSection, BotRightSection, BotLeftSection];

  return (
    <form action="" className="flex flex-col gap-y-8 items-center flex-grow px-10">
      {formSections.map(
        (section) => 
        <BorderSection 
          key={section.id}
          type={section} 
        />
      )}
    </form>
  )
}