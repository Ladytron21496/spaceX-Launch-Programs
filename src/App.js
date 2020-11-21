import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from "./components/main";
import LandingPage from "../src/components/landingpage";

function App() {
  return ( <Router>
    <Switch>
    <Route exact={true} path="/">
      <LandingPage/>
    </Route>
    <Route exact={true} path="/main">
      <Main/>
    </Route>
  </Switch>
  </Router>)
}

export default App;
