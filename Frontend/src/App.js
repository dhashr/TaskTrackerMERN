import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Taskassign from "./pages/Adminpage";
import Usertasks from "./pages/Userpage";
import Dashboard from "./components/Dashboard";
import Admintable from "./pages/Admintable";
import Dashboarduser from "./components/Dashboarduser";
// import Header from "./components/Header";

const App = () => {

  return (
    <div>
      <main>
      <Routes>
      <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/admin/:userId/:token" element={<Taskassign />} /> */}
        {/* <Route path="/user/:userId/:token" element={<Usertasks />} /> */}
        <Route path='/admin/:userId/:token'element={<Dashboard />}>
            <Route path="" element={<Taskassign />}></Route>
            <Route path="admintable" element={<Admintable />}></Route>
          </Route>

          <Route path="/user/:userId/:token" element={<Dashboarduser />}>
            <Route path="" element={<Usertasks />} />
          </Route>
      </Routes>
      </main>
    </div>
  );
};

export default App;
