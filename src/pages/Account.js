import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  const imgSrc =
    "https://media-assets-05.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-10557-netflixa--default--1280.jpg";

  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src={imgSrc}
          alt="background"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]" />
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
