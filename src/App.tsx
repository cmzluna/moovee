import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const axiosGitHubGraphQL = axios.create({
    baseURL: "http://localhost:3000/graphql",
    headers: {
      Authorization: `bearer ${process.env.TMDB_API_KEY}`,
    },
  });
  // https://movieql.netlify.app/graphql
  const GET_LATEST = `
  {
    topRatedShows {
     shows {
       name
       original_name
       original_language
       overview
       poster_path
     }
   }
   }
`;

  const getLatestReleases = () => {
    axiosGitHubGraphQL
      .post("", { query: GET_LATEST })
      .then((result) => console.log(" DATA ==> ", result.data))
      .catch((err) => console.log("ERR ==> ", err));
  };

  useEffect(() => {
    console.log("****");
    getLatestReleases();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-4xl font-bold underline">Hello world!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-4xl font-bold underline">Hello world!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-4xl font-bold underline">Hello world!</h1>
      </header>
    </div>
  );
}

export default App;
