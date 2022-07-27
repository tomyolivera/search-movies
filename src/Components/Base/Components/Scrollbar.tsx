import { TColor } from "../../../Types/TColor"

interface Props {
    children: React.ReactNode
    color?: TColor
}

const Scrollbar = ({ children, color }: Props) => {
    return (
        <div
            className="
                overflow-auto scrollbar-thin pr-5
                dark:scrollbar-thumb-gray-300 dark:scrollbar-track-gray-600
            "
        >
            { children }
        </div>
    )
}

export default Scrollbar