import React, {useContext} from 'react';
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
import './Item.css';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10
  },
  media: {
    height: 300,
  },
  img: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});

function Item(props) {
  const classes = useStyles();
  let count = 0;
  const [,setCart] = useContext(CartContext);

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
      <div className="Add-Div">
        <Button id={'Button' + props.data.id} onClick={onAdd} classes={{ root: 'Add-Button' }} variant="outlined" color="primary">Add to cart</Button>
      </div>
    </Card>
  );

  function onAdd() {
    if (count > 0) {
        alert(count + ' products added.')
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
        alert('Select at least 1 unit.');
    }
}
  
  function handleChange(state) {
    count = state
    state > 0 ? document.getElementById('Button' + props.data.id).innerHTML = 'Add ' + count + ' to cart' : document.getElementById('Button' + props.data.id).innerHTML = 'Add to cart';
  }

}

export default Item;