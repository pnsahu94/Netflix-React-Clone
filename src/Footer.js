import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <React.Fragment>
            <hr />
            <div className="footer">
                <div className="footer-row">
                    <p>Questions? Call 1-866-579-7172</p>
                </div>
                <div className="footer-row">
                    <table className="footer-row-table">
                        <tr>
                            <td>FAQ</td>
                            <td>Help Centre</td>
                            <td>Account</td>
                            <td>Media Centre</td>
                        </tr>
                        <tr>
                            <td>Investor Relations</td>
                            <td>Jobs</td>
                            <td>Ways to Watch</td>
                            <td>Terns of Use</td>
                        </tr>
                        <tr>
                            <td>Privacy</td>
                            <td>Cookie Preferences</td>
                            <td>Corporate Information</td>
                            <td>Conatct Us</td>
                        </tr>
                        <tr>
                            <td>Speed Test</td>
                            <td>Legal Notices </td>
                            <td>Only on Netflix</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;
