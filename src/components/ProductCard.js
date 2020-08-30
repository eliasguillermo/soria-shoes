import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProductGroup1 from '../images/ProductGroup1.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function ProductCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ProductGroup1}
          title="Pink Shoes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pink and golden sneakers
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            How many do you want?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          +-
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;