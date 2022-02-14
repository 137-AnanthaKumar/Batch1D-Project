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
import CustProfile from "./CustProfile";
import MakeTransaction from "./MakeTrans";
import TransactionHistory from "./TranscHistory";

import PayeeRegister  from "./PayeeRegister";
import ChangePass from "./ChangePass";
import { history } from "react-router-dom";
import BillPayment from "../customers/BillPayment";

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
    // necessary for content to be below app bar
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
        return <CustProfile />;
      case "TRANSACTION":
        return <MakeTransaction />;
      case "HISTORY":
        return <TransactionHistory />;

      // case "CHANGEMOB":
      //   return <ChangeMobNo />;
      case "BILL_PAY":
            return <BillPayment />;
      case "PAYEE":
        return <PayeeRegister />;
      case "CHANGEPASS":
        return <ChangePass />;
      default:
        break;
    }
  };

  const onLogout = () => {
    sessionStorage.removeItem("customer");
 
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
              Customer Home
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
          <ListItem button onClick={(e) => setfragment("TRANSACTION")}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Make Transaction" />
          </ListItem>
          <ListItem button onClick={(e) => setfragment("HISTORY")}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Transaction History" />
          </ListItem>
       
          <ListItem button onClick={(e) => setfragment("CHANGEPASS")}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Change Password" />
          </ListItem>
          <ListItem button onClick={(e) => setfragment("PAYEE")}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Payee" />
          </ListItem>
          <ListItem button onClick={(e) => setfragment("BILL_PAY")}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Bill Payment" />
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
