import { BrowserRouter, Route, Routes } from "react-router-dom"
import MovieDetail from "../Components/Movies/MovieDetail"
import Movies from "../Components/Movies/Movies"
import MoviesSearch from "../Components/Movies/MoviesSearch"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/detail/:id" element={<MovieDetail />} />
                <Route path="/search/:title" element={<MoviesSearch />} />
                <Route path="*" element={<h1>Error</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter