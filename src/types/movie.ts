export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
  english_name: string;
}

export interface CastMember {
  id: number;
  name: string;
}

export interface CrewMember {
  id: number;
  name: string;
  job: string;
}

export interface MovieCredits {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}

export interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

export interface MovieDetail extends Movie {
  backdrop_path: string;
  genres: Genre[];
  runtime: number;
  tagline: string;
  original_language: string;
  production_countries: ProductionCountry[];
  spoken_languages: SpokenLanguage[];
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
  dates?: {
    maximum: string;
    minimum: string;
  };
}

export interface ErrorResponse {
  success: boolean;
  status_code: number;
  status_message: string;
}

export type MovieType = "now_playing" | 'top_related' | 'search'
