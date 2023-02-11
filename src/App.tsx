import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const axiosGitHubGraphQL = axios.create({
    baseURL: "https://movieql.netlify.app/graphql",
    headers: {
      Authorization: `bearer ${process.env.TMDB_API_KEY}`,
    },
  });

  const GET_LATEST = `
  {
 
    nowPlayingMovies {
        title
 
  }
  }
`;

  const getLatestReleases = () => {
    console.log("**** adentro");
    axiosGitHubGraphQL
      .post("", { query: GET_LATEST })
      .then((result) => console.log("*** listado *", result))
      .catch((err) => console.log("**** err", err));
  };

  useEffect(() => {
    console.log("****");
    getLatestReleases();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
