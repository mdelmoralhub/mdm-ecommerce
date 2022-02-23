import React from 'react';
import './ItemDetail.css';

const Item = ({itemDetail}) => {
  return (
    <div className="ItemDetail" style={{ padding: 40 }}>
      <h1>{itemDetail.title}</h1>
      <h2>{itemDetail.description}</h2>
      <p>Precio: U$S{itemDetail.price}</p>
      <img src={itemDetail.pictureUrl} style={{ height: '500px', width: 'auto' }} alt={itemDetail.title}></img>
      <p>Stock: {itemDetail.prodStock} unidades</p>
    </div>
  );
};

export default Item;