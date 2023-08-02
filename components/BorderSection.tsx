"use client";

import { Radiis, BorderType } from "@/types";
import { useState } from "react";
import { useBorderStore } from "./ContentContainer";

type Props = {
  type: BorderType,
};

export default function BorderSection({ type }: Props) {
  const [horizValue, setHorizValue] = useState(type.radiis.horizontal);
  const [vertValue, setVertValue] = useState(type.radiis.vertical);
  const [isSync, setIsSync] = useState(true);
  const {setBorderRadii} = useBorderStore();

  return (
    <div className={`flex items-center gap-x-6 justify-around 
    lg:justify-center w-full`}>
      <div className="text-blue-600 self-start">
        {type.icon && <type.icon size={48} />}
      </div>
      <div className={`flex flex-col flex-grow max-w-sm`}>
        <div className={`flex gap-x-1 w-full justify-end ${!isSync && 
          "transition-opacity duration-700 opacity-50"}`}>
          <p className="text-xl font-semibold self-end w-10">
            {horizValue + vertValue}
            <span className="text-sm">%</span> 
          </p>
          <label htmlFor={type.id} className="flex flex-col flex-grow max-w-sm">
              <span className="font-semibold text-lg">{type.label}</span>
              <input type="range" min={-1} max={101} step={1} id={type.id} value={horizValue + vertValue} 
                onChange={(e) => {
                  if (Number(e.target.value) >= 0 && Number(e.target.value) <= 100){
                    const newRadii: Radiis = {
                      horizontal:Math.ceil(Number(e.target.value)/2),
                      vertical: Math.ceil(Number(e.target.value)/2)
                    }
                    setHorizValue(newRadii.horizontal);
                    setVertValue(newRadii.vertical);
                    setBorderRadii(type.id, newRadii);
                  }
                }}
                className={`${!isSync && "cursor-not-allowed"}`}
                disabled={!isSync}
              />
          </label>
        </div>
        <div className={`flex gap-x-1 w-4/5 self-end ${isSync && 
          "transition-opacity duration-700 opacity-50"}`}>
          <p className="text-lg font-semibold self-end w-10">
            {horizValue}<span className="text-sm">%</span>
          </p>
          <label
            htmlFor={`${type.id}-horizontal`}
            className={`flex flex-col flex-grow`}
          >
            Horizontal
            <input
              type="range"
              min={-1}
              max={51}
              step={1}
              value={horizValue}
              id={`${type.id}-horiz`}
              disabled={isSync}
              onChange={(e) => {
                if (Number(e.target.value) >= 0 && Number(e.target.value) <= 50){
                  const newRadii: Radiis = {
                    horizontal: Math.ceil(Number(e.target.value)),
                    vertical: vertValue
                  }
                  setHorizValue(newRadii.horizontal);
                  setBorderRadii(type.id, newRadii);
                }
              }}
              className={`${isSync ? "cursor-not-allowed" : ""}`}
            />
          </label>
        </div>
        <div className={`flex gap-x-1 w-4/5 self-end ${isSync 
          && "transition-opacity duration-700 opacity-50"}`}>
          <p className="text-lg font-semibold self-end w-10">
            {Math.ceil(vertValue)}
            <span className="text-sm">%</span>
          </p>
          <label 
            htmlFor={`${type.id}-vert`} 
            className="flex flex-col flex-grow"
          >
            Vertical
            <input
              type="range"
              min={-1}
              max={51}
              step={1}
              id={`${type.id}-vert`}
              value={vertValue}
              disabled={isSync}
              onChange={(e) => {
                if(Number(e.target.value) >= 0 && Number(e.target.value) <= 50){
                  const newRadii: Radiis = {
                    horizontal: horizValue,
                    vertical: Math.ceil(Number(e.target.value))
                  }
                  setVertValue(newRadii.vertical);
                  setBorderRadii(type.id, newRadii);
                }
              }}
              className={`${isSync ? "cursor-not-allowed" : ""}`}
            />
          </label>
        </div>
      </div>
      <button
        className="border border-blue-600 rounded-md self-end
       mb-5 transition-all duration-500 hover:bg-blue-600 hover:p-[0.1rem] "
       onClick={(e) => {
          e.preventDefault();
          const newRadii: Radiis = {
            horizontal: Math.ceil((horizValue + vertValue)/2),
            vertical: Math.ceil((horizValue + vertValue)/2)
          }
          setIsSync(!isSync);
          setHorizValue(newRadii.horizontal);
          setVertValue(newRadii.vertical);
          setBorderRadii(type.id, newRadii);
        }}
      >
        🔗
      </button>
    </div>
  );
}