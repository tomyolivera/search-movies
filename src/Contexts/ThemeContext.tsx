import { createContext, useEffect, useState } from "react";

export type TTheme = "dark" | "light" | "so"

interface ThemeProps {
    theme?: TTheme
    setThemeMode: (theme: TTheme) => void
}

const ThemeContext = createContext<ThemeProps>({
    theme: "so",
    setThemeMode: () => {}
})

export default ThemeContext

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<TTheme>(localStorage.getItem("theme") as TTheme || "light")

    useEffect(() => {
        setThemeMode(theme)
    }, [])

    const setDark = () => {
        document.body.classList.add("bg-gray-900");
        document.documentElement.classList.add('dark')
        localStorage.setItem("theme", "dark")
        setTheme("dark")
    }
    
    const setLight = () => {
        document.body.classList.remove("bg-gray-900");
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme", "light")
        setTheme("light")
    }
    
    const setThemeMode = (theme: TTheme) => {
        if(theme === "dark") setDark()
        else setLight()
        
        return localStorage.setItem("theme", theme)
    }

    return (
        <ThemeContext.Provider value={{ theme, setThemeMode }}>
            {children}
        </ThemeContext.Provider>
    )
}