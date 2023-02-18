export type Genre = {
  id: number!;
  name: string!;
};

export interface Movie {
  id: string;
  original_title: string;
  original_language: string;
  poster_path: string;
  release_date: string;
  overview?: string;
  vote_average: number;
  genres: Genre[]!;
}
