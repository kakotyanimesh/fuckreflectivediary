import { cn } from "@/utils/lib"



export default function TextArea (props : React.TextareaHTMLAttributes<HTMLTextAreaElement>){
    const { name, placeholder, className, disabled, ...rest } = props
    return (
        <div className={cn("flex flex-col space-y-1", className)}>
            <label htmlFor={placeholder} className="">{placeholder}</label>
            <textarea className={cn("border-2 disabled:cursor-none border-slate-200 px-3 py-1 focus:outline-none rounded-md focus:ring-1 focus:ring-slate-200")} name={name} disabled={disabled} id={name} placeholder={placeholder} {...rest}></textarea>
        </div>
    )
}