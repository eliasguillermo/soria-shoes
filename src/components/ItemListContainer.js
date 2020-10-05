import React, { useState, useEffect } from 'react';
import ItemList from './ItemList.js'
import './ItemListContainer.css';
import Loading from './Loading.js'
import { getFirestore } from '../firebase'

export default function ItemListContainer(props) {

    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemList = db.collection("items");
        itemList.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No results');
            }
            setProductData(querySnapshot.docs.map(doc => {
                return ({ id: doc.id, ...doc.data() })}));
                
        }).catch((error) => {
            console.log("Error getting items", error);
        }).finally(() => {
            setLoading(false);
        });

        // const promise = new Promise((resolve, reject) => {
        //     setLoading(true);
        //     setTimeout(() => {
        //         const productData = [
        //             { id: '1', name: 'Pink and golden sneakers', image: ProductGroup1, price: '500' },
        //             { id: '2', name: 'Blue Suede', image: ProductGroup2, price: '750' },
        //             { id: '3', name: 'Fine black shoe', image: ProductGroup3, price: '1000' }
        //         ];
        //         resolve(productData);
        //     }, 1000);
        //     //reject('Error al obtener los productos');
        // });

        // promise.then((res) => {
        //     setProductData(res);
        //     setLoading(false);
        // }, (error) => {
        //     console.log(error);
        // }).catch((err) => {
        //     console.log(err);
        // });;

    }, []);


    return (
        <div>
            { loading ? <Loading /> :
                <div>
                    <label className="Home-text">{props.greetings}</label>
                    <ItemList data={productData} />
                </div>
            }
        </div>)

}
