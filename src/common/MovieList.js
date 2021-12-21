import React, { useState, useEffect } from "react";

export default function MoviesList(params){

    const [moviesList, setMoviesList] = useState([]);

    async function upComingMoviesList() {
        const rawResponse = await fetch("http://localhost:8085/api/v1/movies?limit=6&status=PUBLISHED");
        const data = await rawResponse.json();
        setMoviesList(data.movies);
    }

    useEffect(()=>{
        upComingMoviesList();    
      },[moviesList]);



    return (
        <div>
            <div>
                MoviesList
            </div>
            {
                moviesList.map(sub => {
                    return <div key={sub.id}>
                        <img src={sub.poster_url} alt={sub.title}/>
                    </div>
                })
            }
        </div>
    )



}

