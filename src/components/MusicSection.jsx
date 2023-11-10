// import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../Redux/actions";
import AlbumCard from "./AlbumCard";
import { useEffect } from "react";

const MusicSection = ({ artistName, section }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state[section]);

  useEffect(() => {
    dispatch(fetchSongs(artistName, section, 4));
    console.log("provo nello useEffect");
  }, []);

  return (
    <div className="row">
      {songs.map((song) => (
        <AlbumCard key={song.id} song={song} />
      ))}
    </div>
  );
};

export default MusicSection;
