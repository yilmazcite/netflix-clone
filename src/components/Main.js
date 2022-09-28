import React, { useState, useEffect } from "react";
import axios from "axios";

import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  console.log(movies);

  //get a random movie from the list each time
  const movie = movies[Math.floor(Math.random() * movies.length)];

  const movieImgUrl = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;
  const movieOverview = `${movie?.overview
    .split(" ")
    .slice(0, 25)
    .join(" ")}...`;

  return (
    <div className="w-full h-[34rem] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[34rem] bg-gradient-to-r from-black" />
        <img
          className="w-full h-full object-cover"
          alt={movie?.title}
          src={movieImgUrl}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h2 className="font-bold text-white text-2xl md:text-5xl">
            {movie?.title}
          </h2>
          <div className="my-4">
            <button className="border text-black mr-4 py-2 px-5 bg-gray-300 border-gray-300">
              Play
            </button>
            <button className="border text-white py-2 px-5  border-gray-300">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] ">
            {movieOverview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
