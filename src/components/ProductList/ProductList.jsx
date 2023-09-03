import React, {useState} from 'react';
import './ProductList.css'
import ProductItem from "../ProductItem/ProductItem.jsx";
import {useTelegram} from "../../hooks/useTelegram.js";


const products = [
    {id: 0, name: 'PS Plus Essential', description: 'Базовая подписка', price: 1470},
    {id: 1, name: 'PS Plus Extra', description: 'Расширенный функционал', price: 2170},
    {id: 2, name: 'PS Plus Deluxe', description: 'Максимальная подписка', price: 2470},
    {id: 3, name: 'EA Play', description: 'Подписка EA Play', price: 1500},
    {id: 4, name: 'TEST', description: 'Подписка EA Play', price: 1},
    {id: 5, name: 'TEST', description: 'Подписка EA Play', price: 1},
    {id: 6, name: 'TEST', description: 'Подписка EA Play', price: 1},
    {id: 7, name: 'TEST', description: 'Подписка EA Play', price: 1},
    {id: 8, name: 'TEST', description: 'Подписка EA Play', price: 1},
    {id: 9, name: 'TEST', description: 'Подписка EA Play', price: 1},
    {id: 10, name: 'TEST', description: 'Подписка EA Play', price: 1},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const {tg} = useTelegram();
    const [addedItems, setAddedItems] = useState([]);

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.text = `Купить: ${getTotalPrice(newItems)}`;
        }
    }

    return (
        <div className='list'>
            {
                products.map(item => (
                    <ProductItem
                        product={item}
                        onAdd={onAdd}
                        key={item.id}
                    />
                ))
            }
        </div>
    );
};

export default ProductList;