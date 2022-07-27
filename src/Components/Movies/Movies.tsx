import Search from "./Search"
import MoviesImg from '../../assets/movies1.jpg'
import { useNavigate } from "react-router-dom"

const Movies = () => {
    const navigate = useNavigate()

    const handleSubmitSearch = async (search: string) => {
        if(!search) return
        navigate(`/search/${search.trim()}`)
    }

    return (
        <div className="flex flex-col md:flex-row h-screen overflow-hidden">
            <div className="w-full md:w-2/5">
                <img src={MoviesImg} className="w-full h-80 md:w-full md:h-full object-cover" />
            </div>

            <div className="w-full md:w-3/5 md:flex md:items-center">
                <Search title="Search for movies..."
                        placeholder="Title"
                        handleSubmit={handleSubmitSearch} />
            </div>
        </div>
    )
}

export default Movies