import { useNavigate } from "react-router-dom"
import Button from "../Base/Components/Button"
import IMovie from "../Interfaces/IMovie"

const MovieSearch = ({ id, primaryImage, releaseDate, releaseYear, titleText, titleType }: IMovie) => {
    const navigate = useNavigate()

    return (
        <div className="
                flex items-center gap-x-4 my-3 w-full
                bg-white
                dark:bg-gray-800
            "
        >
            {
                primaryImage
                ?   <img src={primaryImage.url}
                        alt={primaryImage.text}
                        className="h-20 w-20 object-cover"
                    />
                : <p>No image</p>
            }

            <div className="flex flex-col p-3">
                <p className="text-xl text-ellipsis overflow-hidden" title={titleText.text || ""}>
                    { titleText.text || "Sin título" }
                </p>
                <b className="my-3"><cite>{ releaseDate?.year || "" }</cite></b>
                <Button color="indigo" darkColor onClick={() => navigate(`/detail/${id}`)}>
                    See more
                </Button>
            </div>
        </div>
    )
}

export default MovieSearch