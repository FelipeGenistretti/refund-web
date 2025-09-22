export function NotFound(){
    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="text-gray-100 font-semibold text-2xl mb-10">hmmm, parece que você está no lugar errado</h1>
            <a className="font-semibold text-center text-green-100 hover:text-green-200 transition ease-linear"  href="/">Voltar para o inicio</a>
        </div>
    )
}