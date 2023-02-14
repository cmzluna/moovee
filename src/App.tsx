import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Movie } from "./types";
import getLatestReleases from "./services/getLatestReleases";

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
        console.log("latest releases ", res?.data.nowPlayingMovies.movies);
      })
      .catch((err) => err);

    //  setLatestReleases(movies);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Collection data={data} title={} isLatestReleases /> */}
      </header>
    </div>
  );
}

export default App;
