import {configureStore} from '@reduxjs/toolkit'
import  movieSlice  from './MovieSlice'

export const store = configureStore({
    reducer: {
        movies: movieSlice
    }
});