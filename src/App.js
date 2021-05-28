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
          <Route path="/shirts">
            <Product />
          </Route>
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
