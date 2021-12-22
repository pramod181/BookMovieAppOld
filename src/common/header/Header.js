import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import './Header.css';
import companyLogo from '../../assets/logo.svg';
import Button from "@material-ui/core/Button";

function openModelHandler() {
    return null;
}


const Header = function (props) {
    const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);

    let loginBtnDisplay, logoutBtnDisplay;
    if (isLoggedIn) {
        loginBtnDisplay = { display: "none", margin: "2px 10px" };
        logoutBtnDisplay = { display: "inline", margin: "2px 10px" };
    } else {
        loginBtnDisplay = { display: "inline" };
        logoutBtnDisplay = { display: "none" };
    }
    var enableBooking = props.enableBooking;

    var bookGuestBtnDisplay = { display: "none", margin: "2px 10px" };
    var bookUserBtnDisplay = { display: "none", margin: "2px 10px" };

    if (enableBooking) {
        if (isLoggedIn) {
            bookUserBtnDisplay = { display: "inline", margin: "2px 10px" };
        } else {
            bookGuestBtnDisplay = { display: "inline", margin: "2px 10px" };
        }
    }



    useEffect(() => {

        if (enableBooking) {
            if (isLoggedIn) {
                bookUserBtnDisplay = { display: "inline", margin: "2px 10px" };
            } else {
                bookGuestBtnDisplay = { display: "inline", margin: "2px 10px" };
            }
        }

    }, [isLoggedIn])

    return (
        <div className="header">
            <div >
                <img className="logo" src={companyLogo} alt="companyLogo" ></img>
            </div>
            <div className="btn">
                <Button className="bookShowBtn" variant="contained" color="primary" size="small" style={bookGuestBtnDisplay} onClick={bookGuestHandler}>
                    Book Show
                </Button>
                <Button className="bookShowBtn" variant="contained" color="primary" size="small" style={bookUserBtnDisplay} onClick={book}>
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