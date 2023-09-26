import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import "./card.css"
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Card = ({ movie, key }) => {
    const [isLoadig, setLoading] = useState(true);
    // console.log(movie);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)
    }, [])
    return <>
        {
            isLoadig
                ?
                <div className="cards" key={key}>
                    <SkeletonTheme baseColor="#444" highlightColor="#A9A9A9">
                        <Skeleton height={380} duration={2} />
                    </SkeletonTheme>
                </div>
                :
                <Link to={`/movie/${movie.id}`}>
                    <div className="cards" key={key}>
                        <img src={`https://image.tmdb.org/t/p/original/${movie ? movie.poster_path : ""}`} className="cards_img" alt="" />
                        <div className="card_overlay">
                            <h4 className="card_title">{movie ? movie.original_title : ""}</h4>
                            <div className="card_runtime">
                                {movie ? movie.release_date : ""}
                                <span className="card_rating">
                                    {movie ? movie.vote_average : ""}
                                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                </span>
                            </div>
                            <div className="card_description">
                                {movie && movie.overview && movie.overview.slice(0, 118) + '...'}
                            </div>
                        </div>
                    </div>
                </Link>
        }
    </>

}

export default Card
