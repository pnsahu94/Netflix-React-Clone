import React from "react";
import "./Login.css";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Login() {
    return (
        <div className="login">
            <div className="showcase">
                <div className="showcase-container">
                    <div className="showcase-container-header">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="logo"
                                srcset=""
                                className="showcase-container-header-logo"
                            />
                        </Link>
                        <Link to="/signin">
                            <button className="showcase-container-header-btn">
                                Sign In
                            </button>
                        </Link>
                    </div>
                    <div className="showcase-container-body">
                        <div className="showcase-container-body-xl">
                            <p>Unlimited movies, TV</p>
                            <p>shows and more.</p>
                        </div>
                        <div className="showcase-container-body-l">
                            Watch anywhere. Cancel anytime.
                        </div>
                        <div className="showcase-container-body-m">
                            Ready to watch? Enter your email to create or
                            restart your membership.
                        </div>
                        <div className="showcase-container-body-getstarted">
                            <form action="submit">
                                <input
                                    type="email"
                                    className="showcase-container-body-getstarted-email"
                                    placeholder="Email address"
                                />
                                <input
                                    type="button"
                                    value="Get Started >"
                                    className="showcase-container-body-getstarted-btn"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="option">
                <div className="option-cancelAnytime"></div>
                <div className="option-watchAnywhere"></div>
                <div className="option-choosePlan">
                    <div className="option-choosePlan-table">
                        <table className="option-choosePlan-table-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Basic</th>
                                    <th>Standard</th>
                                    <th>Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Monthly price after free month ends on
                                        6/19/19
                                    </td>
                                    <td>$8.99</td>
                                    <td>$12.99</td>
                                    <td>$15.99</td>
                                </tr>
                                <tr>
                                    <td>HD Available</td>
                                    <td>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ultra HD Available</td>
                                    <td>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Screens you can watch on at the same
                                        time
                                    </td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>
                                        Watch on your laptop, TV, phone and
                                        tablet
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Unlimited movies and TV shows</td>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cancel anytime</td>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>First month free</td>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <hr />
            <div className="faq"></div>
        </div>
    );
}

export default Login;
