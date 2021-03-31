import "./App.css";
import LandingPage from "./views/LandingPage";
import Match from "./views/Match";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/match/">
            <Match />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
