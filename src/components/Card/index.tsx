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
      className="bg-blue-900 card-hover-animation mb-4  cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative w-full rounded-lg">
        <div className="relative h-[133px] md:h-[140px] lg:h-[174px]">
          {/* <Image
          className='rounded-lg'
          src={src}
          alt={alt}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(240, 140)
          )}`}
          unoptimized
        /> */}
        </div>
      </div>
    </div>
  );
}
