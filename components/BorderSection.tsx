import { BorderType } from "@/types"

type Props = {
  type: BorderType
}

export default function BorderSection (
  {type}: Props
){
  return(
    <div className="flex items-center gap-x-4">
      <div className="text-blue-600">
        {type.icon && <type.icon size={32} />}
      </div>
      <label htmlFor={type.id}
        className="flex flex-col"
      >{type.label}
        <input type="text" id={type.id} />
      </label>
    </div>
  )
}