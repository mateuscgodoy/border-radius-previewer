"use client";

import { useContext } from "react";

import BorderSection from "./BorderSection";
import { DimensionsContext, useStyleStore } from "./ContentContainer";
import Rectangle from "./Rectangle";

export default function BorderForm() {
  const context = useContext(DimensionsContext);
  const { dimensionsArray, setDimensions } = context || {};
  const { write } = useStyleStore();
  const styleString = `
${dimensionsArray![0].type.radiis.horizontal}% 
${dimensionsArray![1].type.radiis.horizontal}% 
${dimensionsArray![2].type.radiis.horizontal}% 
${dimensionsArray![3].type.radiis.horizontal}% / 
${dimensionsArray![0].type.radiis.vertical}% 
${dimensionsArray![1].type.radiis.vertical}% 
${dimensionsArray![2].type.radiis.vertical}% 
${dimensionsArray![3].type.radiis.vertical}%`;

  return (
    <form
      action=""
      onChange={(e) => {
        e.preventDefault();
        write(styleString);
      }}
      className="flex flex-col gap-y-8 items-center flex-grow px-10"
    >
      {dimensionsArray!.map((dimension) => (
        <BorderSection key={dimension.id} type={dimension.type} />
      ))}
    </form>
  );
}
