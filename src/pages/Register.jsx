import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    gender: "",
  });

  const { email, name, gender } = formData;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const onMutate = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div className="flex flex-col h-screen space-y-20 md:space-y-18 lg:space-y-20 xl:space-y-20">
        <div>
          <p className="header-lg py-16 px-14">Website under construction.</p>
        </div>
        <div className="pt-8">
          <div className="flex place-content-center py-5">
            <Link to="/">
              <p className="logo-lg bg-black pl-2 pr-2">X00,</p>
            </Link>
          </div>
          <div className="flex place-content-center">
            <form
              className="flex flex-col w-1/5 lg:w-1/3 md:w-1/2"
              onSubmit={onSubmit}
            >
              <label htmlFor="email" className="inputLabel">
                Email
              </label>
              <input
                type="text"
                className="input-md h-11"
                id="email"
                value={email}
                onChange={onMutate}
                min="1"
                required
              />
              <label htmlFor="name" className="inputLabel pt-2">
                Name
              </label>
              <input
                type="text"
                className="input-md h-11"
                id="name"
                value={name}
                onChange={onMutate}
                min="1"
                required
              />
              <label htmlFor="gender" className="inputLabel pt-2">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="input-md"
                required
                value={gender}
                onChange={onMutate}
              >
                <option value="" disabled>
                  Please select a gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other/not specific</option>
              </select>

              <button className="button-md mt-4">Register</button>
            </form>
          </div>
        </div>
        <div>
          <div className="flex flex-row-reverse">
            <p className="header-lg object-right-bottom px-20 pt-48">
              Thrifting this year.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
