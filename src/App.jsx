import "./App.css";
import "./BackStore/css/style.css";
import "./BackStore/css/satoshi.css";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/frontStore/LandingPage";
import { ContextApiProvider } from "./provider/Provider";
import Products from "./BackStore/Products";
import Dashboard from "./BackStore/Dashboard";
import AR from "./components/3d/AR";
import Configurator from "./BackStore/Configurator";
import Navbar from "./components/frontStore/Navbar";
import LandingPg from "./components/frontStore/LandingPg";
import ProductCard from "./components/frontStore/Products";
import Description from "./components/frontStore/Description";
import IFrameViewer from "./components/3d/IFrameViewer";

function App() {
  return (
    <ContextApiProvider>
      {!window.location.pathname.includes("/ar/") && <Navbar />}

      <Router>
        <Switch>
          <Route path="/description/:id">
            <Description />
          </Route>
          <Route path="/admin/products">
            <Products />
          </Route>
          <Route path="/admin/dashboard">
            <Dashboard />
          </Route>
          <Route path="/admin/configurator">
            <Configurator />
          </Route>
          <Route path="/ar/:id">
            <AR />
          </Route>
          <Route path="/home">
            <LandingPg path="/home" />
          </Route>
          <Route path="/products">
            <LandingPg path="/products" />
          </Route>

          <Route path="/about">
            <LandingPg path="/about" />
          </Route>
          <Route path="/contact">
            <LandingPg path="/contact" />
          </Route>
          <Route path="/">
            <IFrameViewer path="/" />
          </Route>
        </Switch>
      </Router>
    </ContextApiProvider>
  );
}

export default App;
