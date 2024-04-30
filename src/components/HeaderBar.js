import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ShoppingCart, AccountCircle } from "@material-ui/icons";
import Categories from "./categories/Categories";


const HeaderBar = ({ children }) => {
  const style = {
    color: "white"
  }
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/products" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              LihiShop
            </Typography>
          </Link>
        <Categories/>
          <div >
            <IconButton component={Link} to="/cart"   style={style}>
              <ShoppingCart />
              Cart
            </IconButton>
            <IconButton component={Link} to="/user/single"   style={style}>
              <AccountCircle />
              User
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

export default HeaderBar;
