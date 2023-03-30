import { Routes, Route } from "react-router-dom";
import Login from "../adminpages/Login";
import HomePage from "./HomePage";

export const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route  path="/login" element={<Login/>}/>
            <Route path="*" element={<h4>404 Page not Found</h4>} />
        </Routes>
    )
}