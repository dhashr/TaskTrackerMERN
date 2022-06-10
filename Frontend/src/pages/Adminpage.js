import React from "react";
import {
  Box,
  Container,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { taskFE } from "../api/adminapi";
import { getUsersDetail } from "../api/userapi";
import Richtextfield from "./Textfieldeditor";
// import { width } from "@mui/system";

const Taskassign = () => {
  //state for assign
  const [task_title, setTask_Title] = useState("");
  const [task_description, setTask_Description] = useState("");
  const [task_estimated_time, setTask_Estimated_time] = useState("");
  const [task_assign_to, setTask_Assign_to] = useState("");
  const [task_priority, setTask_Priority] = useState("");
  const [task_issues, setTask_Issues] = useState("");
  const [task_due_date, setTask_Due_date] = useState("");
  const [task_start_date, setTask_Start_date] = useState("");
  const [task_end_date, setTask_End_date] = useState("");
  const [assignName, setAssignName] = useState("");
  const [userData, setUserData] = useState([]);
  const [success, setSuccess] = useState("");

  const { userId, token } = useParams();

  const handleAssign = (event) => {
    console.log("developer",event.target.value);
    let data = userData.find(item=>
      item._id === event.target.value
    )
    console.log('userdata',data)
    // let userDetails = {}
    // userDetails[`name`]= data.name;
    // userDetails[`id`]=data._id;
    setTask_Assign_to(event.target.value);
    setAssignName(data.name)
    // console.log(assignId);
  };

  useEffect(() => {
    let userDetails = async () => {
      let Datas = await getUsersDetail();
      setUserData(Datas);
    };
    userDetails();
  }, []);
  // console.log(userData);

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    taskFE({
      task_title,
      task_description,
      task_assign_to,
      task_estimated_time,
      task_priority,
      task_issues,
      task_due_date,
      task_start_date,
      task_end_date,
      assignName,
      userId,
      token,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // console.log(taskDetails);
    setTask_Title('');
    setTask_Description('');
    setTask_Assign_to('');
    setTask_Estimated_time('');
    setTask_Priority('');
    setTask_Issues('');
    setTask_Start_date('');
    setTask_End_date('');
    setTask_Due_date('');
  };

  return (
    <div>
      <div>
        <div>
          <Box sx={{ height: "75vh" }}>
            <div>
            {success && (
                      <span className="success">successfully updated</span>
                  )}
              <h1 className="as">Assign Task</h1>
              <div className="userform">
                <div className="user_inside">
                  <div>
                    <TextField
                      required
                      id="summary"
                      label="Summary"
                      type="text"
                      value={task_title}
                      variant="outlined"
                      onChange={event => setTask_Title(event.target.value)}
                      sx={{ width: "350px", height: "70px" }}
                    />
                  </div>

                  <div>
                    <TextField
                      required
                      id="estimatedTime"
                      label="Estimated Time"
                      type="number"
                      value={task_estimated_time}
                      variant="outlined"
                      onChange={event => setTask_Estimated_time(event.target.value)}
                      sx={{ width: "350px", height: "50px" }}
                    />
                  </div>

                  <div className="usertype">
                    <InputLabel id="demo-simple-select-label">
                      Priority
                    </InputLabel>
                    <Select
                      sx={{ width: "350px", height: "50px" }}
                      labelId="priority"
                      id="priority"
                      value={task_priority}
                      label="Priority"
                      onChange={event => setTask_Priority(event.target.value)}
                    >
                      <MenuItem value={"High"}>High</MenuItem>
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                    </Select>
                  </div>

                  <div className="usertype">
                    <InputLabel id="demo-simple-select-label">Issue</InputLabel>
                    <Select
                      sx={{ width: "350px", height: "50px" }}
                      labelId="issues"
                      id="issues"
                      value={task_issues}
                      label="Issues"
                      onChange={event => setTask_Issues(event.target.value)}
                    >
                      <MenuItem value={"Task"}>Task</MenuItem>
                      <MenuItem value={"Bug"}>Bug</MenuItem>
                    </Select>
                  </div>

                  <div className="usertype">
                    <InputLabel id="demo-simple-select-label">
                      Assigned To
                    </InputLabel>
                    <Select
                      sx={{ width: "350px", height: "50px" }}
                      labelId="developer"
                      id="developer"
                      value={ task_assign_to }
                      label="developer"
                      onChange={handleAssign}
                    >
                      {userData.map((item) => {
                        return (
                          <MenuItem value={item._id}>{item.name}</MenuItem>
                        );
                      })}
                    </Select>
                  </div>
                  <div className="usertype">
                    <InputLabel id="demo-simple-select-label">
                      Start Date
                    </InputLabel>
                    <TextField
                      id="startdate"
                      // label="Start Date"
                      type="date"
                      value={task_start_date}
                      variant="outlined"
                      onChange={event => setTask_Start_date(event.target.value)}
                      sx={{ width: "350px", height: "50px" }}
                    />
                  </div>
                  <div className="usertype">
                    <InputLabel id="demo-simple-select-label">
                      End Date
                    </InputLabel>
                    <TextField
                      id="enddate"
                      type="date"
                      value={task_end_date}
                      variant="outlined"
                      onChange={event => setTask_End_date(event.target.value)}
                      sx={{ width: "350px", height: "50px" }}
                    />
                  </div>
                  <div className="usertype">
                    <InputLabel id="demo-simple-select-label">
                      Due Date
                    </InputLabel>
                    <TextField
                      id="duedate"
                      // label="Due Date"
                      type="date"
                      value={task_due_date}
                      variant="outlined"
                      onChange={event => setTask_Due_date(event.target.value)}
                      sx={{ width: "350px", height: "50px" }}
                    />
                  </div>
                  <div className="richtext">
                    <label for="description"> Description</label>
                    <Richtextfield
                      setTask_Description = { setTask_Description }
                      value={task_description}
                      onChange={ event => setTask_Description(event.target.value) }
                    />
                    {/* <br />
                    {value} */}
                    {/* {console.log(value)} */}
                  </div>
                  <div className="asbtn">
                    <Button
                      variant="contained"
                      color="success"
                      onClick={(e) => handleSubmit(e)}
                      disabled = {!task_title || !task_assign_to  }
                    >
                      Assign
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
        {/* table */}
      </div>
      {/* table */}
      {/* <div className="full"></div> */}
    </div>
  );
};

export default Taskassign;

// var taskDetails = {
  //   task_title: task_title,
  //   task_description: task_description,
  //   task_estimated_time: task_estimated_time,
  //   task_priority: task_priority,
  //   task_issues: task_issues,
  //   task_due_date: task_due_date,
  //   task_start_date: task_start_date,
  //   task_end_date: task_end_date,
  //   assignName: assignName,
  // };