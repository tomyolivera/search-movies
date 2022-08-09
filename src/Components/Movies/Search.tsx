import { ChangeEvent, useState } from "react"
import Button from "../Base/Components/Button"

interface Props {
    title?: string
    placeholder?: string
    handleSubmit: (search: string) => Promise<void>
}

const Search = ({ title, placeholder, handleSubmit }: Props) => {
    const [search, setSearch] = useState("")

    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setSearch(target.value)
    }

    const handleClear = () => setSearch("")

    return (
        <div className="w-full p-3">
            <h1 className="text-3xl dark:text-gray-200">
                {title || "Search"}
            </h1>

            <div className="flex flex-col">
                <input
                    className="
                    bg-gray-200 hover:bg-gray-300 focus:bg-gray-300
                    dark:bg-gray-500 dark:text-gray-200
                    dark:placeholder-gray-100
                    px-2 py-1 my-3 rounded-md w-full
                    focus:outline-2 outline-blue-500
                    dark:outline-none"
                    value={search}
                    placeholder={placeholder || "Search"}
                    onChange={handleInputChange} />

                <div className="flex justify-between">
                    <button
                        className="px-4 py-2
                        bg-blue-400 hover:bg-blue-500
                        disabled:bg-blue-300
                        dark:bg-blue-600 dark:hover:bg-blue-700
                        text-white
                        w-2/3 rounded-md"
                        onClick={() => handleSubmit(search)}>Search</button>
                    <Button color="red" onClick={handleClear}>Clear</Button>
                </div>
            </div>
        </div>
    )
}

export default Search