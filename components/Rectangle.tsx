type Props = {
  topLeftValue: string,
  topRightValue: string,
  botLeftValue: string,
  botRightValue: string
}

export default function Rectangle(
  {topLeftValue, topRightValue, botLeftValue, botRightValue}: Props
) {
  return(
    <div className="w-1/2 aspect-square flex items-center justify-center">
      <div 
      className="w-3/5 aspect-square bg-blue-600 shadow-xl border-4
      border-black transition duration-500 hover:scale-105 hover:shadow-2xl"
      style={{
        borderRadius:`${topLeftValue} ${topRightValue} ${botRightValue} ${botLeftValue} / 
        ${botRightValue} ${topLeftValue} ${topRightValue} ${botLeftValue}`
      }}
      >
      </div>
    </div>
  )
}