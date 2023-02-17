import callApi from "../callApi";
import { Movie } from "../../types";

const GET_MOVIE = `
query GetMovieQuery($id: Int!) {
    movieDetail(id: $id) {
   movie {
       id
      original_title
      original_language
      poster_path
      release_date
      vote_average
      overview
   }
    

}
}`;

type MovieDetail = {
  movieDetail: { movie: Movie };
};

const getMovieApi = async (id: number) =>
  callApi<MovieDetail>(GET_MOVIE, { id });

export default getMovieApi;
