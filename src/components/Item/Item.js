import React from 'react';
import {Link} from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div>
      <Link to={`/detail/${item.id}`}>
        <p>{item.title}</p>
        <img src={item.pictureUrl} style={{ height: '100px', width: 'auto' }} alt={item.title}></img>
      </Link>
    </div>
  );
};

export default Item;