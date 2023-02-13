import React from 'react'
import s from './style.module.css';

export default function Product({id, title, description, price, image, deleteProduct, addToBasket}) {
  return (
    <div className={s.card}>
        <img src={image} alt={title} />
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
        <button onClick={() => deleteProduct(id)}>Удалить</button>
        <button onClick={() => addToBasket(id)}>Добавить</button>
    </div>
  )
}
