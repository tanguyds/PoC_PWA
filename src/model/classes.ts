export class Genre {
  id: number;
  name: string;
}

export class Movie {
  id: number;
  title: string;
  release_date: Date;
  vote_average: number;
  poster_path: string;
  homepage: string;
  tagline: string;
  genres: Genre[];
  overview: string;
  adult: boolean;
  backdrop_path: string;
  video: boolean;
  original_language: string;
}

export class Actor {
  id: number;
  profile_path: string;
  name: string;
  place_of_birth: string;
  birthday: Date;
  popularity: number;
}

export class Review {
  author: Actor;
  content: string;
  url: string;
}

export class Video {
  url: string;
  name: string;
}

export class Serie {
  poster_path: string;
  homepage: string;
  name: string;
  vote_average: number;
  status: string;
  last_air_date: string;
  number_of_seasons: string;
  number_of_episodes: string;
  production_companies: Company[];
  overview: string;
  seasons: Season[];
  genres: Genre[];
  first_air_date: string;
  title: string;
  id:number;
}

export class Company {
  name: string
}

export class Season {
  air_date: Date;
  season_number: number;
  episode_count: number;
  poster_path: string;
}

export class Genres {
  genre: Genre[];
}
