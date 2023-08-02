"use client";

import { useState, createContext, Dispatch, SetStateAction } from "react";
import BorderForm from "./BorderForm";
import Rectangle from "./Rectangle";
import { DimensionType } from "@/types";
import { dimensions } from "@/utils/dimensions";
import { create } from "zustand";

type DimensionContextType = {
  dimensionsArray: DimensionType[],
  setDimensions: Dispatch<SetStateAction<DimensionType[]>>
}

export const DimensionsContext = createContext<DimensionContextType | undefined>(undefined);

interface StyleState {
  styleString: string
  write: (newStyle:string) => void
}

export const useStyleStore = create<StyleState>((set) => ({
  styleString: "",
  write: (newStyle) => set((state) => ({styleString: newStyle}),)
}));

export default function ContentContainer() {
  const [dimensionsArray, setDimensions] = useState<DimensionType[]>(dimensions);

  return (
    <section className="mt-20">
      <section className="mt-6 flex justify-stretch">
        <DimensionsContext.Provider value={{
          dimensionsArray, setDimensions}
        }>
          <Rectangle />
          <BorderForm />
        </DimensionsContext.Provider>
      </section>
      <div>The CSS print Component</div>
    </section>
  );
}
