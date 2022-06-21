import { Lessons } from "./Lessons";

export function TabLessons() {
    return (
        <div className="absolute right-0 w-[348px] h-full p-6 ">
            <header>
                <h1 className="font-bold text-2xl">Cronograma das aulas</h1>
                <div className="border-b-2 border-zinc-700 mt-6"></div>
            </header>
            <main className="w-[300px] h-auto">
                <Lessons />
            </main>
        </div>
    )
}
