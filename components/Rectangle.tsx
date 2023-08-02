"use client";

import { useStyleStore } from "./ContentContainer";


export default function Rectangle() 
{
  const {styleString} = useStyleStore();
  return(
    <div className="w-1/2 flex items-center justify-center">
      <div 
      className="w-3/5 aspect-square bg-blue-600 shadow-xl border-4
      border-black dark:border-white dark:shadow-gray-700 transition duration-500 
      hover:scale-105 hover:shadow-2xl dark:hover:shadow-gray-600"
      style={{
        borderRadius:styleString
      }}
      >
      </div>
    </div>
  )
}