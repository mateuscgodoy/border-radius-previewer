"use client";

import BorderForm from "./BorderForm";
import Rectangle from "./Rectangle";

export default function ContentContainer() {
  return(
    <section className="mt-6 flex justify-around">
      <Rectangle />
      <div className="border-2 border-blue-600 h-[325px] my-auto"></div>
      <div className="flex flex-col">
        <BorderForm />
        <div>
          The CSS print Component
        </div>
      </div>
    </section>
  )
}