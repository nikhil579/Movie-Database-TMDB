import React, { useState } from 'react'
import { Card } from './Card';

export const Add = () => {

    // SEARCH QUERY
    const [Query, setQuery] = useState("")
    const [Results, setResults] = useState([]);

    const onChange = e => {
        e.preventDefault();

        setQuery(e.target.value);

        if (e.target.value.length > 0) {
            fetch(`
            https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
                .then((res) => res.json())
                .then((data) => {
                    if (!data.errors) {
                        setResults(data.results);
                    }
                    else {
                        setResults([]);
                    }
                })
                .catch(error => {
                    console.log('Error fetching and parsing data', error);
                });
        }
    }

    // RENDER
    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" placeholder='Search for a movie' value={Query} onChange={onChange} />
                    </div>

                    {Results.length > 0 && (
                        <ul className="results">
                            {Results.map((movie) => (
                                <li key={movie.id}>
                                    <Card movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}
