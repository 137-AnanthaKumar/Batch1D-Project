import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddCustomer from "./addCustomer";
import Profile from "./profile";
import ListCustomer from "./listCustomer";
import ListTransaction from "./listTransaction";
import Approve from "./Approve";

import { logout } from "../../actions/adminActions/adminActions";
import { useDispatch, useSelector } from "react-redux";
import { history } from "react-router-dom";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
   
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [fragment, setfragment] = useState("PROFILE");

  const loadFragment = () => {
    switch (fragment) {
      case "PROFILE":
        return <Profile />;
      case "ADD":
        return <AddCustomer />;
      case "LIST_CUST":
        return <ListCustomer />;
      case "LIST_TRANS":
        return <ListTransaction />;
      case "LIST_NEWAPPLICATION":
          return <Approve />;
      default:
        break;
    }
  };

  const onLogout = () => {
    sessionStorage.removeItem("admin");
    props.history.push("/");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className="App">
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Admin Home
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={(e) => setfragment("PROFILE")}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button onClick={(e) => setfragment("LIST_NEWAPPLICATION")}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="NEW Application" />
        </ListItem>
          <ListItem button onClick={(e) => setfragment("ADD")}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Add New Customer" />
          </ListItem>
          <ListItem button onClick={(e) => setfragment("LIST_CUST")}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="List All Customers" />
          </ListItem>
          <ListItem button onClick={(e) => setfragment("LIST_TRANS")}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="List All Transactions" />
          </ListItem>
          <ListItem button onClick={onLogout}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {loadFragment()}
      </main>
    </div>
  );
}
