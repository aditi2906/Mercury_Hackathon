import "./App.css";
import ParticleBackground from "./components/Header/ParticleBackground";
import {BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from "react-router";
import Home from "./components/pages";
import about from "./components/pages/about";
import contact from "./components/pages/contact";
import upcoming from "./components/pages/upcoming";


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
    </Switch>
    </Router>
    </>
  );
}



export default App;
