import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getMovieApi from "../../services/getMovie";
import { Movie } from "../../types";

const MovieDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const movieId = id && parseInt(id);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const baseImageURL = "https://image.tmdb.org/t/p/w300";
  const posterImageURL = `https://image.tmdb.org/t/p/original${selectedMovie?.poster_path}`;

  const addToFavorite = () => {
    console.log("clicked add to favorites");
  };

  useEffect(() => {
    const getMovie = async (id: number) => {
      const data = await getMovieApi(id);

      return data;
    };

    if (movieId) {
      getMovie(movieId)
        .then((res) => {
          const movie = res?.data.movieDetail.movie;
          console.log("fetched movie =>  ", movie);

          if (movie) setSelectedMovie(movie);
        })
        .catch((err) => err);
    }
  }, [id]);

  return (
    <div
      className="  h-full w-full  bg-red-800 top-32 lg:top-20 left-16 lg:left-32 right-16 rounded-lg"
      style={{
        border: "2px solid #444",
      }}
    >
      <header
        style={{ backgroundImage: `url(${posterImageURL}) ` }}
        className={`   border-gray-800 border-1 bg-center h-full bg-cover rounded-lg bg-[radial-gradient(circle_at_20%_50%,rgba(30,39,44,0.9)_0%,rgba(30,39,44,0.8)_100%)]`}
      >
        <div className=" w-full mx-auto ">
          <div className="flex flex-wrap ">
            <div className="border-red-200  h-80  border-2 w-full   relative md:basis-1/3 md:max-w-md">
              <img
                src={`${baseImageURL}/${selectedMovie?.poster_path}`}
                alt=""
                className="block mx-auto w-full h-full object-cover object-top"
              />
              <button
                className="bg-gray-400 rounded-md m-4 p-4"
                onClick={addToFavorite}
              >
                Add to favorite
              </button>
            </div>

            <div className="   bg-gray-600 h-full relative w-full md:max-w-md md:basis-2/3 lg:max-w-2xl px-2 mx-auto xl:max-w-4xl">
              <div className="content ">
                <h2 className="text-5xl">{selectedMovie?.original_title}</h2>
                <p>{selectedMovie?.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MovieDetail;
