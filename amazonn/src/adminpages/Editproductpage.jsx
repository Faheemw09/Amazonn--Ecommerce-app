import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editproduct } from "../redux/Action";
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import MainAdmin from "./MainAdmin";

const Editproductpage = () => {
  const { id } = useParams();
  const [Data, setData] = useState("");
  const dispatch = useDispatch();
  const { products } = useSelector((store) => {
    return store.AdminReducer;
  });
  const navigate =  useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    if (products && products.length > 0) {
      const data = products.find((ele) => ele.id === +id);
      setData(data);
    }
  }, [id, products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editproduct(Data, id));
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/mainadmin");
  };

  return (
    <>
   
    <div className="maindiv">
      <div className="fomrnadmin">
        <h2 className="allH2form">Edit Product</h2>
        <form className="form-1" onSubmit={handleSubmit}>
          {id}
          <input
            className="allinputform"
            type="text"
            name="imageURL"
            value={Data.imageURL}
            onChange={handlechange}
          />

          <input
            className="allinputform"
            type="text"
            value={Data.title}
            onChange={handlechange}
            name="title"
          />

          <input
            className="allinputform"
            type="text"
            value={Data.price}
            name="price"
            onChange={handlechange}
          />

          <input
            className="allinputform"
            type="text"
            value={Data.brand}
            onChange={handlechange}
            name="brand"
          />

          <input
            className="allinputform"
            type="text"
            value={Data.color}
            onChange={handlechange}
            name="color"
          />

          <select
            className="allinputform"
            name="category"
            id=""
            onChange={handlechange}
            value={Data.category}
          >
            <option value="">Select Category</option>
            <option value="male">Men</option>
            <option value="female">Woman</option>
            <option value="kids">Kids</option>
            <option value="mobile">Mobile</option>
            <option value="laptop">Laptop</option>
          </select>
          <input
            className="allinputform"
            type="text"
            value={Data.stock}
            onChange={handlechange}
            name="stock"
          />
          <input
            className="allinputform"
            type="text"
            value={Data.rating}
            onChange={handlechange}
            name="rating"
          />

          <button className="btnadmin" type="submit">
            Submit
          </button>
        </form>
        <Box bgColor="white">
        <Modal isOpen={showModal} onClose={handleCloseModal}>
          <ModalOverlay />
          <ModalContent>
<ModalHeader>Product Edited Successfully</ModalHeader>
<ModalBody>
<p>Your product has been edited successfully.</p>
</ModalBody>
<ModalFooter>
<Button colorScheme="blue" mr={3} onClose={handleCloseModal}>
continue
</Button>
<Button
variant="ghost"
onClick={() => {
navigate("/mainadmin");
}}
>
Go to Admin Dashboard
</Button>
</ModalFooter>
</ModalContent>
</Modal>
</Box>
</div>
</div>
</>
);
};
export default Editproductpage

