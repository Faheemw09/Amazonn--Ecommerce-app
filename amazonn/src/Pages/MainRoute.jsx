import { Routes, Route } from "react-router-dom";
import Addproductpage from "../adminpages/Addproductpage";
import Editproductpage from "../adminpages/Editproductpage";
import Login from "../adminpages/Login";
import MainAdmin from "../adminpages/MainAdmin";
import Home from "../Components/Home";
import Productslist from "../Components/Productslist";
import Cartlist from "../Components/Cartlist";
import Payment from "./Payment";

export const MainRoute = () => {
    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route  path="/login" element={<Login/>}/>

            <Route  path="/login" element={<Login/>}/>

            <Route path="/mainadmin" element={<MainAdmin/>}/>


            <Route path="/addproduct" element={<Addproductpage/>}></Route>
            <Route path="/editproduct/:id" element={<Editproductpage/>}/>

            <Route  path="/product" element={<Productslist/>}/>
            <Route path="/cart" element={<Cartlist />}></Route>
            <Route path="/payment" element={<Payment/>}></Route>
            <Route path="/cart" element={<Cartlist />}></Route>
            <Route path="/payment" element={<Payment/>}></Route>

            

            <Route path="*" element={<h4>404 Page not Found</h4>} />
        </Routes>
    )
}