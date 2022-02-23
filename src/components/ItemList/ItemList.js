import React from 'react';
import Item from '../Item/Item';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import '../ItemList/ItemList.css';

const ItemList = ({items}) => {
    const prodList = items.map((item) => { return(
        <div className="ItemList-container" key={item.id}>
          <Item item={item}>
            <ItemDetailContainer itemSelected={item.id} />
          </Item>
        </div>  
        )
    });
    
    return (
        <div>
            { prodList }
        </div>
    )
};

export default ItemList


/*
<li key={item.id} className="list-group-item">
            <Item item={item}>
              <Link to={`/detail/${item.id}`}>
                <ItemDetailContainer itemSelected={item.id} />
              </Link>
            </Item>
        </li>

<ul className="list-group">{ prodList }</ul>
*/