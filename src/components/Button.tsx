import { classMerge } from "../utils/ClassMerge"
type Props = React.ComponentProps<"button"> & {
    isLoading? :boolean
    variant?: "base" | "icon" | "iconSmall"
}

const variants = {
    button: {
        base: "h-12", 
        icon: "h-12 w-12",
        iconSmall: "h-8 w-18",
    }
}

export function Button({children, isLoading, type="button", variant="base", className,...rest}:Props){
    return(
        <button 
            type={type} 
            disabled={isLoading} 
            {...rest} 
            className={
                classMerge(["flex items-center justify-center bg-green-100 rounded-lg text-white px-4 py-2 cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-progress",
                    variants.button[variant],
                    className,
                    isLoading && "disabled:cursor-progress"
                ])
                }
        >
            {children}
        </button>
    )
}
