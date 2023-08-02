"use client";

import BorderSection from "./BorderSection";
import { useBorderStore } from "./ContentContainer";

export default function BorderForm() {
  const { setStyleString, types } = useBorderStore();
  const styleString = `
${types[0].radiis.horizontal}% 
${types[1].radiis.horizontal}% 
${types[2].radiis.horizontal}% 
${types[3].radiis.horizontal}% / 
${types[0].radiis.vertical}% 
${types[1].radiis.vertical}% 
${types[2].radiis.vertical}% 
${types[3].radiis.vertical}%`;

  return (
    <form
      action=""
      onChange={(e) => {
        e.preventDefault();
        setStyleString(styleString);
      }}
      className="flex flex-col gap-y-8 items-center flex-grow px-10"
    >
      {types.map((type) => (
        <BorderSection key={type.id} type={type} />
      ))}
    </form>
  );
}
