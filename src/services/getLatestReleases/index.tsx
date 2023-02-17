import callApi from "../callApi";
import { Movie } from "../../types";

const GET_LATEST = `
{
  nowPlayingMovies {
      movies { 
      id
      original_title
      original_language
      poster_path
      release_date
      vote_average
    
  }
 }
}`;

// genres {
//   id
//   name
// }

type GetLatestMovies = {
  nowPlayingMovies: { movies: Movie[] };
};

const getLatestReleases = async () => callApi<GetLatestMovies>(GET_LATEST, {});

export default getLatestReleases;
