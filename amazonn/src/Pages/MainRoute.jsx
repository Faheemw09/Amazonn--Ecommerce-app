import { Routes, Route } from "react-router-dom";
import Addproductpage from "../adminpages/Addproductpage";
import Editproductpage from "../adminpages/Editproductpage";
import Login from "../adminpages/Login";
import MainAdmin from "../adminpages/MainAdmin";
import Productslist from "../Components/Productslist";
import Cartlist from "../Components/Cartlist";
import Payment from "./Payment";
import SearchProductPage from "../Components/Searchproductpage";
import Singleproductpage from "../Components/Singleproductpage";
import HomePage from "../HomeAllpage/HomePage";

export const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/mainadmin" element={<MainAdmin/>}/>
            <Route  path="/login" element={<Login/>}/>
            <Route path="/addproduct" element={<Addproductpage/>}></Route>
            <Route path="/editproduct/:id" element={<Editproductpage/>}/>
            <Route  path="/product" element={<Productslist/>}/>
            <Route path="/cart" element={<Cartlist/>}></Route>
            {/* <Route path="/carts" element={<CartSection/>}></Route> */}
            <Route path="/payment" element={<Payment/>}></Route>
            <Route path="/products/:id" element={<SearchProductPage/>}></Route>           
            <Route path="/singleproduct/:id" element={<Singleproductpage/>}></Route>    
            <Route path="*" element={<h4>404 Page not Found</h4>} />
        </Routes>
    )
}