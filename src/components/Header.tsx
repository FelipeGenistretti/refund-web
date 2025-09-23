import logoSvg from "../assets/logo.svg"
import logoutSvg from "../assets/logout.svg"
import { useAuth } from "../hooks/useAuth"

export function Header(){
    const auth = useAuth()

    function logoutHandle(){
       auth.remove()
       return alert("vc foi delogado")
    }

    return(
        <header className="w-full flex justify-between">
            <img onClick={logoutHandle} src={logoSvg} alt="Logo"className="my-8" />

            <div className="flex items-center gap-3">
                <span className="flex text-sm font-semibold text-gray-200">Olá, {auth.session?.user.nome}</span>
                <img className="my-8 cursor-pointer hover:opacity-75 transition ease-linear" src={logoutSvg} alt="ícone de sair" />
            </div>
        </header>
    )
}