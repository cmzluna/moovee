import axios from "axios";
import { Movie } from "../../types";

const GET_LATEST = `
  {
   query nowPlayingMovies {
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

type GetLatestMovies = {
  movies: Movie[];
};

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/graphql",
  headers: {
    Authorization: `bearer ${process.env.TMDB_API_KEY}`,
  },
});

const getLatestReleases = async (query: string, variables: object) => {
  try {
    const { data } = await axiosInstance.post<GetLatestMovies>("", {
      query,
      variables,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      return Promise.reject(error.response.data);
    }
  }
};

export default getLatestReleases;
