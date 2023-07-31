"use client";

import { BorderRadiis, BorderType } from "@/types"

type Props = {
  type: BorderType,
}

export default function BorderSection (
  {type}: Props
){
  return(
    <div className="flex items-center gap-x-4 justify-around w-full">
      <div className="text-blue-600 self-start">
        {type.icon && <type.icon size={48} />}
      </div>
      <label 
        htmlFor={type.id}
        className="flex flex-col flex-grow max-w-sm"
      >
        <div className="flex gap-x-4">
          <p className="text-xl font-semibold self-end">
            0
          </p>
          <span className="font-semibold text-lg">{type.label}</span>
          <input 
            type="range" 
            min={0} 
            max={100} 
            step={1} 
            id={type.id}
          />
          <div className="flex flex-col gap-y-4 mt-2 self-end w-3/4">
            <div className="flex gap-x-4">
              <p className="text-lg font-semibold self-end">
                0
              </p>
              <label htmlFor={`${type.id}-horizontal`}
                className="flex flex-col flex-grow"
              >
              Horizontal
              <input 
                type="range" 
                min={0} 
                max={50} 
                step={1} 
                id={`${type.id}-horiz`}
              />
              </label>
            </div>
          
            <div className="flex gap-x-4">
              <p className="text-lg font-semibold self-end">
                0
              </p>
              <label htmlFor={`${type.id}-vert`}
                className="flex flex-col flex-grow"
              >
                Vertical
              <input 
                type="range" 
                min={0} 
                max={50} 
                step={1} 
                id={`${type.id}-vert`}
                className=""
              />
              </label>
            </div>
          </div>
        
        </div>
      </label>
      <button 
        className="border border-blue-600 rounded-md self-end
       mb-7 transition-all duration-500 hover:bg-blue-600 hover:p-[0.15rem] "
      >
        🔗
      </button>
    </div>
  )
}