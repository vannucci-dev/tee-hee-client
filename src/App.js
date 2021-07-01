import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import NavBar from "./Components/NavBar/Navbar";
import Home from "./Routes/Home/Home";
import AlertDismissibleExample from "./Components/Alert/Alert";
import Footer from "./Components/Footer/Footer";
import Product from "./Routes/Product/Product";
import Login from "./Routes/Login/Login";
import Signup from "./Routes/Signup/Signup";
import User from "./Routes/User/User";
import Cart from "./Routes/Cart/Cart";
import Order from "./Routes/Order/Order";
import SingleProduct from "./Routes/SingleProduct/SingleProduct";
import Payment from "./Routes/Stripe/Payment";

export default function App() {
  const [visible, setVisible] = useState();
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [loggedOut, setLoggedOut] = useState(false);
  const [cart, setCart] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState([]);

  const handleCartItems = (newItems) => {
    setCartItems(newItems);
  };
  const handleOrder = (newOrder) => {
    setOrder(newOrder);
  };

  const handleItems = (newItems) => {
    if (newItems === "reset") {
      setItems([]);
    } else {
      setItems((items) => [...items, newItems]);
    }
  };

  const handleUser = (newUser) => {
    setUser(newUser);
  };
  const handleCart = (newCart) => {
    setCart(newCart);
  };
  const toggleMenu = () => {
    setVisible(!visible);
  };
  const handleMouseDown = (e) => {
    toggleMenu();
    e.stopPropagation();
  };
  const isLoggedOut = (value) => {
    setLoggedOut(value);
  };

  useEffect(() => {
    axios
      .get("/api/auth/login")
      .then((res) => {
        if (res.data) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      })
      .catch((error) => {
        console.log("Error in request App.js: ");
        console.log(error);
        setAuthenticated(false);
      });
  }, [user, loggedOut]);

  useEffect(() => {
    console.log("Cart Items in App.js:");
    console.log(cartItems);
  }, [cartItems]);

  useEffect(() => {
    console.log("Items in App.js:");
    console.log(items);
  }, [items]);

  useEffect(() => {
    console.log("Orders in App.js:");
    console.log(order);
  }, [order]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact></Route>
      </Switch>
      <NavBar
        handleMouseDown={handleMouseDown}
        authenticated={authenticated}
        user={user}
        isLoggedOut={isLoggedOut}
        items={items}
      />
      {authenticated ? (
        <Cart
          handleItems={handleItems}
          handleMouseDown={handleMouseDown}
          menuVisibility={visible}
          cartItems={cartItems}
          items={items}
        />
      ) : (
        ""
      )}
      <Switch>
        <Route path="/login">
          <Login
            handleCart={handleCart}
            handleUser={handleUser}
            authenticated={authenticated}
            handleCartItems={handleCartItems}
          />
        </Route>
        <Route path="/cart">
          <div>Cart</div>
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/posters">
          <Product
            title="poster"
            src="https://images.unsplash.com/photo-1491252645376-253f0f174d78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1372&q=80"
            cart={cart}
            handleCartItems={handleCartItems}
            handleItems={handleItems}
            authenticated={authenticated}
          />
        </Route>
        <Route path="/mugs">
          <Product
            title="mug"
            src="https://images.unsplash.com/photo-1602632066350-4206c806ebdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
            cart={cart}
            handleCartItems={handleCartItems}
            handleItems={handleItems}
            authenticated={authenticated}
          />
        </Route>
        <Route path="/shirts">
          <Product
            title="shirt"
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            cart={cart}
            handleCartItems={handleCartItems}
            handleItems={handleItems}
            authenticated={authenticated}
          />
        </Route>
        <Route
          path="/products/:id"
          children={
            <SingleProduct
              handleCartItems={handleCartItems}
              cart={cart}
              cartItems={cartItems}
              handleItems={handleItems}
              authenticated={authenticated}
            />
          }
        />
        <Route path="/user">
          <User
            user={user}
            authenticated={authenticated}
            order={order}
            handleOrder={handleOrder}
          />
        </Route>
        <Route path="/order">
          <Order
            cartItems={cartItems}
            user={user}
            items={items}
            authenticated={authenticated}
            handleOrder={handleOrder}
          />
        </Route>
        <Route path="/checkout">
          <AlertDismissibleExample />
          <Payment
            items={items}
            cartItems={cartItems}
            user={user}
            authenticated={authenticated}
            order={order}
            cart={cart}
            handleCartItems={handleCartItems}
          />
        </Route>
        <Route path="/">
          <Home
            cart={cart}
            handleCartItems={handleCartItems}
            handleItems={handleItems}
            authenticated={authenticated}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
