// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";



  const handleGooglesignIn = () => {
    googleSignIn().then((userCredential) => {
      const user = userCredential.user;
      const savedUser = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };

      // axiosSecure.post("/users", savedUser).then((data) => {
      //   console.log(data);
      //   navigate(from, { replace: true });
      //   if (user) {
      //     Swal.fire({
      //       title: "User Registered Successfully",
      //       icon: "success",
      //       timer: 2000,
      //       color: "#FFFFFF",
      //       background:
      //         " linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)",

      //       confirmButtonColor: "cool",
      //     });
      //   }
      // });
      const url = "https://bss-backend.vercel.app/users";
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            navigate(from, { replace: true });
            Swal.fire({
              title: "Success!",
              text: "User Created Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
            
          }
        });
    });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              <hr />
              <div>
                <button
                  onClick={handleGooglesignIn}
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mx-1 h-9 w-full bg-green-500 rounded-full  uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <FaGoogle className="mx-auto" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
