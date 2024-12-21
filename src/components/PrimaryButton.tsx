import React from "react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

interface IPrimaryButton {
  title: string
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  className?: string
}

const PrimaryButton = ({
  title,
  onClick,
  disabled,
  type,
  className,
}: IPrimaryButton) => {
  return (
    <Button
      className={cn(
        "bg-[#0984E3] hover:bg-[#0984E3] text-white py-[23px] px-[32px] rounded-[60px] font-[600] text-[14px] leading-[14px] gap-[10px]",
        className
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {title}
    </Button>
  )
}

export default PrimaryButton
