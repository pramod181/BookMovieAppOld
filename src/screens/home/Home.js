import React, { Fragment, useState } from "react";
import { ReactDOM } from "react";
import Header from "../../common/header/Header";
import MoviesList from "../../common/MovieList";
import './Home.css';
import ReleasedMovies from "./ReleasedMovies";
import UpComingMovies from "./UpComingMovies";

const Home = function (props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // setIsLoggedIn(true);
    return (
        <Fragment>
            <div>
                <Header isLoggedIn={isLoggedIn} enableBooking={false}></Header>
            </div>
            <div className="heading" >
                UpComing Movies
            </div>
            <UpComingMovies />
            <ReleasedMovies/>


        </Fragment>

    )

}
export default Home;