import { NavBar } from "./Components/NavBar/Navbar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import AlertDismissibleExample from "./Components/Alert/Alert";
import Footer from "./Components/Footer/Footer";
import Product from "./Views/Product/Product";
import Login from "./Views/Login/Login";
import Signup from "./Views/Signup/Signup";
import User from "./Views/User/User";
import CartCanvas from "./Views/Cart/Cart";
import Cart from "./Views/Cart/Cart";
import { useState } from "react";
import SingleProduct from "./Components/SingleProduct/SingleProduct";

export default function App() {
  const [visible, setVisible] = useState();

  const toggleMenu = () => {
    setVisible(!visible);
  };
  const handleMouseDown = (e) => {
    toggleMenu();
    e.stopPropagation();
  };
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <AlertDismissibleExample />
          </Route>
        </Switch>
        <NavBar handleMouseDown={handleMouseDown} />
        <Cart handleMouseDown={handleMouseDown} menuVisibility={visible} />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <CartCanvas />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/posters">
            <Product
              title="poster"
              src="https://images.unsplash.com/photo-1491252645376-253f0f174d78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1372&q=80"
            />
          </Route>
          <Route path="/mugs">
            <Product
              title="mug"
              src="https://images.unsplash.com/photo-1602632066350-4206c806ebdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
            />
          </Route>
          <Route path="/shirts">
            <Product
              title="shirt"
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
          </Route>
          <Route path="/products/:id" children={<SingleProduct />} />
          <Route path="/user">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
