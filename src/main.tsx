import ReactDOM from 'react-dom/client'
import App from './App'
import { MovieProvider } from './Contexts/MovieContext'
import { ThemeProvider } from "./Contexts/ThemeContext"
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider>
        <MovieProvider>
            <App />
        </MovieProvider>
    </ThemeProvider>
)