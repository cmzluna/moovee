import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Movie } from "../../types";

export default function Card({
  id,
  original_title,
  original_language,
  poster_path,
  release_date,
  vote_average,
  genres,
}: Movie) {
  const location = useLocation();
  const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/w300";

  const testImage = `${TMDB_IMAGE_ENDPOINT}/${poster_path}`;

  const handleClick = () => {
    //  console.log("location en Card ", location);
  };

  return (
    <Link key={id} to={`/movie/${id}`} state={{ backgroundLocation: location }}>
      <div
        className="relative  hover:animate-pulse bg-blue-900 card-hover-animation mb-4 rounded-md overflow-hidden cursor-pointer"
        onClick={handleClick}
      >
        <span className="absolute top-2 right-2">{vote_average}</span>
        <img
          src={testImage}
          alt="stew"
          className="h-[140px] md:h-[200px] lg:h-[240px] w-full object-cover object-center"
        />
        <div className="m-4">
          <span className="font-bold">{original_title}</span>
          <span className="block text-gray-500 text-sm">
            {original_language}
          </span>
          <span className="block text-gray-500 text-sm">
            {genres &&
              genres.map((genre) => <p key={genre.id}>{genre.name}</p>)}
          </span>
          <span className="block text-gray-500 text-sm">{release_date}</span>
        </div>
      </div>
    </Link>
  );
}
