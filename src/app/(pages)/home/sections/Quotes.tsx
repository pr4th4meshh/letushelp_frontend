import React from "react"

const QUOTE = ` “The best way to find yourself is to lose yourself in the service of others.” `
const AUTHOR = "Mahatma Gandhi"

const QuotesComponent = () => {
  const QuoteSplitter = ({ text }: { text: string }) => {
    return (
      <div className="text-primary text-center font-clashBold text-[32px] sm:text-[50px] font-[600] leading-tight tracking-[0.5px]">
        {text.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < text.split("\n").length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    )
  }
  return (
    <div className="flex flex-col self-stretch container max-w-[890px] mx-auto sm:px-0 px-1 items-center justify-center pb-[100px]">
      <QuoteSplitter text={QUOTE} />
      <span className="flex self-center sm:self-end text-[30px] tracking-[0.5px] leading-normal font-clashBold text-primary pt-[12px]">
        - {AUTHOR}.
      </span>
    </div>
  )
}

export default QuotesComponent
