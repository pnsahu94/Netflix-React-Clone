import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { Link, useHistory } from "react-router-dom";
import "./Nav.css";

function Nav() {
    const history = useHistory();
    const [{ user }, dispatch] = useStateValue();
    const [show, handleShow] = useState(false);

    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
            history.push("/");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

    const clickHandler = (class_name) => {
        let box = document.querySelector(`.${class_name}`);
        if (box.style.display === "none") {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    };

    return (
        <React.Fragment>
            <div className="nav">
                <div className={`nav ${show && "nav_black"}`}>
                    <img
                        className="nav_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
                        alt="Netflix Logo"
                    />
                    <div className="nav_avatar">
                        <img
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                            alt="Netflix Logo"
                            onClick={() => {
                                clickHandler("nav_two");
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="nav_two">
                <div className="nav_avatar_user">
                    <p>Hello {`${user?.email.split("@")[0]}`}</p>
                    <button onClick={handleAuthenticaton}>Sign Out</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Nav;
