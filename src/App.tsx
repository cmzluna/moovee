import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Movie } from "./types";
import getLatestReleases from "./services/getLatestReleases";
import Collection from "./components/Collection";

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  const [latestReleases, setLatestReleases] = useState<Movie[]>([]);

  const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/original";

  const testImage = `${TMDB_IMAGE_ENDPOINT}/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg`;

  // https://movieql.netlify.app/graphql

  // {
  //   topRatedShows {
  //    shows {
  //      name
  //      original_name
  //      original_language
  //      overview
  //      poster_path
  //    }
  //  }
  //  }

  useEffect(() => {
    const getData = async () => {
      const data = await getLatestReleases();

      return data;
    };

    getData()
      .then((res) => {
        const moviesArray = res?.data.nowPlayingMovies.movies;
        console.log("latest releases ", moviesArray);

        if (moviesArray) setLatestReleases(moviesArray);
      })
      .catch((err) => err);
  }, []);

  return (
    <div className="App">
      <Collection
        data={latestReleases}
        title={"hellou"}
        isLatestReleases={false}
      />
    </div>
  );
}

export default App;
