import React from 'react'
import { useState } from 'react';
import { useEffect } from "react";
import BasketContainer from '../BasketContainer';
import Product from "../Product";
import s from './style.module.css';

export default function ProductContainer() {

    const [products, setProducts] = useState([]);
    const [basket, setBasket] = useState([]);

    useEffect(() => {
    (async ()=>{
        const resp = await fetch('https://dummyjson.com/products');
        const data = await resp.json();
        const result = data.products.map(({id, title, price, description, images}) => 
        ({id, title, price, description, image: images[0]}));
        setProducts(result);
    })()
    }, []);

    useEffect(() => {
        const products_ids = products.map(({id}) => id);
        setBasket(pre => pre.filter(({id}) => products_ids.includes(id)));
    }, [products]);

    const deleteProduct = delId => setProducts(products.filter(({id}) => id !== delId));

    const addToBasket = value => {
        const productFromBasket = basket.find(({id}) => id === value);
        if (productFromBasket) {
            productFromBasket.count++;
            setBasket([...basket])
        }else{
            const target = products.find(({id}) => id === value);
            setBasket([...basket, {...target, count: 1}]);
        }
    };



    const increment = value => {
        const target = basket.find(({id}) => id === value);
        target.count++;
        setBasket([...basket]);
    };

    const decrement = value => {
        const target = basket.find(({id}) => id === value);
        target.count--;
        if (target.count === 0){
            setBasket(basket.filter(elem => elem !== target));
        }else{
            setBasket([...basket]);
        }
    };

    const deleteFromBasket = value => 
        setBasket(basket.filter(({id}) => id !== value));

  const clearBasket = () => setBasket([]);

  return (

    <div>
        <BasketContainer 
            basket={basket} 
            increment={increment} 
            decrement={decrement}
            clearBasket={clearBasket}
            deleteFromBasket={deleteFromBasket}
            />
        <div className={s.container}>
            {
                products.map(product => 
                    <Product 
                        key={product.id} 
                        {...product} 
                        deleteProduct={deleteProduct}
                        addToBasket={addToBasket}
                    />)
            }
        </div>
    </div>
  )
}


// добавить компонент BasketCalculation с рассчетом кол-ва и общей цены