"use client";

import Rectangle from "./Rectangle";

export default function ContentContainer() {
  return(
    <section className="mt-6 flex justify-around">
      <Rectangle />
      <div className="border-2 border-blue-600 h-[325px] my-auto"></div>
      <div className="flex flex-col">
        <div>
          The Form Component
        </div>
        <div>
          The CSS print Component
        </div>
      </div>
    </section>
  )
}