import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieContext from "../../Contexts/MovieContext";
import IMovie from "../Interfaces/IMovie";

const MovieDetail = () => {
    const { id } = useParams();
    const { getMovieById } = useContext(MovieContext);
    const [movie, setMovie] = useState<IMovie>()

    useEffect(() => {
        (async () => {
            setMovie(await getMovieById(id || "") as any)
        })()
    }, [id])

    return (
        <div className="dark:text-gray-200">
            <p className="text-2xl">
                { movie?.titleText?.text }
            </p>
        </div>
    )
}

export default MovieDetail