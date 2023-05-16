import styled from "styled-components";
import {useSearchParams} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Divider } from '@chakra-ui/react'
export const Sidebar = () => {
  const [searchParams , setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("brand");
  const initialOrder = searchParams.get("order");

  // console.log(initialCategory)
  const [brand , setbrand] = useState(initialCategory || []);
  const [order , setOrder] = useState(initialOrder || "");

  const handleChange = (e) =>{
    let newCategory = [...brand];
    const value=e.target.value;

    if(newCategory.includes(value)){
      newCategory = newCategory.filter((el) => el !== value);
    }else{
      newCategory.push(value);
    }
    setbrand(newCategory)
  }

  const handleSort = (e) =>{
    setOrder(e.target.value)
  }

  useEffect(()=>{
   let params = {
    brand,
   }

   order && (params.order = order)
   setSearchParams(params)
  },[brand,order])
   console.log(brand)
  return (
    <DIV>
      <h3>Sort by Price</h3>
      <div onChange={handleSort}>
        <input 
         type="radio"
         value={"asc"}
         defaultChecked={order == "asc"}
         name="order"
          />
        <label>ASC</label>
        <br />
        <br />
        <input 
         type="radio"
         value={"desc"}
         defaultChecked={order == "desc"}
         name="order"
         />
        <label>DESC</label>
        <br />
        <br />
        </div>

        <Divider orientation='horizontal' />
      <h3>Filter by Brand</h3>
      <div>
        <input 
         type="checkbox"
         value={"Puma"}
          onChange={handleChange}
          checked={brand.includes("Puma")}
          />
        <label>Puma</label>
        <br />
        <br />
        <input type="checkbox"
        value={"WROGN"}
        onChange={handleChange}
        checked={brand.includes("WROGN")}
         />
        <label>WROGN</label>
        <br />
        <br />
        <input type="checkbox"
        value={"AUSK"}
        onChange={handleChange}
        checked={brand.includes("AUSK")}
       />
        <label>AUSK</label>
        <br />
        <br />
        <input type="checkbox" 
        value={"Young trendz"}
        onChange={handleChange}
        checked={brand.includes("Young trendz")}
        />
        <label>Young trendz</label>
        <br />
        <br />
        <input type="checkbox" 
        value={"LEE"}
        onChange={handleChange}
        checked={brand.includes("LEE")}
       />
        <label>LEE</label>
        <br />
        <br />
        <input type="checkbox" 
        value={"LEVI'S"}
        onChange={handleChange}
        checked={brand.includes("LEVI'S")}
       />
        <label>LEVI'S</label>
      </div>
      <br />
      <br />
      <br />


      <h3>Filter by Color</h3>
      <div>
        <input 
         type="checkbox"
          />
        <label>Black</label>
        <br />
        <br />
        <input type="checkbox"
         />
        <label>blue</label>
        <br />
        <br />
        <input type="checkbox"
       />
        <label>yellow</label>
        <br />
        <br />
        <input type="checkbox" 
        />
        <label>white</label>
        <br />
        <br />
        <input type="checkbox" 
       />
        <label>Pink</label>
        <br />
      </div>
      <br />
      <br />
      <br />
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 2px solid gray;
  text-align: left;
  // background-color:#D0D1FF;
  margin-left: 20px;
  color:black;
  text-color:#F25757
  
  label {
    margin-left: 5px;
  }
  input,
  label {
    font-size: larger;
    font-family:bold
  }
`;