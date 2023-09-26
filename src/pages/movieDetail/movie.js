import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './movie.css'

const Movie = () => {
    const [currentMovieDetails, setMovie] = useState()
    const { id } = useParams()
    useEffect(() => {
        getData();
        window.scrollTo(0, 0);
    }, [])
    
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }
    // console.log(currentMovieDetails);
    return (
        <div className='movie_container'>
            <div className='container'>
                <div className='movie_header'>
                    <div className="movie_intro">
                        <img className='movie_backdrop' src={`https://image.tmdb.org/t/p/original${currentMovieDetails ? currentMovieDetails.backdrop_path : ""}`} alt="ds" />
                    </div>
                    <div className="movie_detail">
                        <div className="detail_left">
                            <div className="movie_poster">
                                <img src={`https://image.tmdb.org/t/p/original${currentMovieDetails ? currentMovieDetails.poster_path : ""}`} alt="" />
                            </div>
                        </div>
                        <div className="detail_right">
                            <div className="datail_rightop">
                                <h2 className='movie_name'>{currentMovieDetails ? currentMovieDetails.original_title : ""}</h2>
                                <h3 className="movie_tagline">{currentMovieDetails ? currentMovieDetails.tagline : ""}</h3>
                                <div className="movie_rating">
                                    <span>{currentMovieDetails ? currentMovieDetails.vote_average : ""}</span>
                                    <span className='movie_votecount'>{currentMovieDetails ? currentMovieDetails.vote_count : ""}</span>
                                </div>
                                <h5 className='movie_runtime'>{currentMovieDetails ? currentMovieDetails.runtime : ""}</h5>
                                <h5 className="movie_releasedate">{currentMovieDetails ? currentMovieDetails.release_date : ""}</h5>
                                <div className="movie_generes">
                                    {
                                        currentMovieDetails ?
                                            currentMovieDetails.genres.map((gen) => (
                                                <span className='movie_genre' id={gen.id}>{gen.name}</span>
                                            )) :
                                            ""
                                    }
                                </div>
                            </div>
                            <div className="detail_rightbottom">
                                <h3 className='synopsistext'>Synopsis</h3>
                                <p>{currentMovieDetails ? currentMovieDetails.overview : ""}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movie_link">
                    <h4 className='movie_heading'>Useful Links</h4>
                    {
                        currentMovieDetails && currentMovieDetails.homepage && <a href={currentMovieDetails.homepage} target='_blank' rel="noopener noreferrer" className='movie__homeButton'>Homepage<i className="fa fa-external-link" aria-hidden="true"></i></a>
                    }
                    {
                        currentMovieDetails && currentMovieDetails.imdb_id && <a href={`https://www.imdb.com/title/${currentMovieDetails.imdb_id}`} target='_blank' rel="noopener noreferrer" className='movie__imdbButton'>Imdb<i className="fa fa-external-link" aria-hidden="true"></i></a>
                    }
                </div>
                <h2 className='Production_heading'>Production companies</h2>
                <div className="movie_production">
                    {
                        currentMovieDetails && currentMovieDetails.production_companies && currentMovieDetails.production_companies.map((comp) => (
                            <>
                                {
                                    comp.logo_path
                                    &&
                                    <div className='movie_production_detail'>
                                        <img src={`https://image.tmdb.org/t/p/original${comp.logo_path}`} alt="" />
                                        <span className='movie_prod_compname'>{comp.name}</span>
                                    </div>
                                }
                            </>
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Movie
