import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Movie } from "./types";
import getLatestReleases from "./services/getLatestReleases";
import Collection from "./components/Collection";
import Search from "./components/Search";
import MovieDetail from "./components/MovieDetail";
import Modal from "./components/Modal";
import getAllGenres from "./services/getAllGenres";
import { Genre } from "./types";

function App() {
  const [latestReleases, setLatestReleases] = useState<Movie[]>([]);
  const [genresList, setGenresList] = useState<Genre[]>([]);

  // SECCION CATEGORIAS
  // mostrar

  useEffect(() => {
    const getData = async () => {
      const data = await getLatestReleases();

      return data;
    };

    const genresList = async () => {
      const data = await getAllGenres<Genre>();

      return data;
    };

    genresList()
      .then((data) => {
        const genres = data?.genres;
        if (genres) setGenresList(genres);
      })
      .catch((err) => err);

    getData()
      .then((res) => {
        const moviesArray = res?.data.nowPlayingMovies.movies;

        if (moviesArray) setLatestReleases(moviesArray);
      })
      .catch((err) => err);
  }, []);

  const location = useLocation();

  const state = location.state as { backgroundLocation?: Location };

  return (
    <div className="App">
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/search" element={<Search />} />

        <Route
          path="/"
          element={
            <Collection
              data={latestReleases}
              title={"Latest Releases"}
              isLatestReleases={false}
            />
          }
        />
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route
            path="/movie/:id"
            element={
              <Modal>
                <MovieDetail />
              </Modal>
            }
          />
          )
        </Routes>
      )}
    </div>
  );
}

export default App;
