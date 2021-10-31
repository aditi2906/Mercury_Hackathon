import "./App.css";
import ParticleBackground from "./components/Header/ParticleBackground";
import {BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from "react-router";
import Home from "./components/pages";
import about from "./components/pages/about";
import contact from "./components/pages/contact";
import upcoming from "./components/pages/upcoming";
import customerAccessPage from "./components/account/customerAccessPage";
import UserView from "./components/UserView";
import Create from "./components/pages/create";



function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Home" component={Home} exact />
      <Route path="/about" component={about} exact />
      <Route path="/discover" component={about} exact />
      <Route path="/upcoming" component={upcoming} exact />
      <Route path="/contact" component={contact} exact />
      <Route path="/customerAccess" component={customerAccessPage} exact></Route>
      <Route path="/User" component={UserView} exact></Route>
      <Route path="/Create" component={Create} exact></Route>
    </Switch>
    </Router>
    </>
  );
}



export default App;
