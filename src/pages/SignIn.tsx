import { Input } from "../components/input"
import { Button } from "../components/Button"
import { useState } from "react"
import { useActionState } from "react";
import { z, ZodError } from "zod";
import { api } from "../services/api";
import { AxiosError } from "axios";
import { useAuth } from "../hooks/useAuth";


const signInSchema = z.object({
    email: z.string().email({message: "email inválido"}),
    password: z.string().trim().min(1,{message: "Informe a senha"})
})

export function SignIn(){
    const [state, formAction, isLoading] = useActionState(signIn, null)
    const auth = useAuth()
    

    async function signIn(prevState:any , formData: FormData){
        try{

            const data = signInSchema.parse({
                email:formData.get("email"),
                password: formData.get("password")
            })

            const response = await api.post("/sessions", data)
            auth.save(response.data)
            
        }catch(error){
            if(error instanceof ZodError){
                return {message:error.issues[0].message}
            }

            if(error instanceof AxiosError){
                return { message:error.response?.data.message }
            }

            return alert("Não foi possivel entrar")
        }
    }
    return(
        <form action={formAction}  className="w-full flex flex-col gap-4" >
            <Input name="email" required legend="E-mail" type="email" placeholder="seu@email.com" ></Input>
            
            <Input name="password" required legend="Senha" type="password" placeholder="123456"></Input>

            <p className="text-sm text-red-500 text-center my-4 font-medium">
                {state?.message}
                
            </p>

            <Button isLoading={isLoading} type="submit">Entrar</Button>

            <a href="/signup" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Criar conta</a>
        </form>
    )
}