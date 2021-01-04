import './App.css';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import Main from "./components/main";
import LandingPage from "../src/components/landingpage";

function App() {
  return ( <HashRouter basename='/'>
    <Switch>
    <Route exact={true} path="/">
      <LandingPage/>
    </Route>
    <Route exact={true} path="/main">
      <Main/>
    </Route>
  </Switch>
  </HashRouter>)
}

export default App;
