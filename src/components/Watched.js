import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { MovieCard } from './MovieCard'

export const Watched = () => {
    const { watched } = useContext(GlobalContext);

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">Watched</h1>
                    <span className="count-pill">
                        {watched.length} {watched.length == 1 ? 'Movie' : 'Movies'}
                    </span>
                </div>
                {watched.length > 0 ? (<div className="movie-grid">
                    {watched.map((movie) => (
                        <MovieCard movie={movie} type="watched" key={movie.id} />
                    ))}
                </div>) :
                    (
                        <h2 className="no-movies">No movies in your list, add some!</h2>
                    )}
            </div>
        </div>
    );
};
