/* eslint-disable react/no-unescaped-entities */
// import React from 'react';

import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeLikedSong, setLikedSongs, setPlaying } from "../Redux/actions";
import { SuitHeartFill } from "react-bootstrap-icons";
// import heart from "../assets/Heart Icon.png"

const AlbumCard = ({ song }) => {
  const selectedSong = useSelector((state) => state.playing);
  const likedSongs = useSelector((state) => state.liked);
  const dispatch = useDispatch();
  const isLiked = likedSongs.some((liked) => liked.id === song.id);
  const handleClick = function () {
    if (selectedSong === song) {
      return;
    } else {
      dispatch(setPlaying(song));
    }
  };

  const setLike = function () {
    console.log("isLiked:", isLiked);
    if (isLiked) {
      dispatch(removeLikedSong(song));
    } else {
      dispatch(setLikedSongs(song));
    }
  };

  return (
    <Col className="text-center pt-1">
      <div
        className="img-container position-relative mx-auto"
        style={{ width: "200px" }}
      >
        <img
          className="img-fluid"
          src={song.album.cover_medium}
          alt="track"
          onClick={() => handleClick()}
          role="button"
        />
        {!isLiked ? (
          <svg
            className="position-absolute end-0"
            onClick={() => setLike()}
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_64_199)">
              <path
                d="M5.47038 13.2069L12.9804 20.4485L20.4903 13.2069C21.7938 12.2255 22.6358 10.6695 22.6358 8.91558C22.6358 5.95475 20.2325 3.55151 17.2717 3.55151C15.5178 3.55151 13.9565 4.39926 12.9804 5.70274C12.0042 4.39926 10.4429 3.55151 8.68902 3.55151C5.72818 3.55151 3.32495 5.95475 3.32495 8.91558C3.32495 10.6695 4.1669 12.2255 5.47038 13.2069ZM8.68902 5.4826C9.77815 5.4826 10.7789 5.98468 11.4345 6.85994L12.9804 8.92379L14.5262 6.85994C15.1818 5.98468 16.1826 5.4826 17.2717 5.4826C19.1647 5.4826 20.7047 7.02263 20.7047 8.91558C20.7047 10.0037 20.2031 11.0055 19.3283 11.6645L19.2342 11.7354L19.1492 11.817L12.9804 17.7657L6.81104 11.817L6.72607 11.7354L6.63193 11.6645C5.75763 11.0055 5.25603 10.0037 5.25603 8.91558C5.25603 7.02263 6.79607 5.4826 8.68902 5.4826Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_64_199">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.980469)"
                />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <SuitHeartFill
            color="green"
            size={24}
            className="position-absolute end-0"
            onClick={() => setLike()}
          />
        )}
      </div>
      <p>
        Track: "
        {song.title.length < 16
          ? song.title
          : `${song.title.substring(0, 16)}...`}
        "
        <br />
        Artist: {song.artist.name}
      </p>
    </Col>
  );
};

export default AlbumCard;
