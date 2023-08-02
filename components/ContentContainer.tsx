"use client";

import { useState, createContext, Dispatch, SetStateAction } from "react";
import BorderForm from "./BorderForm";
import Rectangle from "./Rectangle";
import { BorderType, DimensionType, Radiis } from "@/types";
import { dimensions, borderTypes } from "@/utils/dimensions";
import { create } from "zustand";
import CSSStyle from "./CSSStyle";

type DimensionContextType = {
  dimensionsArray: DimensionType[],
  setDimensions: Dispatch<SetStateAction<DimensionType[]>>
}

export const DimensionsContext = createContext<DimensionContextType | undefined>(undefined);

interface BorderState {
  styleString: string
  types: BorderType[]
  setStyleString: (newStyle:string) => void
  setBorderRadii: (id: string, newRadii: Radiis) => void
}

//types: state.types.filter((border) => border.id === id)[0].radiis = newRadii
export const useBorderStore = create<BorderState>((set) => ({
  styleString: "",
  types: borderTypes,
  setStyleString: (newStyle) => set((state) => ({styleString: newStyle}),),
  setBorderRadii: (id, newRadii) => set((state) => {
    const newType = state.types.filter((border) => border.id === id)[0];
    newType.radiis = newRadii
    return {types: state.types}
  })
}));

export default function ContentContainer() {
  const [dimensionsArray, setDimensions] = useState<DimensionType[]>(dimensions);

  return (
    <section className="mt-20">
      <section className="my-10 flex justify-stretch">
        <DimensionsContext.Provider value={{
          dimensionsArray, setDimensions}
        }>
          <Rectangle />
          <BorderForm />
        </DimensionsContext.Provider>
      </section>
      <section>
        <CSSStyle />
      </section>
    </section>
  );
}
