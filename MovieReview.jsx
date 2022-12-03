import React from 'react';
import { useEffect,useState } from 'react';
import axios from "axios"

const MovieReview = () => {
    const [movies ,setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const res =await axios.get("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=BbQgNPIxZQilAZJT2bwIaMVNyxg0tlzm")
        setMovies (res.data.results)
            console.log(res.data.results);
        }
        fetchMovies()


    }, [])
    return (
        <div>
            <h1 style={{textAlign:"center" , backgroundColor:"Highlight"}}>MOVIE REVIEW</h1>
            <hr />
            <section>
           {movies.map((movie) =>{
            const {byline , critics_pick , display_title ,headline } = movie
            return (
                <div style={{marginLeft:"30px"}}>
                    <h1>Headline: {headline}</h1>
                    <h2>Title:  {display_title}</h2>
                    <h3>Byline: {byline}</h3>
                    <h4>Critic Pick: {critics_pick}</h4>
                    <hr />


                </div>
            )
           } 
           )}
            </section>
        </div>
    );
}

export default MovieReview;
