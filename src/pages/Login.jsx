import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../firebase.config";
import axios from "axios";

const conn = "http://127.0.0.1:8000/api/user/login";

function Login({ xcrf }) {
  const API_HOST = "http://localhost:8000/api";

  let _csrfToken = null;

  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].toString().replace(/^([\s]*)|([\s]*)$/g, "");
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  var csrfCookie = getCookie("csrfCookie");

  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    // username: "",
    // gender: "",
  });

  const { email, password } = formData;

  //   const navigate = useNavigate();

  //   const loginUser = async () => {
  //     await fetch(conn, {
  //       method: "POST",
  //       credentials: "include",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "multipart/form-data",
  //         // "X-CSRFToken": xcrf,
  //         // Cookies:
  //         //   "sessionid=31eylmfjqrwfie725wy3oh6upq52cba6;csrftoken=x7ZOxZBPpNHSi79QoZeE7b819itWir7E;",
  //       },
  //       data: {
  //         email: email,
  //         password: password,
  //       },
  //     });
  //   };
  async function getCsrfToken() {
    if (_csrfToken === null) {
      const response = await fetch(`${API_HOST}/csrf/`, {
        credentials: "include",
      });
      const data = await response.json();
      _csrfToken = data.csrfToken;
    }
    return _csrfToken;
  }

  async function testRequest(method) {
    const response = await fetch(`${API_HOST}/user/login`, {
      method: method,
      headers:
        method === "POST"
          ? {
              "Content-Type": "application/json",
              "X-CSRFToken": await getCsrfToken(),
            }
          : {},
      credentials: "include",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(response.body);
    return data.result;
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setVisible(true);
    } else {
      testRequest("POST");
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
              {/* <label htmlFor="username" className="inputLabel pt-3">
                Username
              </label>
              <input
                type="text"
                className="input-md h-11"
                id="username"
                value={username}
                onChange={onMutate}
                min="1"
                required
              /> */}
              {/* <label htmlFor="name" className="inputLabel pt-3">
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
              /> */}
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

              <p className={!visible ? "hidden" : "text-red-500"}>
                Password must be at least 6 characters long
              </p>
              {/* <label htmlFor="gender" className="inputLabel pt-3">
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
              </select> */}
              <button className="button-md mt-4" id="submit">
                Login
              </button>
            </form>
          </div>
          <div className="flex place-content-center">
            <p className="annText text-4xl lg:text-3xl md:text-xl md:pt-5">
              Register to be notified when we launch!
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <p
            className={
              !visible
                ? "bold-lg object-right-bottom px-20 pt-44 md:pt-20 md:px-5"
                : "bold-lg object-right-bottom px-20 pt-36 md:pt-20 md:px-5"
            }
          >
            Thrifting this year.
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;