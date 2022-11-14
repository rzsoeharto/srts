import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../firebase.config";
import { toast } from "react-toastify";
import axios from "axios";
import TopBar from "../components/TopBar";

const conn = "http://localhost:8000/api/user/create";

function Register() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    // username: "",
    // gender: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const createUser = () => {
    axios({
      method: "POST",
      url: conn,
      data: {
        email: email,
        password: password,
        // username: username,
        // gender: gender,
      },
    }).then((response) => {
      if (response === 201) {
        toast.success("Account successfully created!");
        navigate("/");
      } else {
        alert(response.Message);
      }
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setVisible(true);
    } else {
      createUser();
      console.log(formData);
    }
    // try {
    //   const auth = getAuth();

    //   const userCredential = await createUserWithEmailAndPassword(
    //     auth,
    //     email,
    //     password
    //   );

    //   const user = userCredential.user;
    //   const formDataCopy = { ...formData };
    //   delete formDataCopy.password;

    //   await setDoc(doc(db, "users", user.uid), formDataCopy);
    //   toast.success("Registration Successful");
    //   setFormData({
    //     email: "",
    //     name: "",
    //     gender: "",
    //     password: "",
    //   });
    //   navigate("/");
    // } catch (error) {
    //   toast.error("Email already registered", 1000);
    // }
  };
  const onMutate = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div className="hidden md:inline">
        <TopBar />
      </div>
      <div className="flex flex-col h-screen space-y-20 lg:space-y-20 md:space-y-6 ">
        <div className="flex flex-row w-full py-16 pl-32 px-14 space-x-2 place-content-start md:px-0 md:pt-20 md:pb-0">
          <p className="text-2xl condensed font-bold tracking-tight md:px-8">
            You found us before we’re ready
          </p>
        </div>
        <div className="flex place-content-center h-5/6 space-x-32 2xl:space-x-16 lg:space-x-10 md:space-x-0 md:flex-col md:place-content-start md:h-min">
          <div className="flex flex-col place-content-center border-r border-black w-1/4 pr-28 2xl:pr-20 2xl:w-1/3 xl:pl-5 lg:w-2/4 md:w-auto md:px-5 md:border-none">
            <div className="flex pb-9 xl:pb-2">
              <Link to="/">
                <p className="flex logo-lg bg-black pl-2 pr-2">X00.</p>
              </Link>
            </div>
            <form className="flex flex-col w-full" onSubmit={onSubmit}>
              <label htmlFor="email" className="inputLabel text-black">
                Email
              </label>
              <input
                type="email"
                className="input-md h-11"
                placeholder="example@ex.com"
                id="email"
                value={email}
                onChange={onMutate}
                min="1"
                size="30"
                required
              />
              <label
                htmlFor="password"
                className="inputLabel pt-3 text-black text-black "
              >
                Password
              </label>
              <input
                type="password"
                className="input-md h-11"
                placeholder="Password"
                id="password"
                value={password}
                onChange={onMutate}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                min="1"
                required
              />
              <p className={!visible ? "hidden" : "text-red-500"}>
                Password must be at least 6 characters long
              </p>
              <button
                className="btn btn-primary rounded-none mt-4 normal-case text-4xl roboto"
                id="submit"
              >
                Register
              </button>
            </form>
          </div>
          <div className="flex flex-col place-content-center lg:w-2/4 lg:pr-10 md:w-full">
            <div className="md:hidden">
              <img src="../../assets/logo/Logo.svg" className="w-full" alt="" />
            </div>
            <p className="condensed text-4xl lg:text-xl md:text-3xl md:pt-6 md:pr-0 md:place-content-center md:flex sm:text-xl">
              Register to be notified when we launch!
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse pb-24 pr-24 md:pr-5">
          <p
            className={
              !visible
                ? "text-2xl condensed font-bold tracking-tight object-right-bottom text-black"
                : "text-2xl condensed font-bold tracking-tight object-right-bottom text-black"
            }
          >
            Thrifting in 2022.
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
