import React from "react";
import Card from "../Card";
import Heading from "../Heading";
import Loading from "../Loading";
import { Movie } from "../../types";

type Props = {
  data: Movie[];
  title: string;
  type?: string;
  isLatestReleases?: boolean;
  // hasSelector: boolean;
};

export default function Collection({
  data,
  title,
  type = "movie",
  isLatestReleases,
}: Props) {
  const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/w300";
  const baseImageURL = "https://image.tmdb.org/t/p/w300";
  const testImage = `${TMDB_IMAGE_ENDPOINT}/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg`;

  console.log("EN COLLECTION");
  return (
    <>
      <section className="border-2 border-solid border-red-300 mb-6 md:mb-10">
        <Heading title={title} media_type={type} />
        <section
          className={
            isLatestReleases
              ? "h-scroll relative flex gap-x-4 overflow-x-scroll sm:gap-x-10 2xs:mt-2"
              : "card-list-wrapper"
          }
        >
          {data &&
            data.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                poster_path={item.poster_path}
                original_title={item.original_title}
                original_language={item.original_language}
                release_date={item.release_date}
                vote_average={item.vote_average}
                genres={item.genres}
              />
            ))}
        </section>
      </section>

      <Loading />
    </>
  );
}
