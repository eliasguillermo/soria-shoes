import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList.js'
import Loading from '../common/Loading.js'
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function ItemListContainer() {

    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const itemList = collection(db, "items");
        getDocs(itemList).then((querySnapshot) => {
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

    }, []);


    return (
        <div>
            { loading ? <Loading /> :
                <div>
                    <label className="Section-Title">Welcome to Soria's shoes</label>
                    <ItemList data={productData} />
                </div>
            }
        </div>)

}
