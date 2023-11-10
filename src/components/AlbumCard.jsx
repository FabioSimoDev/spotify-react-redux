/* eslint-disable react/no-unescaped-entities */
// import React from 'react';

const AlbumCard = ({ song }) => (
  <div className="col text-center">
    <img className="img-fluid" src={song.album.cover_medium} alt="track" />
    <p>
      Track: "
      {song.title.length < 16
        ? song.title
        : `${song.title.substring(0, 16)}...`}
      "
      <br />
      Artist: {song.artist.name}
    </p>
  </div>
);

export default AlbumCard;
