import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import Home from "./Home";
import Login from "./Login";
import Footer from "./Footer";
import Signin from "./Signin";
import "./App.css";

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        // will only run once when the app component loads...

        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // the user just logged in / the user was logged in

                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                // the user is logged out
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);

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
