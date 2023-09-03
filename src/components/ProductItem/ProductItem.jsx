import React from 'react';
import Button from "../Button/Button.jsx";
import './ProductItem.css'

const ProductItem = ({product, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className='item'>
            <div className="img"></div>
            <p>{product.name}</p>
            <Button onClick={onAddHandler}>{product.price}₽</Button>
        </div>
    );
};

export default ProductItem;