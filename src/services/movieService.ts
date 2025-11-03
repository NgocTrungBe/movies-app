import type { MovieResponse, ErrorResponse } from "../types/movie";

const API_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

const handleResponse = async (response: Response) => {
  const data = await response.json();
  if (!response.ok) {
    return {
      ...data,
      status_message: data.status_message || "Something went wrong!",
    } as ErrorResponse;
  }
  return data;
};

export const fetchNowPlayingMovies = async (
  page = 1
): Promise<MovieResponse> => {
  const url = `${BASE_URL}/movie/now_playing?language=en-US&page=${page}`;
  return handleResponse(await fetch(url, options));
};

export const fetchTopRatedMovies = async (page = 1): Promise<MovieResponse> => {
  const url = `${BASE_URL}/movie/top_rated?language=en-US&page=${page}`;
  return handleResponse(await fetch(url, options));
};

export const fetchMovieDetails = async (id: number): Promise<MovieResponse> => {
  const url = `${BASE_URL}/movie/${id}?language=en-US`;
  return handleResponse(await fetch(url, options));
};

export const fetchMovieCredits = async (id: number): Promise<MovieResponse> => {
  const url = `${BASE_URL}/movie/${id}/credits?language=en-US`;
  return handleResponse(await fetch(url, options));
};

export const searchMovies = async (
  query: string,
  page = 1
): Promise<MovieResponse> => {
  const url = `${BASE_URL}/search/movie?language=en-US&query=${encodeURIComponent(
    query
  )}&page=${page}`;
  return handleResponse(await fetch(url));
};
