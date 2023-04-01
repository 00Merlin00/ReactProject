import React, { useEffect } from "react";
import MovieListing from "../movieListing/MovieListing";
import MovieApi from "../../common/apis/MovieApi";
import { ApiKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";

import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const movieText = "fanny";
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apiKey=${ApiKey}&s=${movieText}&type=movie `
      ).catch((err) => {
        console.log("Err:", err);
      });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
