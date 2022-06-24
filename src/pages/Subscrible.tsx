import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";


export function Subscrible() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION)

    async function handleSubscrible(event: FormEvent) {
        event.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email,
            }
        })
        navigate('/event')
    }
    return (
        <div className="min-h-screen  bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px] ">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">Construa uma <span className="text-blue-500"> aplicação completa</span>, do zero, com <span className="text-blue-500">React</span></h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
                </div>
                <div>
                    <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                        <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                        <form onSubmit={handleSubscrible} className="flex flex-col gap-2 w-full">
                            <input
                                className="bg-gray-900 rounded px-5 h-14"
                                type="text"
                                onChange={event => setName(event.target.value)}
                                placeholder="Seu nome completo" />
                            <input
                                className="bg-gray-900 rounded px-5 h-14"
                                type="email"
                                onChange={event => setEmail(event.target.value)}
                                placeholder="Digite seu email" />
                            <button
                                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={loading}
                                type="submit">
                                Garantir minha vaga
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <img src="./src/assets/code.png" className="mt-8" alt="Image Code" />
        </div>
    )
}
