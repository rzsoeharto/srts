import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase.config";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    gender: "",
    password: "",
  });

  const { email, name, gender, password } = formData;

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      console.log(formDataCopy);
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const onMutate = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div className="flex flex-col h-screen space-y-20 md:space-y-12 lg:space-y-20">
        <p className="bold-lg py-16 px-14 md:px-8">
          Website under construction.
        </p>
        <div className="flex place-content-center space-x-32 lg:space-x-10 md:space-x-10 md:flex-col">
          <div className="flex flex-col w-1/5 pl-5 lg:w-1/3 md:w-auto md:pr-5">
            <div className="flex pb-3">
              <Link to="/">
                <p className="flex logo-lg bg-black pl-2 pr-2">X00.</p>
              </Link>
            </div>
            <form className="flex flex-col w-full" onSubmit={onSubmit}>
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
              <label htmlFor="name" className="inputLabel pt-3">
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
              <label htmlFor="password" className="inputLabel pt-3">
                Password
              </label>
              <input
                type="password"
                className="input-md h-11"
                id="password"
                value={password}
                onChange={onMutate}
                min="1"
                required
              />
              <label htmlFor="gender" className="inputLabel pt-3">
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
          <p className="annText text-4xl lg:text-3xl md:text-xl pb-3 pt-40 md:pt-5">
            Register to be notified when we launch!
          </p>
        </div>
        <div className="flex flex-row-reverse">
          <p className="bold-lg object-right-bottom px-20 pt-44 md:pt-20 md:px-5">
            Thrifting this year.
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
