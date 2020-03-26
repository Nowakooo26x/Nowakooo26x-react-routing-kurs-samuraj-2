import React from 'react';
import Product from '../components/Product';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
    return(
        <>
        <div>ProductsPage</div>
        <Product/>
        <Link to="/products">Powrót do listy produktów</Link>
        </>
    );

}

export default ProductsPage;