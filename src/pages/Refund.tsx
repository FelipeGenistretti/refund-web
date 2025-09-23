import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Input } from "../components/input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";
import fileSvg from "../assets/file.svg"
import { file, z, ZodError } from "zod"
import { api } from "../services/api";
import { AxiosError } from "axios";

const refundSchema = z.object({
    nome: z.string().min(3, {message:"Informe um nome claro para sua solicitação"}),
    category: z.string().min(1, {message:"Informe a categoria"}),
    valor: z.coerce.number({message:"Informe um valor valido"}).positive({message:"Informe um valor valido e superior a zero"})
})

export function Refund() {
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [filename, setFilename] = useState<File | null>(null);
    const [category, setCategory] = useState("");

    const navigate = useNavigate();
    const params = useParams<{ id: string }>();

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (params.id) {
            navigate(-1);
            return;
        }

        try{
            setIsLoading(true)

            if(!filename){
                return alert("selecione um arquivo de comprovante")
            }

            const fileUploadForm = new FormData()
            fileUploadForm.append("file", filename)

            const response = await api.post("/uploads", fileUploadForm)


            const data = refundSchema.parse({
                nome, 
                category,
                valor: valor.replace(",", ".")
            })

            await api.post("/refunds", {...data, filename: response.data.filename})

            navigate("/confirm", { state: { fromSubmit: true } });
        }catch(error){
            if(error instanceof ZodError){
                return alert(error.issues[0].message)
            } 

            if(error instanceof AxiosError){
                return alert(error.response?.data.message)
            }
            alert("nao foi possivel realizar a solicitação")

        } finally {
            setIsLoading(false)
        }


    }

    return (
        <form
            onSubmit={onSubmit}
            className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]"
        >
            <header>
                <h1 className="text-xl font-bold text-gray-100">
                    Solicitação de reembolso
                </h1>
                <p className="text-sm text-gray-200 mt-2 mb-4">
                    Dados da despesa para solicitar reembolso
                </p>
            </header>

            <Input
                required
                disabled={!!params.id}
                legend="Nome da solicitação"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <div className="flex gap-4">
                <Select
                    required
                    disabled={!!params.id}
                    legend="Categoria"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {CATEGORIES_KEYS.map((key) => (
                        <option key={key} value={key}>
                            {CATEGORIES[key].name}
                        </option>
                    ))}
                </Select>

                <Input
                    required
                    disabled={!!params.id}
                    legend="Valor"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                />
            </div>

            {params.id ? (
                <a className="text-sm text-green-100 font-semibold flex items-center justify-center gap-2 my-6 hover:opacity-70 transition ease-linear" href="https://www.rocketseat.com.br" target="_blank" rel="noopener noreferrer">
                    <img src={fileSvg} alt="icone do arquivo" />
                    Abrir comprovante
                </a>
            ) : (
                <Upload onChange={(e) => e.target.files && setFilename(e.target.files[0])} />
            )}

            <Button type="submit" isLoading={isLoading}>
                {params.id ? "Voltar" : "Enviar"}
            </Button>
        </form>
    );
}
