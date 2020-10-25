import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ItemCount from './ItemCount.js'
import { NavLink } from "react-router-dom";
import { CartContext } from './context/CartContext.js'
import Button from '@material-ui/core/Button';
import CartSnackbar from './CartSnackbar.js';
import AlertDialog from './AlertDialog.js';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10
  },
  media: {
    height: 250,
  },
  img: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    display: 'block',
    width: '100%',
  },
  div: {
    marginTop:15,
    maxWidth: 328,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 15,
  }
});

function Item(props) {
  const classes = useStyles();
  const [, setCart] = useContext(CartContext);
  const [count, setCount] = useState(0);
  //Snackbar
  const [openBar, setOpenBar] = useState(false);

  const handleBarClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      }

      setOpenBar(false);
  };

  //AlertDialog
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = () => {
      setOpenAlert(false);
  };

  return (
    <Card className={classes.root}>
      <NavLink className="Nav-link" to={'/item/' + props.data.id} color="inherit">
        <CardActionArea >

          <CardMedia
            className={classes.media}
            image={props.data.image}
            title={props.data.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" color="textPrimary" component="h2">
              {props.data.name}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              ${props.data.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </NavLink>
      <CardActions>
        <ItemCount handleChange={handleChange} min="0" max="10" />
      </CardActions>
      <div className={classes.div}>
       <Button id={'Button' + props.data.id} onClick={onAdd} className={classes.button} variant="outlined" color="primary">Add to cart</Button>
      </div>
      <CartSnackbar open={openBar} count={count} handleBarClose={handleBarClose} />
      <AlertDialog open={openAlert} message='Select at least 1 unit' handleClose={handleClose} />
    </Card>
  );

  function onAdd() {
    if (count > 0) {
      setOpenBar(true);
      setCart((currentCart) => {
        const c = currentCart.find(p => p[0].id === props.data.id);
        let newState;
        if (c !== undefined) {
          c[1] += count;
          newState = [...currentCart];
        }
        else {
          newState = [...currentCart, [props.data, count]]
        }
        return newState;
      });
    }
    else {
      setOpenAlert(true);
    }
  }

  function handleChange(state) {
    setCount(state);
    state > 0 ? document.getElementById('Button' + props.data.id).innerHTML = `Add ${state} to cart` : document.getElementById('Button' + props.data.id).innerHTML = 'Add to cart';
  }

}

export default Item;