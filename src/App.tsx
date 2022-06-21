import { Header } from "./components/Header";
import { TabLessons } from "./components/Lessons/TabLessons";


export function App() {

  return (
    <div className="w-screen h-screen">
      <Header />
      <TabLessons />
    </div>
  )
}
