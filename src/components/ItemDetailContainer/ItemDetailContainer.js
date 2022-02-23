import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const[itemDetail, setItemDetail] = useState({});
    let {itemDetailId} = useParams();
    useEffect(() => {
      //const detailData = axios("http://localhost:3000/products/json/Itemlist.json").then((response) => response.data);
      const detailData = axios("http://localhost:3000/products/json/ItemlistLarge.json").then((response) => response.data);
      detailData.then((dataOk) => {
        const detailDataOK = dataOk.find(x=>x.id === itemDetailId);
        itemDetailId ? setItemDetail(detailDataOK) : console.log('no item was found.');
      });
    }, [itemDetailId]);
  return (
    <div>
      <ItemDetail itemDetail={itemDetail}></ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
