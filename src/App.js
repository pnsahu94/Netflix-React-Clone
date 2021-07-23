import React from "react";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Footer from "./Footer";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/signin">
                        <Signin />
                    </Route>
                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
