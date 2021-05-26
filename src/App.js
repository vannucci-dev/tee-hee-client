import { NavBar } from "./Components/NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Views/Home/Home";
import AlertDismissibleExample from "./Components/Alert/Alert";
import Footer from "./Components/Footer/Footer";
import Product from "./Views/Product/Product";
import Login from "./Views/Login/Login";
import Signup from "./Views/Signup/Signup";
import User from "./Views/User/User";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <AlertDismissibleExample />
          </Route>
        </Switch>
        <NavBar />
        <Switch>
          <Route path="/login">
            <Login />
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
