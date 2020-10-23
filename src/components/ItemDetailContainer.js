import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail.js'
import { useParams } from 'react-router-dom';
import Loading from './Loading.js'
import { getFirestore } from '../firebase'


export default function ItemDetailContainer() {

    const [productItem, setProductItem] = useState({});
    const [loading, setLoading] = useState(false);
    const itemId  = useParams();

    useEffect(() => {

        setLoading(true);
        const db = getFirestore();

        const itemList = db.collection("items");
        const item = itemList.doc(itemId.id);
        
        item.get().then((doc) => {
            if (!doc.exists) {
                console.log('Item does not exist!');
                return;
            }
            setProductItem({ id: doc.id, ...doc.data() });
        }).catch((error) => {
            console.log("Error getting item", error);
        }).finally(() => {
            setLoading(false);
        });

    }, [itemId.id])


    return (
        <div>
            { loading ? <Loading /> : <ItemDetail data={productItem} /> }
        </div>)

}