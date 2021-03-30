import "./App.css";
import LandingPage from "./views/LandingPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {/* Place the components for home here */}
            <LandingPage />
          </Route>
          <Route exact path="/match/">
            {/* Place the components for match here */}
            <Match />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

//DUMMY TEST COMPONENT :DELETE:
function Match() {
  return (
    <div>
      <h2>Match</h2>
    </div>
  );
}
