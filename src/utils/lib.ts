import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// i want to store users password haha

export const comparePassword = ({inputPassword, password} : {inputPassword : string, password : string}) =>  inputPassword === password