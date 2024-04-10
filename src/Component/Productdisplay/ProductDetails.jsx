import React, { useState,useEffect} from "react";
const ProductDetails = ({ productId }) => {
    const [product, setProduct] = useState(null);
  
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
  
   
    useEffect(() => {
      if (productId) {
        fetchProduct();
      }
    }, [productId]);
  
    return (
      <div>
        {product ? (
          <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} style={{width: "70px", height: "70px"}}/>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  export default ProductDetails;
  