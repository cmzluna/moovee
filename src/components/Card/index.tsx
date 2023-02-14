import React from "react";
import { Movie } from "../Collection";

export default function Card({
  id,
  original_title,
  original_language,
  poster_path,
  release_date,
  vote_average,
}: Movie) {
  const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/original";

  const testImage = `${TMDB_IMAGE_ENDPOINT}/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg`;

  const handleClick = () => {
    console.log("clicked!");
  };

  return (
    <div
      className="card-hover-animation mb-4 grow basis-1/5 2xs:w-[130px] xs:w-full cursor-pointer"
      onClick={handleClick}
    >
      this is a movie card
    </div>
  );
}
