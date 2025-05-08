import { cn } from "@/utils/lib"

export const InputBox = (props : React.InputHTMLAttributes<HTMLInputElement>) => {
    const {placeholder, name, disabled, ...rest} = props
    return (
        <div className="flex flex-col space-y-1">
            <label htmlFor={placeholder}>{placeholder}</label>
            <input disabled={disabled} className={cn("px-4 py-1 disabled:cursor-none focus:ring-1 focus:ring-slate-200 border-slate-200 border-2 focus:outline-none rounded-md w-full")} type="text" name={name} placeholder={placeholder} {...rest} />
        </div>
    )
}