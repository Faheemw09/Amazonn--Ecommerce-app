import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Login from "../adminpages/Login";
=======
import MainAdmin from "../adminpages/MainAdmin";
>>>>>>> 67663575587c3f5151adcda8579e32b02c08b34d
import HomePage from "./HomePage";
import Mainhome from "./Mainhome";

export const MainRoute = () => {
    return (
        <Routes>
<<<<<<< HEAD
            <Route path="/" element={<HomePage />} />
            <Route  path="/login" element={<Login/>}/>
=======
            <Route path="/" element={<Mainhome />} />
            <Route path="/mainadmin" element={<MainAdmin/>}/>
            
>>>>>>> 67663575587c3f5151adcda8579e32b02c08b34d
            <Route path="*" element={<h4>404 Page not Found</h4>} />
        </Routes>
    )
}