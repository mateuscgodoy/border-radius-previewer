"use client";

import { Radiis, BorderType } from "@/types";
import { useContext, useState } from "react";
import { DimensionsContext } from "./ContentContainer";

type Props = {
  type: BorderType,
};

export default function BorderSection({ type }: Props) {
  const [horizValue, setHorizValue] = useState(type.radiis.horizontal);
  const [vertValue, setVertValue] = useState(type.radiis.vertical);
  const [isSync, setIsSync] = useState(true);

  const context = useContext(DimensionsContext);
  const {dimensionsArray, setDimensions} = context || {};

  const updateDimensions = (newRadii: Radiis) => {
    setDimensions!((prev) => {
      prev.filter(dimension => dimension.id === type.id)[0].type.radiis = newRadii;
      console.log("State changed");
      return prev;
    })
  }

  return (
    <div className="flex items-center gap-x-6 justify-around lg:justify-center w-full ">
      <div className="text-blue-600 self-start">
        {type.icon && <type.icon size={48} />}
      </div>
      <div className="flex flex-col flex-grow max-w-sm">
        <div className="flex gap-x-1 w-full justify-end">
          <p className="text-xl font-semibold self-end w-10">
            {Math.ceil(horizValue + vertValue)}<span className="text-sm">%</span> 
          </p>
          <label htmlFor={type.id} className="flex flex-col flex-grow max-w-sm">
              <span className="font-semibold text-lg">{type.label}</span>
              <input type="range" min={0} max={100} step={1} id={type.id} value={horizValue + vertValue} 
                onChange={(e) => {
                  setHorizValue(Number(e.target.value)/2);
                  setVertValue(Number(e.target.value)/2);
                  updateDimensions({horizontal: horizValue, vertical: vertValue});
                }}
                className={`${!isSync ? "cursor-not-allowed" : ""}`}
                disabled={!isSync}
              />
          </label>
        </div>
        <div className="flex gap-x-1 w-4/5 self-end">
          <p className="text-lg font-semibold self-end w-10">
            {Math.ceil(horizValue)}<span className="text-sm">%</span>
          </p>
          <label
            htmlFor={`${type.id}-horizontal`}
            className="flex flex-col flex-grow"
          >
            Horizontal
            <input
              type="range"
              min={0}
              max={50}
              step={1}
              value={horizValue}
              id={`${type.id}-horiz`}
              disabled={isSync}
              onChange={(e) => {
                setHorizValue(Number(e.target.value))
                updateDimensions({horizontal: horizValue, vertical: vertValue});
              }}
              className={`${isSync ? "cursor-not-allowed" : ""}`}
            />
          </label>
        </div>
        <div className="flex gap-x-1 w-4/5 self-end">
          <p className="text-lg font-semibold self-end w-10">
            {Math.ceil(vertValue)}<span className="text-sm">%</span>
          </p>
          <label 
            htmlFor={`${type.id}-vert`} 
            className="flex flex-col flex-grow"
          >
            Vertical
            <input
              type="range"
              min={0}
              max={50}
              step={1}
              id={`${type.id}-vert`}
              value={vertValue}
              disabled={isSync}
              onChange={(e) => {
                setVertValue(Number(e.target.value))
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
          setHorizValue((horizValue + vertValue)/2);
          setVertValue((horizValue + vertValue)/2);
          updateDimensions({horizontal: horizValue, vertical: vertValue});
        }}
      >
        🔗
      </button>
    </div>
  );
}
