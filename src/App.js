import { NavBar } from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/home/Home";
import AlertDismissibleExample from "./Components/Alert";
import Footer from "./Components/footer/Footer";

export default function App() {
  return (
    <Router>
      <div>
        <AlertDismissibleExample />
        <NavBar />
        <Switch>
          <Route path="/about">About</Route>
          <Route path="/users">Users</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
