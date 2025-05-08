import { z } from "zod"

export const signinObject = z.object({
    email : z.string().email({message : "ITS NOT AN EMAIL BABY"}),
    password : z.string().max(10, {message : "max of 15 words password dont put anything "}),
    schoolName : z.string().max(30, {message : "string only allowed and 30 is the limit"})
}) 
