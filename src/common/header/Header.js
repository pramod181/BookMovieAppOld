import React, { useState } from "react";
import { ReactDOM } from "react";
import './Header.css';
import companyLogo from '../../assets/logo.svg';
import Button from "@material-ui/core/Button";

function openModelHandler(){
    return null;
}


const Header = function (props) {

    let isLoggedIn = props.isLoggedIn;
    let loginBtnDisplay, logoutBtnDisplay;
    if (isLoggedIn) {
        loginBtnDisplay = { display: "none", margin: "2px 10px" };
        logoutBtnDisplay = { display: "inline", margin: "2px 10px" };
    } else {
        loginBtnDisplay = { display: "inline" };
        logoutBtnDisplay = { display: "none" };
    }
    let enableBooking = props.enableBooking;
    let bookBtnDisplay;
    if (enableBooking) {
        bookBtnDisplay = { display: "inline", margin: "2px 10px" };
    } else {
        bookBtnDisplay = { display: "none", margin: "2px 10px" };
    }

    return (
        <div className="header">
            <div >
                <img className="logo" src={companyLogo} alt="companyLogo" ></img>
            </div>
            <div className="btn">
                <Button className="bookShowBtn" variant="contained" color="primary" size="small" style={bookBtnDisplay}>
                    Book Show
                </Button>
                <Button variant="contained" color="default" size="small" style={logoutBtnDisplay} onClick={openModelHandler}>
                    Logout
                </Button>
                <Button variant="contained" color="default" size="small" style={loginBtnDisplay}>
                    Login
                </Button>
            </div>









        </div>
    )

}
export default Header;