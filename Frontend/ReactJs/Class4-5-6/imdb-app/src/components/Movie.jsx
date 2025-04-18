import { useContext } from "react";
import { WatchListContext } from "../assets/contexts/watchlistContext";

const Movie = ({movie }) => {
    const WatchListContextData = useContext(WatchListContext);
    const {watchlist, setWatchlist} = WatchListContextData;
    const handleWatchListBtnClick = () => {
        setWatchlist({...watchlist, [movie.id]: movie});
    }
    return (
        <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <button onClick={handleWatchListBtnClick}>{watchlist[movie.id] ? '-' : '+'}  Watchlist</button>
            </div>
        </div>
    )
}

export default Movie;