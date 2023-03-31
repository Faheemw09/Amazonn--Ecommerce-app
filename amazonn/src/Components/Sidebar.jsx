import styled from "styled-components";

export const Sidebar = () => {
  return (
    <DIV>
      <h3>Filter by Price</h3>
      <div>
        <input 
         type="checkbox"
          />
        <label>Under ₹1,000</label>
        <br />
        <br />
        <input type="checkbox"
         />
        <label>₹1,000-₹5,000</label>
        <br />
        <br />
        <input type="checkbox"
       />
        <label>₹5,000-₹10,000</label>
        <br />
        <br />
        <input type="checkbox" 
        />
        <label>₹10,000-₹20,000</label>
        <br />
        <br />
        <input type="checkbox" 
       />
        <label>Over ₹20,000</label>
        <br />
      </div>
      <br />
      <br />
      <br />


      <h3>Filter by Brand</h3>
      <div>
        <input 
         type="checkbox"
          />
        <label>Puma</label>
        <br />
        <br />
        <input type="checkbox"
         />
        <label>WROGN</label>
        <br />
        <br />
        <input type="checkbox"
       />
        <label>AUSK</label>
        <br />
        <br />
        <input type="checkbox" 
        />
        <label>Young trendz</label>
        <br />
        <br />
        <input type="checkbox" 
       />
        <label>LEE</label>
        <br />
        <br />
        <input type="checkbox" 
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
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;
  label {
    margin-left: 5px;
  }
  input,
  label {
    font-size: larger;
  }
`;