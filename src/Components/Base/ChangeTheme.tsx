import { useContext } from "react";
import { FaMoon, FaSun } from 'react-icons/fa'
import ThemeContext from "../../Contexts/ThemeContext";
import Button from "./Components/Button";

const ChangeTheme = () => {
    const { theme, setThemeMode } = useContext(ThemeContext);
    
    return (
        <div className="absolute right-5 bottom-5">
            <Button
                color={theme === "light" ? "zinc" : "orange"}
                darkColor={true}
                onClick={() => setThemeMode(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <FaSun /> : <FaMoon />}
            </Button>
        </div>
    )
}

export default ChangeTheme