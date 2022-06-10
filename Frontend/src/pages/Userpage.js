import React from "react";
import { useState, useEffect } from "react";
import { getTaskFE } from "../api/adminapi"
// import Header2 from "../components/Header2";
// import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const Usertasks = () => {
  const { userId } = useParams()
  const [userTask, setUserTask] = useState([])
  console.log(userId);
  useEffect(()=>{
    let storeData = async()=>{
      let data = await getTaskFE();
      let task = data.filter((item)=> userId === item.task_assign_to)
      setUserTask(task)
      // console.log(userTask);
    }
    storeData()
  },[])
  // console.log(userTask);
  return (
    <div>
      <div>
        <h1 className="usertable">Users Table</h1>
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}> */}
        {/* <div> */}
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Summary</th>
              <th>Description</th> 
              <th>Priority</th>
              <th>Issue</th>
              <th>Estimated Time(Hrs)</th>
              <th>Due Date</th>
              <th>Developer</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {userTask.map((item, idx)=>{
              return <>
                <tr key={idx}>
                  <td>{item.task_title}</td>
                  <td><div dangerouslySetInnerHTML={{__html: item.task_description}}/></td>
                  <td>{item.task_priority}</td>
                  <td>{item.task_issues}</td> 
                  <td>{item.task_estimated_time}</td>
                  <td>{item.task_due_date}</td>
                  <td>{item.assignName}</td>
                  <td>{item.task_start_date}</td>
                  <td>{item.task_end_date}</td> 
                </tr>
              </>
            })} 
          </tbody>
        </table>
        {/* </div> */}
        {/* </Box> */}
      </div>
    </div>
  );
};

export default Usertasks;
