"use client";

import { Radiis, BorderType } from "@/types";
import { useContext, useState } from "react";
import { DimensionsContext } from "./ContentContainer";

type Props = {
  type: BorderType,
};

export default function BorderSection({ type }: Props) {
  //TODO: FIX THE BUG WITH THE CONTEXT - STATE - STORE DIMENSION

  const context = useContext(DimensionsContext);
  const {dimensionsArray, setDimensions} = context || {};

  const [horizValue, setHorizValue] = useState(type.radiis.horizontal);
  const [vertValue, setVertValue] = useState(type.radiis.vertical);
  const [isSync, setIsSync] = useState(true);


  const updateDimensions = (newRadii: Radiis) => {
    setDimensions!((prev) => {
      prev.filter(dimension => dimension.id === type.id)[0].type.radiis = newRadii;
      return prev;
    })
  }

  const borderRadii = dimensionsArray!.filter(item => item.id === type.id)[0].type.radiis;

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
            {borderRadii.vertical + borderRadii.vertical}
            <span className="text-sm">%</span> 
          </p>
          <label htmlFor={type.id} className="flex flex-col flex-grow max-w-sm">
              <span className="font-semibold text-lg">{type.label}</span>
              <input type="range" min={-1} max={101} step={1} id={type.id} value={horizValue + vertValue} 
                onChange={(e) => {
                  if (Number(e.target.value) >= 0 && Number(e.target.value) <= 100){
                    setHorizValue(Math.ceil(Number(e.target.value)/2));
                    setVertValue(Math.ceil(Number(e.target.value)/2));
                  }
                  updateDimensions({horizontal: horizValue, vertical: vertValue});
                }}
                className={`${!isSync && "cursor-not-allowed"}`}
                disabled={!isSync}
              />
          </label>
        </div>
        <div className={`flex gap-x-1 w-4/5 self-end ${isSync && 
          "transition-opacity duration-700 opacity-50"}`}>
          <p className="text-lg font-semibold self-end w-10">
            {Math.ceil(borderRadii.horizontal)}<span className="text-sm">%</span>
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
                  setHorizValue(Math.ceil(Number(e.target.value)))
                }
                updateDimensions({horizontal: horizValue, vertical: vertValue});
              }}
              className={`${isSync ? "cursor-not-allowed" : ""}`}
            />
          </label>
        </div>
        <div className={`flex gap-x-1 w-4/5 self-end ${isSync 
          && "transition-opacity duration-700 opacity-50"}`}>
          <p className="text-lg font-semibold self-end w-10">
            {Math.ceil(borderRadii.vertical)}
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
                  setVertValue(Math.ceil(Number(e.target.value)))
                }
                updateDimensions({horizontal: horizValue, vertical: vertValue});
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
          setIsSync(!isSync);
          setHorizValue(Math.ceil((horizValue + vertValue)/2));
          setVertValue(Math.ceil((horizValue + vertValue)/2));
          updateDimensions({horizontal: horizValue, vertical: vertValue});
        }}
      >
        🔗
      </button>
    </div>
  );
}