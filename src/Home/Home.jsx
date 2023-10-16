/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allPlayers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlayers(data);
      });
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table table-pin-rows">
        {/* head */}
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>PL</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GA</th>
            <th>GF</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping through players array and rendering each player */}
          {players.map((player, index) => {
            const { name, dateOfBirth, img, _id } = player;
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={img} // Use the image from the player data
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                     <Link to={`/allPlayer/${_id}`}>
                     <div className="font-bold">{name}</div>
                     </Link> {/* Use player's name */}
                      <div className="text-sm opacity-50">Date of Birth: {dateOfBirth}</div>
                    </div>
                  </div>
                </td>
                <td>
                  0
                </td>
                <td>0</td>
                <th>
                 0
                </th>
                <th>
                 0
                </th>
                <th>
                 0
                </th>
                <th>
                 0
                </th>
                <th>
                 0
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
