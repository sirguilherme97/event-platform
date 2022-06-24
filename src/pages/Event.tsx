import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";


export function Event() {
    const { slug } = useParams<{ slug: string }>()
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {slug ?
                    <Video lessonSlug={slug} />
                    :
                    <div className="flex-1 items-center justify-center  ">
                        <div className="w-full h-1/2  flex justify-center items-center">
                            <h1 className="text-xl font-medium">Assista as aulas disponíveis <span className=" text-green-500 text-2xl">♥</span></h1>
                        </div>
                    </div>}
                <Sidebar />
            </main>
        </div>
    )
}
