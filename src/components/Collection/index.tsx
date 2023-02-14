import React from "react";
import Card from "../Card";
import Heading from "../Heading";
import Loading from "../Loading";

export type Movie = {
  id: string;
  original_title: string;
  original_language: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
};

type Props = {
  data: Movie[];
  title: string;
  type: string;
  isLatestReleases: boolean;
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
};

export default function Collection({
  data,
  title,
  type = "movie",
  isLatestReleases,
}: Props) {
  const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/original";

  const testImage = `${TMDB_IMAGE_ENDPOINT}/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg`;

  return (
    <>
      (
      <section className={"mb-6 md:mb-10"}>
        <Heading title={title} media_type={type} />
        <section
          className={
            isLatestReleases
              ? "h-scroll relative flex gap-x-4 overflow-x-scroll sm:gap-x-10 2xs:mt-2"
              : "card-collection-wrapper"
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
              />
            ))}
        </section>
      </section>
      ) : (
      <Loading />
    </>
  );
}
