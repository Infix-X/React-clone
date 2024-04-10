import React, { useState, useEffect } from 'react';
import './ApiFetch.css'

const Table = ({ products }) => {
    return (
        <>
            <table border="1px" style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody id="productTableBody">
                    {products.map(product => (
                        <tr key={product.id}>
                            <td >{product.id}</td>
                            <td >{product.title}</td>
                            <td >{product.price} </td>
                            <td><img src={product.image} alt={product.title} style={{ width: "70px", height: "70px" }} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

const ApiFetch = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <Table products={products} />
        </div>
    );
}

export default ApiFetch;
