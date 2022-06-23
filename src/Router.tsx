import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscrible } from "./pages/Subscrible";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Subscrible />} />
            <Route path="/event" element={<Event />} />
            <Route path="/event/lesson/:slug" element={<Event />} />
        </Routes>
    )
}
