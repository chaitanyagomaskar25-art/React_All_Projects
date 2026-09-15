import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    {
      id: 1,
      title: "Godaan",
      image: "https://covers.openlibrary.org/b/title/Godaan-L.jpg",
    },
    {
      id: 2,
      title: "Gunahon Ka Devta",
      image:
        "https://covers.openlibrary.org/b/title/Gunahon%20Ka%20Devta-L.jpg",
    },
    {
      id: 3,
      title: "Raag Darbari",
      image: "https://covers.openlibrary.org/b/title/Raag%20Darbari-L.jpg",
    },
    {
      id: 4,
      title: "Nirmala",
      image: "https://covers.openlibrary.org/b/title/Nirmala-L.jpg",
    },
  ],
};

export const MovieSlice = createSlice({
  name: "Movie",

  initialState,

  reducers: {
    add: (state, action) => {
     const newId =
    state.movies.length > 0
      ? state.movies[state.movies.length - 1].id + 1
      : 1;

  state.movies.push({
    id: newId,
    title: action.payload.title,
    image: action.payload.image,
  }) },

    remove: (state, action) => {
        state.movies = state.movies.filter(m=> m.id !== action.payload)
    },
  },
});

export const { add, remove } = MovieSlice.actions;

export default MovieSlice.reducer;
