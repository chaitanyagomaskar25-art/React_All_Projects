import React from "react";
import {Provider} from 'react-redux'
import { store } from "./Store/Store";
import Movies from "./component/Movies";
import AddMovies from "./component/AddMovies";
const App = () => {
  return (
    <Provider store={store}>
      <AddMovies />
      <Movies />
    </Provider>
  );
};

export default App;
