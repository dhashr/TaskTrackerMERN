import { React, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import {registerFE} from "../api/signapi";

// import { Link } from "react-router-dom";

// import { registerFE } from "../api";

const Signup = () => {
  // States for registration
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [correctname, setCorrectName] = useState(false);
  const [correctpassword, setCorrectpassword] = useState(false);
  const [correctphone, setCorrectphone] = useState(false);

  useEffect(() => {}, [correctpassword, correctname, correctphone]);
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
  };

  // Handling the phonenumber change
  const handleTel = (e) => {
    setPhone(e.target.value);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  var userdetails = {
    name: name,
    phone: phone,
    email: email,
    password: password,
  };
  // validation
  const validateInput = () => {
    if (password.length < 8) {
      setCorrectpassword(true);
      return 0;
    }
    if (phone.length < 10) {
      setCorrectphone(true);
      return 0;
    }
    if (name.length < 3) {
      setCorrectName(true);
      return 0;
    }

    return 1;
  };
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log([name, tel, email, password]);
    let a = validateInput();
    if (a === 1) {
    registerFE({name, phone, email, password})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(userdetails);
    navigate('/login')
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5">
        <div className="text-center mb-5 alert alert-primary">
          <label className="h2">Signup</label>
        </div>

        <div class="form-group">
          <div>
            <label for="Name"> Name </label>
            <input
              type="name"
              class="form-control"
              placeholder="Enter name"
              onChange={handleName}
            ></input>
            {correctname && (
              <>
                <span className="val">Enter atleat 3 characters</span>
              </>
            )}
          </div>
          <div>
            <label for="phone"> Phone </label>
            <input
              type="tel"
              class="form-control"
              placeholder="Enter Phone No:"
              onChange={handleTel}
            ></input>
            {correctphone && (
              <>
                <span className="val">Enter correct number</span>
              </>
            )}
          </div>

          <div>
            <label for="Email1">Email address</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
              onChange={handleEmail}
            ></input>
          </div>

          <div>
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Password
            </label>

            <input
              type="password"
              class="form-control"
              id="inputPassword"
              placeholder="Password"
              onChange={handlePassword}
            ></input>
            {correctpassword && (
              <>
                <span className="val">Enter atleat 8 characters</span>
              </>
            )}
          </div>
          <div>
            <button
              className="btn"
              type="submit"
              onClick={(e) => handleSubmit(e)}
              disabled={!name || !phone || !email || !password}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
