/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResultSubmit from "../Submit/ResultSubmit";

const Home = () => {
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
            <th>GD</th>
            <th>PTS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping through players array and rendering each player */}
          {players.map((player, index) => {
            const {
              name,
              dateOfBirth,
              img,
              _id,
              PTS,
              PL,
              winCounter,
              drawCounter,
              loseCounter,
              GoalDifference,
              GoalsAgainst,
              role,
            } = player;
            const isAdmin = role === "admin";
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
                      </Link>{" "}
                      {/* Use player's name */}
                      <div className="text-sm opacity-50">
                        Date of Birth: {dateOfBirth}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{PL || 0}</td>
                <td>{winCounter || 0}</td>
                <th>{drawCounter || 0}</th>
                <th>{loseCounter || 0}</th>
                <th>{GoalsAgainst || 0}</th>
                <th>{GoalDifference || 0}</th>
                <th>{PTS || 0}</th>
                <Link to={`/singlePlayer/${_id}`}>
                  <button className="btn btn-primary">Submit</button>
                </Link>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
