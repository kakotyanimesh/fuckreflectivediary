import { FormComponent } from "@/components/form";
export default function Home() {
  
  return (
    <div className="flex flex-col gap-2 mt-2 mx-5">
      {/* <h1 className="bg-blue-500  px-2 py-1 flex justify-center items-center min-h-screen opacity-20 text-3xl rounded-3xl font-bold text-white -rotate-12">Fuck Refletive Diary !!!</h1> */}
      {/* <h1 className="font-bold text-slate-900 flex justify-center items-center text-3xl"><span className="bg-gradient-to-bl from-blue-400 to-pink-200 via-white relative  w-full inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500"></span> <span className="relative ">FUCK</span> Reflective Diary </h1> */}
      <h1 className="font-bold bg-gradient-to-r from-blue-900 to-pink-600 text-transparent bg-clip-text flex justify-center items-center text-3xl">
        <span className="relative inline-block">
          <span className="absolute -inset-1 -skew-y-3 bg-gradient-to-bl from-blue-900 to-pink-900 via-red-400 rounded-md"></span>
          <span className="relative text-white px-2">FUCK</span>
        </span>
      &nbsp;Reflective Diary
      </h1>

        <FormComponent/>
    </div>
  );
}
