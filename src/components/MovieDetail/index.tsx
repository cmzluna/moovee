import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getMovieApi from "../../services/getMovie";
import { Movie } from "../../types";

const MovieDetail = () => {
  const { id } = useParams();
  const movieId = id && parseInt(id);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const baseImageURL = "https://image.tmdb.org/t/p/w300";

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
      className="modal h-3/4 absolute bg-grey-800 top-32 lg:top-20 left-16 lg:left-32 right-16 rounded-lg"
      style={{
        border: "2px solid #444",
      }}
    >
      <header className=" border-gray-800 border-1 bg-center h-full bg-cover rounded-lg bg-[radial-gradient(circle_at_20%_50%,rgba(30,39,44,0.9)_0%,rgba(30,39,44,0.8)_100%),url('https://image.tmdb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg')]">
        <div className=" w-full mx-auto ">
          <div className="flex flex-wrap ">
            <div className="border-red-200  h-80  border-2 w-full   relative md:basis-1/3 md:max-w-md">
              <img
                src="https://image.tmdb.org/t/p/w300/sv1xJUazXeYqALzczSZ3O6nkH75.jpg"
                alt=""
                className="block mx-auto w-full h-full object-cover object-top"
              />
            </div>

            <div className="   bg-gray-600 h-full relative w-full md:max-w-md md:basis-2/3 lg:max-w-2xl px-2 mx-auto xl:max-w-4xl">
              <div className="content ">
                <h2 className="text-5xl">titulo</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae ratione perferendis iure reprehenderit eius obcaecati
                  tenetur earum pariatur est iusto consequatur quae, illum
                  repudiandae consequuntur qui cumque exercitationem tempora
                  maiores.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                  explicabo quae natus nihil repudiandae quaerat maiores eum
                  eligendi excepturi asperiores eveniet aliquam possimus minima
                  veniam repellendus placeat, vero aperiam laborum!
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                  explicabo quae natus nihil repudiandae quaerat maiores eum
                  eligendi excepturi asperiores eveniet aliquam possimus minima
                  veniam repellendus placeat, vero aperiam laborum!
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MovieDetail;
