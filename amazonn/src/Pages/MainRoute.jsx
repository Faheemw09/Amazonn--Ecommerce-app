import { Routes, Route } from "react-router-dom";
import Addproductpage from "../adminpages/Addproductpage";
import Editproductpage from "../adminpages/Editproductpage";


import Login from "../adminpages/Login";

import MainAdmin from "../adminpages/MainAdmin";
import Home from "../components/Home";


import Mainhome from "./Mainhome";
import Productslist from "../components/Productslist";

export const MainRoute = () => {
    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route  path="/login" element={<Login/>}/>

            <Route path="/mainadmin" element={<MainAdmin/>}/>

            <Route path="/addproduct" element={<Addproductpage/>}></Route>
            <Route path="/editproduct/:id" element={<Editproductpage/>}/>

            <Route  path="/product" element={<Productslist/>}/>

            

            <Route path="*" element={<h4>404 Page not Found</h4>} />
        </Routes>
    )
}