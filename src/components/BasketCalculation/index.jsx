import React from 'react';
import s from './style.module.css';

export default function BasketCalculation({basket, clearBasket}) {
    console.log(basket);
    const totalSum = basket.reduce((acc, {count, price})=> acc + count * price, 0);
    const totalCount = basket.reduce((acc, {count})=> acc + count, 0);
  
    return (
    <div className={s.block}>
        <p>Общая сумма: {totalSum}</p>
        <p>Общее количество: {totalCount}</p>
        <button onClick={clearBasket}>Очистить корзину</button>
    </div>
  )
}

// добавить кнопку "очистить корзину"