"use client";

import { useState } from "react";
import BorderForm from "./BorderForm";
import Rectangle from "./Rectangle";

export default function ContentContainer() {
  const [topLeftValue, setTopLeftValue] = useState("10%");
  const [topRightValue, setTopRightValue] = useState("25%");
  const [botLeftValue, setBotLeftValue] = useState("15%");
  const [botRightValue, setBotRightValue] = useState("50%");

  return (
    <section>
      <section className="mt-6 flex justify-around">
        <Rectangle 
          topLeftValue={topLeftValue} 
          topRightValue={topRightValue} 
          botRightValue={botRightValue}
          botLeftValue={botLeftValue}
        />
        <div className="opacity-30 border-2 border-blue-600 h-[325px] my-auto"></div>
        <BorderForm />
      </section>
      <div>The CSS print Component</div>
    </section>
  );
}
