"use client"
import { useTransition } from "react"
import { InputBox } from "./input"
import { signIn } from "next-auth/react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export const SignIN = () => {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const signin = (formdata : FormData) => {
        startTransition(async() => {
            const email = formdata.get("email") as string
            const password = formdata.get("password") as string
            const schoolName = formdata.get("schoolName") as string

            const user = await signIn("credentials", {
                email : email,
                password : password,
                schoolName : schoolName,
                redirect : false
            })

            if(user.ok){
                toast.success("user registered")
                router.push("/dashboard")
            } else {
                toast.error(user.error)
            }
        })
    }
    return (
        <form action={signin} className="flex flex-col w-[500px] space-y-5">
            <InputBox title="email" placeholder="email" name="email"/>
            <InputBox title="password" placeholder="password" name="password"/>
            <InputBox title="school Name" placeholder="school name" name="schoolName"/>
            <button disabled={isPending} className=" bg-slate-900 w-full disabled:cursor-none p-2 rounded-md font-semibold text-white">
                  {isPending ?"....." : "Create Account"}
            </button>
        </form>
    )
}