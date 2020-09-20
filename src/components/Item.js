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
import { CartContext } from './CartContext.js'
import './Item.css';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10
  },
  media: {
    height: 200,
  },
});

function ProductCard(props) {
  const classes = useStyles();
  let count = 0;
  const [, setCounter] = useContext(CartContext);

  return (
    <Card className={classes.root}>
      <NavLink className="Nav-link" to={'/item/' + props.productId} color="inherit">
        <CardActionArea >

          <CardMedia
            className={classes.media}
            image={props.image}
            title="Pink Shoes"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" color="textPrimary" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              How many do you want? (Max: 10 units)
          </Typography>
          </CardContent>
        </CardActionArea>
      </NavLink>
      <CardActions>
        <ItemCount handleChange={handleChange} min="0" max="10" />
      </CardActions>
      <div className="Add-Div">
        <Button id={'Button' + props.productId} onClick={onAdd} classes={{ root: 'Add-Button' }} variant="outlined" color="primary">Add to cart</Button>
      </div>
    </Card>
  );

  function onAdd() {
    count > 0 ? alert(count + ' products added.') : alert('Select at least 1 unit.');
    setCounter(counter => counter + count);
  }
  
  function handleChange(state) {
    count = state
    state > 0 ? document.getElementById('Button' + props.productId).innerHTML = 'Add ' + count + ' to cart' : document.getElementById('Button' + props.productId).innerHTML = 'Add to cart';
  }

}

export default ProductCard;