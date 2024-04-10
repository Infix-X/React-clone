import React, { useState,useRef} from "react";
import ProductDetails from "./ProductDetails";
import ProductInput from "../Productdisplay/productInput"


const ProductList = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  

  const handleClick = (id) => {
    setSelectedProductId(id);
  };

  return (
    <div>
      <ul>
        <ProductInput/>
        

        
      </ul>
      {selectedProductId && <ProductDetails productId={selectedProductId} />}
    </div>
  );
};

export default ProductList;
