import { Input } from "../components/input"
import { Button } from "../components/Button"
import { useState } from "react"

export function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function onSubmit(e:React.FormEvent){
        e.preventDefault()
        console.log(email, password);
        
    }
    return(
        <form onSubmit={onSubmit}  className="w-full flex flex-col gap-4" action="">
            <Input required legend="E-mail" type="email" placeholder="seu@email.com" onChange={(e)=> setEmail(e.target.value)}></Input>
            <Input required legend="Senha" type="password" placeholder="123456" onChange={(e)=> setPassword(e.target.value)}></Input>

            <Button isLoading={isLoading} type="submit">Entrar</Button>

            <a href="/signup" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Criar conta</a>
        </form>
    )
}