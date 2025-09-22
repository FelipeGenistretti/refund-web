import { Input } from "../components/input"
import { Button } from "../components/Button"
import { useState } from "react"

export function SignUp(){
    const [nome, setNome] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function onSubmit(e:React.FormEvent){
        e.preventDefault()
        console.log(nome, email, password, confirmarSenha);
        
    }
    return(
        <form onSubmit={onSubmit}  className="w-full flex flex-col gap-4" action="">
            <Input required legend="Nome" type="password" placeholder="seu nome" onChange={(e)=> setNome(e.target.value)}></Input>
            <Input required legend="E-mail" type="email" placeholder="seu@email.com" onChange={(e)=> setEmail(e.target.value)}></Input>
            <Input required legend="Senha" type="password" placeholder="123456" onChange={(e)=> setPassword(e.target.value)}></Input>
            <Input required legend="confirme a senha" type="password" placeholder="123456" onChange={(e)=> setConfirmarSenha(e.target.value)}></Input>

            <Button isLoading={isLoading} type="submit">Entrar</Button>

            <a href="/" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Já tenho uma conta</a>
        </form>
    )
}