

import { buttonVariants, type ButtonVariants } from "./buttonVariant"

import * as React from "react"

import { cn } from "@/lib/utils"




export interface ButtonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ButtonVariants {}

function Badge({ className, variant, ...props }: ButtonProps) {
  return (
    <div className={cn(buttonVariants({ variant }), className)} {...props} />
  )
}

export { Badge }