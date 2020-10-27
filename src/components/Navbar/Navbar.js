import React from 'react';
import { useAuth } from '../../services/authentication';
import { Link, useHistory } from 'react-router-dom';

/* UI */
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  links: {},
  link: {
    margin: 5,
    color: 'white',
    textDecoration: 'none',
  },
  bar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const { user, signout } = useAuth();
  const history = useHistory();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    signout().then(() => {
      handleClose();
      history.push('/');
    });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
          <div className={classes.links}>
            <Link className={classes.link} to="/jobs">
              Jobs
            </Link>
            <Link className={classes.link} to="/companies">
              Companies
            </Link>
          </div>
          {user === null ? (
            <LinearProgress color="secondary" />
          ) : user && user.emailVerified ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleSignOut}>log out</MenuItem>
              </Menu>
            </div>
          ) : (
            <div className={classes.links}>
              <Link className={classes.link} to="/login">
                Sign In
              </Link>
              <Link className={classes.link} to="/signup">
                Sign up
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {user === null ? <LinearProgress /> : null}
    </div>
  );
}
