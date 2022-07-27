import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieContext from "../../Contexts/MovieContext";
import IMovie from "../Interfaces/IMovie";
import MovieSearch from "./MovieSearch";

import MoviesImg from '../../assets/movies1.jpg'
import Scrollbar from "../Base/Components/Scrollbar";

const MoviesSearch = () => {
    const { title } = useParams();
    const { getMoviesByTitle } = useContext(MovieContext);
    const [movies, setMovies] = useState<IMovie[]>([])

    useEffect(() => {
        (async () => {
            setMovies(await getMoviesByTitle(title || ""))
        })()
    }, [title])

    return (
        <div className="flex h-screen">
            <div className="flex flex-col w-full md:w-3/5 p-3">
                <h1 className="text-3xl mb-5">Movies Founded</h1>
                <Scrollbar>
                    {
                        movies
                            ? movies.map(({id, primaryImage, releaseDate, releaseYear, titleText, titleType}) => (
                                <MovieSearch 
                                    key={id}
                                    id={id}
                                    primaryImage={primaryImage}
                                    releaseDate={releaseDate}
                                    releaseYear={releaseYear}
                                    titleText={titleText}
                                    titleType={titleType}
                                />
                            ))
                            : <h1>No movies founded</h1>
                    }
                </Scrollbar>
            </div>

            <img src={MoviesImg} className="hidden sm:block h-full w-2/5 object-cover" />
        </div>
    )
}

export default MoviesSearch