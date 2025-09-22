type Props = React.ComponentProps<"select"> & {
    legend?: string
}

export function Select({ legend, children,...rest }:Props){
    return(
        <fieldset className="flex flex-1 max-h-20 focus-within:text-green-100 text-gray-200">
            {  
            legend && <legend className="uppercase text-sm  mb-2 text-inherit">
                {legend}
            </legend>
            }

            <select className="w-1/2 h-12 rounded-lg border border-gray-300 px-4 text-sm text-gray-100 bg-transparent outline-none focus:boder-2 focus:green-100 placeholder-gray-200" value="" {...rest}> 
                <option value="" disabled > Selecione </option>
                {children} 
            </select>
        </fieldset>
    )
}