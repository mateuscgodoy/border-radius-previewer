"use client";

import { useState } from "react";
import BorderForm from "./BorderForm";
import Rectangle from "./Rectangle";
import { BorderRadiis } from "@/types";

export default function ContentContainer() {
  const [topLeftValue, setTopLeftValue] = useState<BorderRadiis>({
    horizontal: 0,
    vertical: 0
  });
  const [topRightValue, setTopRightValue] = useState<BorderRadiis>({
    horizontal: 0,
    vertical: 0
  });
  const [botLeftValue, setBotLeftValue] = useState<BorderRadiis>({
    horizontal: 0,
    vertical: 0
  });
  const [botRightValue, setBotRightValue] = useState<BorderRadiis>({
    horizontal: 0,
    vertical: 0
  });

  return (
    <section className="mt-20">
      <section className="mt-6 flex justify-stretch">
        <Rectangle 
          topLeftValue={topLeftValue} 
          topRightValue={topRightValue} 
          botRightValue={botRightValue}
          botLeftValue={botLeftValue}
        />
        <BorderForm />
      </section>
      <div>The CSS print Component</div>
    </section>
  );
}
