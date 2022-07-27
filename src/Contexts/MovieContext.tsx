import { createContext, ReactNode, useEffect, useState } from "react";

import axios from "axios";
import IMovie from "../Components/Interfaces/IMovie";

interface MovieProps {
    getMoviesByTitle: (title: string) => Promise<IMovie[]>
    getMovieById: (id: string) => Promise<IMovie[]>
}

const MovieContext = createContext<MovieProps>({
    getMoviesByTitle: async () => [],
    getMovieById: async () => []
})

export default MovieContext

const URL_BASE = "https://moviesdatabase.p.rapidapi.com/titles/search"

export const MovieProvider = ({ children }: { children: ReactNode }) => {
    const getMoviesByTitle = async (title: string) => {
        const { data } = await axios.get(`${URL_BASE}/title/${title}`,{
            headers: {
                'X-RapidAPI-Key': "c743f92b29mshfb03a9bff5bafd2p15d521jsnace7ed36542b",
                'X-RapidAPI-Host': "moviesdatabase.p.rapidapi.com"
            }
        })

        return data.results
    }
    const getMovieById = async (id: string) => {
        const { data } = await axios.get(`${URL_BASE}/titles/x/titles-by-ids`, {
            headers: {
                'X-RapidAPI-Key': "c743f92b29mshfb03a9bff5bafd2p15d521jsnace7ed36542b",
                'X-RapidAPI-Host': "moviesdatabase.p.rapidapi.com"
            },
            params: { 'idsList[0]': id }
        })

        console.log(data);

        return data.results
    }

    return (
        <MovieContext.Provider value={{ getMoviesByTitle, getMovieById }}>
            {children}
        </MovieContext.Provider>
    )
}