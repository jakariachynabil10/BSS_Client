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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-10 mt-5">
      {players.map((player) => {
        const { name, img, Device, GameId, JoinedClubDate, dateOfBirth } = player;
        return (
          // eslint-disable-next-line react/jsx-key
          <>
            <div className="card w bg-base-100 shadow-xl">
              <figure>
                <img
                  src={img}
                  className="h-[270px]"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {name}
                  <div className="badge badge-secondary">Player</div>
                </h2>
                <p>Date Of Birth : {dateOfBirth}</p>
                <p>Joined Club Date : {JoinedClubDate}</p>
                <p>Game ID : {GameId}</p>
                <p>Device : {Device}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default AllPlayers;
