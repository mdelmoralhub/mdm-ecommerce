import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import axios from 'axios';

const ItemListContainer = () => {
    const[categoryGroup, setCategoryGroup] = useState(null);
    const {categoryId} = useParams();
    useEffect(() => {
        const items = axios("http://localhost:3000/products/json/ItemlistLarge.json").then((response) => response.data);
        items.then((dataOk) => {
            setTimeout(() => {
                categoryId ?
                setCategoryGroup(dataOk.filter(categ => categ.category === categoryId))
                :
                setCategoryGroup(dataOk);
            }, 2000);
        });
    }, [categoryId]);   
    return (
        <div>
            {categoryGroup ? 
              <ItemList items = {categoryGroup}></ItemList>
              :
              null
            }
        </div>
    );
}

export default ItemListContainer;