import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "auto",
        height: "100px",
    
        alignItems: "center",
        backgroundColor:"black",
        color :"white",
       
      }}
    >
      <div>
        <h1>WELCOME TO AMAZONN ADMIN PORTAL</h1>
      </div>
      <div   style={{
        display: "flex",
        justifyContent: "space-around",
        width: "400px",
        height: "100px",
       
        alignItems: "center",
      }}>
        <Link to={"/mainadmin"}>
        <h4>Dashboard</h4>
        </Link>
        <Link to="/addproduct">
        <h4>Add Product</h4>
        </Link>
        <Link to="/">
        <button>Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminNav;
