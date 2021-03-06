import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Logo from "./images/OlshanRealtylogo.png";
import Sales from "./Property";
import Rentals from "./Rentals";
import Agents from "./Agents";
import Property from "./Property";
import Agent from "./Agent";
import Press from "./Press";
import About from "./About";
import Services from "./Services";
import Company from "./Company";
import FAQ from "./FAQ";
import MarketReport from "./MarketReport";
import Main from "./Home";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <BrowserRouter>
        <div>
          <Switch>
            <Redirect exact from="/" to="/Home" />
            <Route path="./Home" component={Main} />
            <Route path="/Property" component={Sales} />
            <Route path="/Rentals" component={Rentals} />
            <Route path="/Agents" component={Agents} />
            <Route path="/Property" component={Property} />
            <Route path="/Agent" component={Agent} />
            <Route path="/Press" component={Press} />
            <Route path="/About" component={About} />
            <Route path="/Services" component={Services} />
            <Route path="/Company" component={Company} />
            <Route path="/FAQ" component={FAQ} />
            <Route path="/MarketReport" component={MarketReport} />
          </Switch>
        </div>{" "}
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              className={classes.title}
              component={Link}
              to="/"
            >
              <img border="0" alt="logo" src={Logo} width="280" height="50" />
            </Typography>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
        </main>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />

          <List component="nav">
            {["SALES"].map((text, index) => (
              <ListItem button key={text} component={Link} to="/Property">
                <ListItemText primary={text} />
              </ListItem>
            ))}

            {["RENTALS"].map((text, index) => (
              <ListItem button key={text} component={Link} to="./Rentals">
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["MARKET REPORT"].map((text, index) => (
              <ListItem button key={text} component={Link} to="/MarketReport">
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["COMPANY"].map((text, index) => (
              <ListItem button key={text} component={Link} to="/Company">
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          <List>
            {["AGENTS"].map((text, index) => (
              <ListItem button key={text} component={Link} to="/Agents">
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          <List>
            {["SERVICES"].map((text, index) => (
              <ListItem button key={text} component={Link} to="/Services">
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          <List>
            {["FAQ"].map((text, index) => (
              <ListItem button key={text} component={Link} to="/FAQ">
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />

          <List>
            {["PRESS"].map((text, index) => (
              <ListItem button key={text} component={Link} to="/Press">
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          <Divider />
        </Drawer>
      </BrowserRouter>
    </div>
  );
}
