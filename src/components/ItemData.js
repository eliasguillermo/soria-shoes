import React, { useState, useEffect } from 'react';
import ProductGroup1 from '../images/ProductGroup1.jpg';
import ProductGroup2 from '../images/ProductGroup2.jpg';
import ProductGroup3 from '../images/ProductGroup3.jpg';
import ItemList from './ItemList.js'

export default function ItemData() {

    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
     
        const promise = new Promise((resolve, reject) => {
            setLoading(true);
            setTimeout(() => {
                const productData = [
                    { id: '1', name: 'Pink and golden sneakers', image: ProductGroup1 },
                    { id: '2', name: 'Blue Suede', image: ProductGroup2 },
                    { id: '3', name: 'Fine black shoe', image: ProductGroup3 }
                ];
                resolve(productData);
            }, 2000);
            //reject('Error al obtener los productos');
        });

        promise.then((res) => {
            setProductData(res);
            console.log(res);
            setLoading(false);
        }, (error) => {
            console.log(error);
        }).catch((err) => {
            console.log(err);
        });;

      }, [])


    if (loading) {
        return <div>Loading...</div>
    }

    return <ItemList data={productData} />

}
