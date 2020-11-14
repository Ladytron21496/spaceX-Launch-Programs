import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Test} from "./components/test";
import LandingPage from "../src/components/landingpage";

function App() {
  return ( <Router>
    <Switch>
    <Route exact={true} path="/">
      <LandingPage />
    </Route>
    <Route exact={true} path="/test">
      <Test/>
    </Route>
  </Switch>
  </Router>)
}

export default App;
