import React from "react";
import "./Login.css";
import logo from "./images/logo.png";
import cancelAnytime from "./images/cancel-anytime.png";
import watchAnywhere1 from "./images/watch-anywhere-1.png";
import watchAnywhere2 from "./images/watch-anywhere-2.png";
import watchAnywhere3 from "./images/watch-anywhere-3.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Login() {
    const clickHandler = (id) => {
        let answer = document.querySelector(`#${id}`);
        if (answer.style.display === "none") {
            answer.style.display = "block";
        } else answer.style.display = "none";
    };

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
                <div className="option-cancelAnytime">
                    <div className="option-cancelAnytime-left">
                        <p>
                            If you decide Netflix isn't for you - no problem. No
                            commitment. Cancel online anytime.
                        </p>
                        <Link to="/signin">
                            <div class="option-cancelAnytime-left-btn">
                                WATCH FREE FOR 30 DAYS
                            </div>
                        </Link>
                    </div>
                    <div className="option-cancelAnytime-right">
                        <img
                            src={cancelAnytime}
                            alt="cancel anytime"
                            srcset=""
                        />
                    </div>
                </div>
                <hr />
                <div className="option-watchAnywhere">
                    <div className="option-watchAnywhere-top">
                        <p>
                            Watch TV shows and movies anytime, anywhere —
                            personalized for you.
                        </p>
                        <Link to="/signin" class="option-watchAnywhere-top-btn">
                            <div>WATCH FREE FOR 30 DAYS</div>
                        </Link>
                    </div>

                    <div className="option-watchAnywhere-bottom">
                        <div className="option-watchAnywhere-bottom-col">
                            <img src={watchAnywhere1} alt="" srcset="" />
                            <div className="option-watchAnywhere-bottom-col-title">
                                <p>Watch on your TV</p>
                            </div>
                            <div className="option-watchAnywhere-bottom-col-description">
                                <p>
                                    Smart TVs, PlayStation, Xbox, Chromecast,
                                    Apple TV, Blu-ray players and more.
                                </p>
                            </div>
                        </div>
                        <div className="option-watchAnywhere-bottom-col">
                            <img src={watchAnywhere2} alt="" srcset="" />
                            <div className="option-watchAnywhere-bottom-col-title">
                                <p>Watch instantly or download for later</p>
                            </div>
                            <div className="option-watchAnywhere-bottom-col-description">
                                <p>
                                    Available on phone and tablet, wherever you
                                    go.
                                </p>
                            </div>
                        </div>
                        <div className="option-watchAnywhere-bottom-col">
                            <img src={watchAnywhere3} alt="" srcset="" />
                            <div className="option-watchAnywhere-bottom-col-title">
                                <p>Use any computer</p>
                            </div>
                            <div className="option-watchAnywhere-bottom-col-description">
                                <p>Watch right on Netflix.com.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="option-choosePlan">
                    <div class="option-choosePlan-context">
                        <p>Choose one plan and watch everything on Netflix.</p>
                        <Link to="/signin">
                            <div class="option-choosePlan-context-btn">
                                WATCH FREE FOR 30 DAYS
                            </div>
                        </Link>
                    </div>
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
                                    <td>Monthly price</td>
                                    <td>₹199</td>
                                    <td>₹649</td>
                                    <td>₹799</td>
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
                <hr />
            </div>
            <div className="faq">
                <div className="faq-title">Frequently Asked Questions</div>
                <div className="faq-content">
                    <div className="faq-content-question">
                        <div
                            className="faq-content-question-question"
                            onClick={() => {
                                clickHandler("answer-1");
                            }}
                        >
                            <p>What is Netflix ?</p>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div
                            className="faq-content-question-answer"
                            id="answer-1"
                        >
                            <p>
                                Netflix is a streaming service that offers a
                                wide variety of award-winning TV shows, movies,
                                anime, documentaries and more – on thousands of
                                internet-connected devices.
                            </p>
                            <p>
                                You can watch as much as you want, whenever you
                                want, without a single ad – all for one low
                                monthly price. There's always something new to
                                discover, and new TV shows and movies are added
                                every week!
                            </p>
                        </div>
                    </div>
                    <div className="faq-content-question">
                        <div
                            className="faq-content-question-question"
                            onClick={() => {
                                clickHandler("answer-2");
                            }}
                        >
                            <p>How much does Netflix cost ?</p>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div
                            className="faq-content-question-answer"
                            id="answer-2"
                        >
                            <p>
                                Watch Netflix on your smartphone, tablet, Smart
                                TV, laptop, or streaming device, all for one
                                fixed monthly fee. Plans range from ₹ 199 to ₹
                                799 a month. No extra costs, no contracts.
                            </p>
                        </div>
                    </div>
                    <div className="faq-content-question">
                        <div
                            className="faq-content-question-question"
                            onClick={() => {
                                clickHandler("answer-3");
                            }}
                        >
                            <p>Where can I watch ?</p>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div
                            className="faq-content-question-answer"
                            id="answer-3"
                        >
                            <p>
                                Watch anywhere, anytime, on an unlimited number
                                of devices. Sign in with your Netflix account to
                                watch instantly on the web at netflix.com from
                                your personal computer or on any
                                internet-connected device that offers the
                                Netflix app, including smart TVs, smartphones,
                                tablets, streaming media players and game
                                consoles.
                            </p>
                            <p>
                                You can also download your favourite shows with
                                the iOS, Android, or Windows 10 app. Use
                                downloads to watch while you're on the go and
                                without an internet connection. Take Netflix
                                with you anywhere.
                            </p>
                        </div>
                    </div>
                    <div className="faq-content-question">
                        <div
                            className="faq-content-question-question"
                            onClick={() => {
                                clickHandler("answer-4");
                            }}
                        >
                            <p>How do I cancel ?</p>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div
                            className="faq-content-question-answer"
                            id="answer-4"
                        >
                            <p>
                                Netflix is flexible. There are no annoying
                                contracts and no commitments. You can easily
                                cancel your account online in two clicks. There
                                are no cancellation fees – start or stop your
                                account anytime.
                            </p>
                        </div>
                    </div>
                    <div className="faq-content-question">
                        <div
                            className="faq-content-question-question"
                            onClick={() => {
                                clickHandler("answer-5");
                            }}
                        >
                            <p>What can I watch on Netflix ?</p>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div
                            className="faq-content-question-answer"
                            id="answer-5"
                        >
                            <p>
                                Netflix has an extensive library of feature
                                films, documentaries, TV shows, anime,
                                award-winning Netflix originals, and more. Watch
                                as much as you want, anytime you want.
                            </p>
                        </div>
                    </div>
                    <div className="faq-content-question">
                        <div
                            className="faq-content-question-question"
                            onClick={() => {
                                clickHandler("answer-6");
                            }}
                        >
                            <p>Is Netflix good for kids ?</p>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div
                            className="faq-content-question-answer"
                            id="answer-6"
                        >
                            <p>
                                The Netflix Kids experience is included in your
                                membership to give parents control while kids
                                enjoy family-friendly TV shows and films in
                                their own space.
                            </p>
                            <p>
                                Kids profiles come with PIN-protected parental
                                controls that let you restrict the maturity
                                rating of content kids can watch and block
                                specific titles you don’t want kids to see.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
