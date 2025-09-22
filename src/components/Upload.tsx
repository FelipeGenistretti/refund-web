import type { ReactElement } from "react"
import uploadSvg from "../assets/upload.svg"

type Props = React.ComponentProps<"input"> & {
    filename?: string | null
}

export function Upload({filename=null, ...rest}:Props){
    return(
        <div>
            <legend className="uppercase text-sm text-gray-200 mb-2">
                Comprovante
            </legend>

            <div className="w-full h-12 flex items-center rounded-lg border border-gray-300 text-sm text-gray-100 bg-transparent outline-none">
                <input type="file" id="upload" {...rest} className="hidden" />
                <span className="text-md text-gray-100 flex-1 pl-4">
                    {
                        filename ?? "Selecione o arquivo"
                    }
                </span>
                <label className="flex h-12 px-4 items-center bg-green-100 rounded-lg cursor-pointer disabled:opacity-50 hover:bg-green-200 transition ease-linear" htmlFor="upload">
                    <img src={uploadSvg} alt="ícone de upload" className="w-6 h-6" />
                </label>
            </div>
        </div>
    )
}