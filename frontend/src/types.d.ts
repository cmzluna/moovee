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

export interface User {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  username: string;
}

export interface State {
  user: null | User;
  favorites: null | Movie[];
}
