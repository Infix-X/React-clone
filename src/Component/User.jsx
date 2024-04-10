import React from "react";
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Product from '../Component/Productdisplay/Product'
<Outlet /> 


const User = () => {
    let { userId } = useParams();
    let { utime } = useParams();

    return (
        <>
            Hello {userId}{utime}
            <Product/>
        </>
    )
}

export default User;
