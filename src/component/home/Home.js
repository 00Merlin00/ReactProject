import React, { useEffect } from "react";
import MovieListing from "../movieListing/MovieListing";
import MovieApi from "../../common/apis/MovieApi";
import { ApiKey } from "../../common/apis/MovieApiKey";

const Home = () => {
  useEffect(() => {
    const movieText = "fanny";
    const fetchMovies = async () => {
      const responce = await MovieApi.get(
        `?apiKey = ${ApiKey}&s=${movieText} & type=movie `
      ).catch((err) => {
        console.log("Err:", err);
      });
      console.log("The responce from API : ", responce);
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
