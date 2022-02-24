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
    );
};

export default ItemList;