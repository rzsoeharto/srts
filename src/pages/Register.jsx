import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import TopBar from "../components/TopBar";

function Register({ handleLang, lang }) {
  const { RegTopText, RegHeadline, RegBotText, RegButton, RegLabel } = lang;

  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });

  const { email, name } = formData;

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataCopy = { ...formData };

      await setDoc(doc(db, "users", formDataCopy.email), formDataCopy);
      toast.success("Registration Successful");
      setFormData({
        email: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      toast.error("Email already registered", 1000);
    }
  };

  //onMutate is to handle component re-renders upon input
  const onMutate = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div className="hidden md:inline">
        <TopBar lang={lang} handleLang={handleLang} />
      </div>
      <div className="flex flex-col h-screen space-y-20 lg:space-y-20 md:space-y-6 ">
        <div className="flex flex-row w-full py-16 pl-32 px-14 space-x-2 place-content-start md:px-0 md:pt-20 md:pb-0">
          <p className="text-2xl condensed font-bold tracking-tight md:px-8">
            {RegTopText}
          </p>
        </div>
        <div className="flex place-content-center h-5/6 space-x-32 2xl:space-x-16 lg:space-x-10 md:space-x-0 md:flex-col md:place-content-start md:h-min">
          <div className="flex flex-col place-content-center border-r border-black w-1/4 pr-28 2xl:pr-20 2xl:w-1/3 xl:pl-5 lg:w-2/4 md:w-auto md:px-5 md:border-none">
            <div className="flex pb-9 xl:pb-2">
              <Link to="/">
                <p className="flex logo-lg bg-black pl-2 pr-2">X00</p>
              </Link>
            </div>
            <form className="flex flex-col w-full" onSubmit={onSubmit}>
              <label
                htmlFor="name"
                className="inputLabel text-black text-black "
              >
                {RegLabel}
              </label>
              <input
                type="text"
                className="input-md h-11"
                id="name"
                value={name}
                placeholder="John"
                onChange={onMutate}
                min="1"
                required
              />
              <label htmlFor="email" className="inputLabel pt-3 text-black">
                Email
              </label>
              <input
                type="email"
                className="input-md h-11"
                placeholder="example@ex.com"
                autoComplete="email"
                id="email"
                value={email}
                onChange={onMutate}
                min="1"
                size="30"
                pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
                required
              />
              <button
                className="btn btn-primary rounded-none mt-4 normal-case text-3.5xl roboto"
                id="submit"
              >
                {RegButton}
              </button>
            </form>
          </div>
          <div className="flex flex-col place-content-center lg:w-2/4 lg:pr-10 md:w-full md:pr-0">
            <div className="md:hidden">
              <Link to="/">
                <img
                  src="../../assets/logo/Logo.svg"
                  className="w-full"
                  alt=""
                />
              </Link>
            </div>
            <p className="condensed text-4xl lg:text-xl md:text-3xl md:pt-6 md:pr-0 md:place-content-center md:flex sm:text-xl">
              {RegHeadline}
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse pb-24 pr-24 md:pr-5">
          <p className="text-2xl condensed font-bold tracking-tight object-right-bottom text-black">
            {RegBotText}
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
