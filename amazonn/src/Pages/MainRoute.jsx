import { Routes, Route } from "react-router-dom";
import Addproductpage from "../adminpages/Addproductpage";
import Editproductpage from "../adminpages/Editproductpage";


import Login from "../adminpages/Login";

import MainAdmin from "../adminpages/MainAdmin";
import Home from "../components/Home";


import Mainhome from "./Mainhome";

export const MainRoute = () => {
    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route  path="/login" element={<Login/>}/>

            {/* <Route path="/" element={<Mainhome />} /> */}
            <Route path="/mainadmin" element={<MainAdmin/>}/>
            <Route path="/addproduct" element={<Addproductpage/>}></Route>
            <Route path="/editproduct/:id" element={<Editproductpage/>}/>
            

            <Route path="*" element={<h4>404 Page not Found</h4>} />
        </Routes>
    )
}