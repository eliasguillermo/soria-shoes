import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail.js'
import { useParams } from 'react-router-dom';
import Loading from './Loading.js';
import { getFirestore } from '../firebase';
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: 'none',
        fontWeight: 'bold'
    }
}));

export default function ItemDetailContainer() {
    const classes = useStyles();
    const [productItem, setProductItem] = useState({});
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const itemId  = useParams();

    useEffect(() => {

        setLoading(true);
        setNotFound(false);
        const db = getFirestore();

        const itemList = db.collection("items");
        const item = itemList.doc(itemId.id);
        
        item.get().then((doc) => {
            if (!doc.exists) {
                setNotFound(true);
                return;
            } 
            setProductItem({ id: doc.id, ...doc.data() });
        }).catch((error) => {
            console.log("Error getting item", error);
            setNotFound(true);
        }).finally(() => {
            setLoading(false);
        });

    }, [itemId.id])


    return (
        <div>
            { loading ? <Loading /> : notFound? 
            <div className="Page-message">
            <label>Item not found</label>
            <br />
            <br /> 
            <label><NavLink className={classes.link} to="/">Click here</NavLink> to continue shopping </label>
            </div>
            : 
            <ItemDetail data={productItem} /> }
        </div>)

}