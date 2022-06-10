import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FcPortraitMode } from "react-icons/fc";
import { RiUserShared2Fill } from "react-icons/ri";

// import Mainrouting from "../Mainrouting";

// import Taskassign from "../pages/Adminpage";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const {userId, token } = useParams();
  return (
    <div>
      <div id="wrapper">
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-primary ">
              
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                  <ul
                    className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                    id="menu"
                  >
                    <li className="dashwel  ">
                      <FcPortraitMode className="sticker" />
                      <div>
                        <span>Welcome Admin</span>
                      </div>
                      <hr></hr>
                    </li>

                    <li>
                      <ul
                        className="collapse show nav flex-column ms-1"
                        id="submenu1"
                        data-bs-parent="#menu"
                      >
                        <li className="w-100 dashsticker">
                          <Link to={`/admin/${userId}/${token}`}>
                            <span className="dashname ">AssignTask</span>
                          </Link>
                          <hr></hr>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link
                        to={`/admin/${userId}/${token}/admintable`}
                        className="nav-link px-0 align-middle"
                      >
                        <i className="fs-4 bi-table"></i>{" "}
                        <span className="dashname">TaskList</span>
                      </Link>
                      <hr></hr>
                    </li>

                    <div className="dashlogout">
                      <li>
                        <hr></hr>
                        <RiUserShared2Fill className="dashname " />
                        <Link to="/login">
                          <span className="dashname ">logout</span>
                        </Link>
                        <hr></hr>
                      </li>
                    </div>
                  </ul>
                </div>
              
            </div>
            <div className="col py-3">
              {/* Content area... */}

              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
