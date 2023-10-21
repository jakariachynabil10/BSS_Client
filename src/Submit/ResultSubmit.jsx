// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const ResultSubmit = () => {
  const data = useLoaderData()
  console.log(data)

  


  

  const handleSubmitResult = (e) => {
    e.preventDefault();

    const form = e.target;

    const PlayerName = form.PlayerName.value;
    const GoalsAgainst = form.GA.value;
    const GoalDifference = form.GD.value;
    const category = form.category.value;
    const MatchResult = form.MatchResult.value;
    


    const applyDetails = {
       name: PlayerName ,
         GoalsAgainst : parseFloat(GoalsAgainst),
        category,
       GoalDifference :  parseFloat(GoalDifference),
        MatchResult,
        PL : 0,
    
    }

    console.log(applyDetails)

    const url = `http://localhost:5000/updatePlayer/${data._id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applyDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.result.modifiedCount === 1) {
          Swal.fire({
            title: "Success!",
            text: "Submited Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });


  };

  return (
    <div className="bg-image2 py-2">
      <h1 className="text-center font-bold text-4xl py-10">Submit Result</h1>
      <div className="px-24">
        <form onSubmit={handleSubmitResult}>
          <div className="lg:flex mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Player Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="PlayerName"
                  placeholder="Player Name"
                  defaultValue={data.name}
                  readOnly
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="lg:flex mb-8">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Goals Against</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="GA"
                
                //   defaultValue={user?.displayName}
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control lg:w-1/2 lg:ml-4">
              <label className="label">
                <span className="label-text">Goal Difference</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="GD"
                  
                //   defaultValue={user?.email}
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
           
          </div>

          <div className="lg:flex mb-8">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select name="category" className="input input-bordered w-full">
                required
                <option value="">Select an option</option>
                <option>Community</option>
                <option>Non-Community</option>
                <option>Intra-Club</option>
              </select>
            </div>
            <div className="form-control lg:w-1/2 lg:ml-4">
            <label className="label">
                <span className="label-text">Match Result</span>
              </label>
              <select name="MatchResult" className="input input-bordered w-full">
                required
                <option value="">Select an option</option>
                <option>Win</option>
                <option>Draw</option>
                <option>Lose</option>
              </select>
            </div>
          </div>
         <input type="submit" className='btn btn-accent w-full' name="" id="" />
        </form>
      </div>
    </div>
  );
};

export default ResultSubmit;