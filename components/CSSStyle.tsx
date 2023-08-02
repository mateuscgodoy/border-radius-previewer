import { useStyleStore } from "./ContentContainer";
import { useCopyToClipboard } from "usehooks-ts";
import {HiOutlineClipboardCopy} from 'react-icons/hi';

export default function CSSStyle() {
  const {styleString} = useStyleStore();
  const [value, copy] = useCopyToClipboard();

  const codeString = `border-radius: ${styleString};`;

  return(
    <div className="flex gap-x-4 justify-center">
      <code
        className="p-2 bg-neutral-300 rounded-sm shadow-sm
        dark:bg-gray-950"
      >{codeString}</code>
      <button 
        onClick={() => copy(codeString.replaceAll("\n", ""))}
        className="border border-blue-600 p-2 rounded-md 
        transition duration-500 hover:scale-110 hover:bg-blue-600 hover:text-white
        "
      >
        <HiOutlineClipboardCopy size={22}/>
      </button>
    </div>
  );
}