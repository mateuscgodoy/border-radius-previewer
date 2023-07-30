"use client";

import { 
  TopLeftSection,
  TopRightSection,
  BotLeftSection,
  BotRightSection
 } from "@/types";
import BorderSection from "./BorderSection";

export default function BorderForm() {
  const formSections = [TopLeftSection, TopRightSection, BotLeftSection, BotRightSection];

  return (
    <form action="" className="flex flex-col gap-y-8">
      {formSections.map(
        (section) => <BorderSection key={section.id} type={section} />
      )}
    </form>
  )
}