import React, { useState } from "react";
import logo from "./images/logo.png";
import "./Signin.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Signin() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/home");
            })
            .catch((error) => alert(error.message));
    };

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    alert("Account Created");
                    history.push("/home");
                }
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="signin">
            <div className="signin-container">
                <div className="signin-container-header">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="logo"
                            srcset=""
                            className="signin-container-header-logo"
                        />
                    </Link>
                </div>
                <div className="signin-container-signin">
                    <h1>Sign In</h1>
                    <form>
                        <h5>Email Address</h5>
                        <input
                            type="email"
                            name=""
                            id=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <h5>Password</h5>
                        <input
                            type="password"
                            name=""
                            id=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="signin-container-signin-signInButton"
                            onClick={signIn}
                        >
                            Sign In
                        </button>
                    </form>
                    <p>
                        By signing-in you agree to the NETFLIX CLONE Conditions
                        of Use & Sale. Please see our Privacy Notice, our
                        Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button
                        className="signin-container-signin-registerButton"
                        onClick={register}
                    >
                        Create your Netflix Account
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signin;
