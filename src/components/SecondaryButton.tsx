import React from "react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

interface ISecondaryButton {
  title: string
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  className?: string
}

const SecondaryButton = ({
  title,
  onClick,
  disabled,
  type,
  className,
}: ISecondaryButton) => {
  return (
    <Button
      className={cn(
        "bg-white hover:bg-white py-[23px] px-[32px] border rounded-[999px] font-[600] text-primary text-[14px] shadow-lg leading-[14px] gap-[12px] w-[195px] h-[60px]",
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

export default SecondaryButton
