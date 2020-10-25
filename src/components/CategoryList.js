import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { getFirestore } from '../firebase';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  background: {
    backgroundColor: theme.palette.common.black
  },
  button: {
    textTransform: 'none',
    textDecoration: 'none',
    fontSize: 'inherit',
    color: 'white'
  }
}));

export default function CategoryList() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);
  const [categories, setCategories] = useState({});

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  useEffect(() => {
    const db = getFirestore();
    const itemList = db.collection("categories");
    itemList.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('No results');
      }
      setCategories(querySnapshot.docs.map(doc => {
        return ({ id: doc.id, ...doc.data() })
      }));

    }).catch((error) => {
      console.log("Error getting items", error);
    }).finally(() => {
    });

  }, []);


  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <Button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={classes.button}
      >Our work</Button>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
          >

            <ClickAwayListener onClickAway={handleClose}>
              <MenuList className={classes.background} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} >
                {categories.map((c) => (
                  <NavLink key={c.id + c.key} className="Nav-link" to={'/categories/' + c.key} color="inherit">
                    <MenuItem key={c.id} onClick={handleClose}>
                      {c.name}
                    </MenuItem>
                  </NavLink>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
