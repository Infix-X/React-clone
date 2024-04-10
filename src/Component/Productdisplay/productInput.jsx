import React from "react";
import { useState } from "react";
import ProductDetails from "./ProductDetails";
function App() {
    const [productId, setProductId] = useState('');

    const handleChange = (event) => {
        setProductId(event.target.value);
    };

    return (
        <div>
            <h1>Product Details</h1>
            <input
                type="text"
                placeholder="Enter product ID"
                value={productId}
                onChange={handleChange}
            />
            {productId && <ProductDetails productId={productId} />}
        </div>
    );
}

export default App;