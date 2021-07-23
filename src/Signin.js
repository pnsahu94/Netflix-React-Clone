import React from "react";
import logo from "./images/logo.png";
import "./Signin.css";
import { Link } from "react-router-dom";

function Signin() {
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
                        <input type="email" name="" id="" />
                        <h5>Password</h5>
                        <input type="password" name="" id="" />
                        <button
                            type="submit"
                            className="signin-container-signin-signInButton"
                        >
                            Sign In
                        </button>
                    </form>
                    <p>
                        By signing-in you agree to the NETFLIX CLONE Conditions
                        of Use & Sale. Please see our Privacy Notice, our
                        Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button className="signin-container-signin-registerButton">
                        Create your Netflix Account
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signin;
