import React from 'react'
import s from './style.module.css'

export default function BasketItem({
    id, 
    title, 
    price, 
    count, 
    increment, 
    decrement,
    deleteFromBasket
    }) {
  return (
    <div className={s.item}>
        <p>{title}</p>
        <p>{price}</p>
        <div className={s.btns_container}>
            <button onClick={() => decrement(id)}>-</button>
            <p>{count}</p>
            <button onClick={() => increment(id)}>+</button>
            <button onClick={() => deleteFromBasket(id)}>X</button>
        </div>
    </div>
  )
}

// реализовать процесс удаления товара из корзины по нажатию на кнопку