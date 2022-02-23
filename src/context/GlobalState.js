import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
// INITIAL STATE
const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
}

// CREATE CONTEXT
export const GlobalContext = createContext(initialState);

// PROVIDER COMPONENTS
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // STORE DATA
    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
        localStorage.setItem('watched', JSON.stringify(state.watched))
    }, [state])

    // ACTIONS
    const addMovieToWatchlist = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    }

    const removeMovieFromWatchlist = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
    }

    const addMovieToWatched = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
    }

    const moveMovieToWatchlist = (movie) => {
        dispatch({ type: "MOVE_MOVIE_TO_WATCHLIST", payload: movie });
    }
    const removeMovieFromWatched = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
    }
    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            watched: state.watched,
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            addMovieToWatched,
            moveMovieToWatchlist,
            removeMovieFromWatched,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}