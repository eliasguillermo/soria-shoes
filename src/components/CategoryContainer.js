import React, { useState, useEffect } from 'react';
import ItemList from './ItemList.js'
import Loading from './Loading.js'
import { getFirestore } from '../firebase'
import { useParams } from 'react-router-dom';

export default function CategoryContainer() {

    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false);
    const categoryKey = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemList = db.collection("items");

        const categoryItems = itemList.where('categoryKey', '==', categoryKey.id);

        categoryItems.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No results');
            }
            setProductData(querySnapshot.docs.map(doc => {
                return ({ id: doc.id, ...doc.data() })
            }));

        }).catch((error) => {
            console.log("Error getting items", error);
        }).finally(() => {
            setLoading(false);
        });

    }, [categoryKey.id]);


    return (
        <div>
            { loading ? <Loading /> :
                <div>
                    <label className="Section-Title Capitalize">{categoryKey.id}</label>
                    {productData.length > 0 ? <ItemList data={productData} /> : 
                    <label className="Page-message">At the moment there are no products available in this category</label> }
                </div>
            }
        </div>)

}