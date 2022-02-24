import React from 'react';
import {Link} from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ item }) => {
  const initial = 0;
  return (
    <div>
      <Link to={`/detail/${item.id}`}>
        <p>{item.title}</p>
        <img src={item.pictureUrl} style={{ height: '100px', width: 'auto' }} alt={item.title}></img>
      </Link>
      <ItemCount stockInitial={item.prodStock} initial={initial}></ItemCount>
    </div>
  );
};

export default Item;