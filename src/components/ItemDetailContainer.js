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

   // const promise = new Promise((resolve, reject) => {
        //     setLoading(true);
        //     setTimeout(() => {
        //         const productId = param.id
        //         const productData = [
        //             { id: '1', name: 'Pink and golden sneakers', image: ProductGroup1, price: '500', description: 'Low-top sneakers in pink with golden details. Trendy and Casual.' },
        //             { id: '2', name: 'Blue Suede', image: ProductGroup2, price: '750', description: 'Low-top suede sneakers in tones of blue. Round toe.' },
        //             { id: '3', name: 'Fine black shoe', image: ProductGroup3, price: '1000', description: 'Black High Heel Shoes. Buckle Fine Heel. Leather.' }
        //         ];
        //         const productItem = productData.find(p => p.id === productId);
        //         resolve(productItem);
        //     }, 2000);
        //     //reject('Error al obtener los productos');
        // });

        // promise.then((res) => {
        //     setProductItem(res);
        //     setLoading(false);
        // }, (error) => {
        //     console.log(error);
        // }).catch((err) => {
        //     console.log(err);
        // });;
