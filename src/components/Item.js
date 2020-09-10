import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ItemCount from './ItemCount.js'

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

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Pink Shoes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            How many do you want? (Max: 10 units)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ItemCount min="0" max="10" />
      </CardActions>
    </Card>
  );
}

export default ProductCard;