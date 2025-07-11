import { SignIN } from "@/components/signinPage";
import Link from "next/link";

export default function Home(){
  return (
    <div className="flex justify-center items-center flex-col min-h-screen gap-10">
      <div className="space-y-3">
        <h1 className="font-semibold bg-gradient-to-r from-blue-900 to-pink-600 text-transparent bg-clip-text flex justify-center items-center md:text-3xl  text-xl">
          <span className="relative inline-block">
            <span className="absolute -inset-1 -skew-y-3 bg-gradient-to-bl from-blue-900 to-pink-900 via-red-400 rounded-md"></span>
            <span className="relative text-white px-2">FUCK</span>
          </span>
        &nbsp; Your Reflective Diary
        </h1>
        <p className="font-semibold italic bg-gradient-to-r from-blue-900 to-pink-600 text-white w-fit px-2 py-1 rounded-md -skew-1 justify-self-center">Use Predefined Prompts </p>
      </div>
      {/* <SignIN/> */}
      <Link href={"/dashboard"} className="bg-slate-900 disabled:cursor-none p-2 rounded-md font-semibold text-white w-fit">Just go to Dashboard</Link>
    </div>
  )
}