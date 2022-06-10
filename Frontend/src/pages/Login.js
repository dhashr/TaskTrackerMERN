import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { loginFE, authenticate, isAuthenticated }from "../api/signapi";

//DESIGN

const Login = () => {
  //  State form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(0);
  const [correctpassword, setCorrectPassword] = useState("");
  const navigate = useNavigate();

  // const { user } = isAuthenticated()

  //use effect
  useEffect(() => {}, [correctpassword]);

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  // Handling user type
  const handleChange = (e) => {
    setRole(e.target.value);
  };
  // details
  var loginDetails = {
    email: email,
    password: password,
    role: role,
  };
  //Validation
  const validateInput = () => {
    if (password.length < 8) {
      setCorrectPassword(true);
      return 0;
    }
    return 1;
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = validateInput();
    if (a === 1) {
    loginFE({email, password})
    .then(data => {
        if(role == 1){
          sessionStorage.setItem('userId',JSON.stringify(data.user._id))
          sessionStorage.setItem('token',JSON.stringify(data.token))
          console.log(data)
          navigate(`/admin/${data.user._id}/${data.token}`)
        }
        else{
          sessionStorage.setItem('userId',JSON.stringify(data.user._id))
          sessionStorage.setItem('token',JSON.stringify(data.token))
          console.log(data)
          navigate(`/user/${data.user._id}/${data.token}`)
        }
        // if (isAuthenticated()) {
        //   return <Redirect to="/" />;
        // }
      })
    .catch((err)=>console.log(err))
    // console.log([email, password, usertype]);
    console.log(loginDetails);
  }
    //   if(user && user.role === 1){
  };


  return (
    <div>
      <Header></Header>
      <div className="container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5">
        <div className="text-center mb-5 alert alert-primary">
          <label className="h2">Login</label>
        </div>

        <div class="form-group">
          <label for="Email">Email address</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter email"
            onChange={handleEmail}
          ></input>
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

          <label for="users">Choose user:</label>
          <select
            id="users"
            name="users"
            class="form-control"
            value={role}
            onChange={handleChange}
          >
            <option value={0}>user</option>
            <option value={1}>admin</option>
          </select>

          <button
            onClick={handleSubmit}
            className="btn"
            type="submit"
            disabled={!email || !password}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
