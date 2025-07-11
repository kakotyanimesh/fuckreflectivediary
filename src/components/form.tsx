"use client"
import { rfGeminicall } from "@/app/actions/rf";
import { InputBox } from "./input"
import TextArea  from "./textarea";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Clipboard, ClipboardCheck  } from 'lucide-react';


export const FormComponent = () => {
    const [isPending, startTransition ] =  useTransition()
    const [copied, setCopied] = useState(false)
    const [rfdiary, setRfdiary] = useState<string | null>(null)
    

    const createRF = (formdata: FormData) => {
        startTransition(async() => {
            try {                
                const grade = formdata.get("grade") as string
                const subjectName = formdata.get("subject") as string
                const topicName = formdata.get("Topic") as string
                const teaching_aids = formdata.get("teaching_aids") as string
                const teachingmethods = formdata.get("teachingmethods") as string
                const classroomex = formdata.get("classroomEx") as string
                const more = formdata.get("more") as string

                if(!grade || !subjectName || !topicName ){
                    toast.error("SUBJECT , grade and topic is Empty")
                    return 
                }
                toast.message("creating Refletive diary")

                
                const data = await rfGeminicall({grade, subjectName, teaching_aids, topicName, classroomex, more , teachingmethods})

                setRfdiary(data.text)
                
                toast.success("Refletive diary created")
              } catch (error) {
                toast.error(`${error}`)
                
              }
        })
      }

    const copytoclipboard = () => {
        if (!rfdiary) return;

        const blob = new Blob([rfdiary], { type: "text/html" });
        const data = [new ClipboardItem({ "text/html": blob })];
        navigator.clipboard.write(data).then(() => {
        toast.success("Copied to clipboard as formatted text");
        setCopied(true)
        setTimeout(() => setCopied(false), 4000);
        }).catch(() => {
        toast.error("Failed to copy");
    });
    }
    return (
        <div className="flex gap-10 md:flex-row flex-col justify-between">
            <form action={createRF} className="md:w-[700px]  space-y-2">
                <InputBox disabled={isPending} name="grade" placeholder="Grade of the lesson Plan"/>
                <InputBox disabled={isPending} name="subject" placeholder="Subject of the lesson Plan"/>
                <InputBox disabled={isPending} name="Topic" placeholder="Topic of the lesson Plan"/>
                <TextArea disabled={isPending} name="teaching_aids" placeholder="Explain the tlm "/>
                <TextArea disabled={isPending} name="teachingmethods" placeholder="Teaching Methods & Strategies"/>
                <TextArea disabled={isPending} name="classroomEx" placeholder="Classroom experience "/>
                <TextArea disabled={isPending} name="more" placeholder="Any more details if you want to add "/>
                <button disabled={isPending} className=" bg-slate-900 w-full disabled:cursor-none p-2 rounded-md font-semibold text-white">
                  {isPending ?"....." : "Create Reflective Diary"}
                </button>
            </form>
            <div className="w-full h-fit border-2 border-slate-200 rounded-md">
                <div className="px-10 py-2 bg-slate-200 flex justify-between ">
                    <h1 className="text-md ">Your Reflective diary </h1>
                    <button onClick={copytoclipboard}>{copied ? <ClipboardCheck /> : <Clipboard/>}</button>
                </div>
                <div className="py-5 px-7 prose max-w-none whitespace-pre-wrap h-[83vh] overflow-y-auto" dangerouslySetInnerHTML={{ __html: rfdiary ?? "" }} />
            </div>
        </div>
    )
}