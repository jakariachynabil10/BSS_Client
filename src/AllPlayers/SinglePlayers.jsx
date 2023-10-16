/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import History from '../HistoryMatch/History';
import Fixture from '../Fixture/Fixture';

const SinglePlayers = () => {
    const data = useLoaderData()
    console.log(data)
    const {
        name,
        _id,
        Device,
        GameId,
        img,
        dateOfBirth,
        JoinedClubDate
    } = data
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

          <div className='mb-10'>
            <History/>
          </div>
          <div>
            <Fixture/>
          </div>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-blue-800 bg-opacity-80 text-white text-base-content">
            {/* Sidebar content here */}
            <div className="student-profile">
              <img
                src={img}
                alt="Player"
                className="rounded-full p-5"
              />
              <h1 className="font-bold text-3xl pb-3">{name}</h1>
              <hr />
              <div className="font-medium pt-3 ">
                <p>Player UID : {GameId}</p>
              </div>
            </div>
          </ul>
        
        </div>
      </div>
    );
};

export default SinglePlayers;