/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("https://bss-backend.vercel.app/allPlayers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlayers(data);
      });
  }, []);
  return (
    <div>
      <h1>All pLayers</h1>
    </div>
  );
};

export default AllPlayers;
