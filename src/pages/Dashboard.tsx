import { Button } from "../components/Button";
import { Input } from "../components/input"
import { Pagination } from "../components/Pagination";
import React, { useState } from "react"
import { RefundItem, type RefundItemProps } from "../components/RefundItem";
import { CATEGORIES } from "../utils/categories";

const REFUND_EXAMPLE = {
    id:"123",
    username:"Rodrigo",
    category: "Transporte",
    value: formatCurrency(34.5),
    categoryImg : CATEGORIES["transport"].icon
}

import searchSvg from "../assets/search.svg"
import { formatCurrency } from "../utils/formatCurrency";


export function Dashboard() {
    const [nome, setNome] = useState("")
    const [page, setPage] = useState(1)
    const [totalOfPage, setTotalOfPage] = useState(10)
    const [refunds, setRefunds] = useState<RefundItemProps[]>([REFUND_EXAMPLE])

    function fetchRefund(e: React.FormEvent){
        e.preventDefault()
        console.log(nome);
        
    }

    function handlePagination(action:"next" | "previous"){
        setPage((prevPage)=>{
            if(action === "next" && prevPage < totalOfPage){
                return prevPage + 1
            }

            if(action === "previous" && prevPage > 1){
                return prevPage - 1
            }

            return prevPage
        })

    }

    return(
        <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
            <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

            <form onSubmit={fetchRefund} className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6" action="">
                <Input onChange={(e)=> setNome(e.target.value) }  placeholder="pesquisar pelo nome"/>
                <Button type="submit" variant="icon">
                    <img className="w-5" src={searchSvg} alt="ícone de pesquisa" />
                </Button>
            </form>

            <div className="my-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
                {
                    refunds.map((item)=>
                        <RefundItem key={item.id} data={item} href={`/refund/${item.id}`}/>
                    )
                }
            </div>
            <Pagination 
                current={page}
                total={totalOfPage}
                onNext={()=> handlePagination("next")}
                onPrevious={()=> handlePagination("previous")}
            />
        </div>
    )
}