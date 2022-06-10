import React from "react";
import { useState, useEffect} from "react";
import { getTaskFE, deleteTaskFE } from "../api/adminapi"
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import { useParams } from "react-router-dom";

const Admintable = ()=>{
  const { userId, token } = useParams();
    const [allData, setAllData] = useState([]);

    const handleDelete = (taskId)=>{
      deleteTaskFE(userId, taskId, token)
      .then(res=>res.json())
      .catch(err=>console.log(err))

    }
    useEffect(()=>{
        let storeData = async()=>{ 
          handleDelete()
          let data = await getTaskFE();
          setAllData(data)
          
        }
        storeData()
      },[])
      // console.log(allData)
      return (
        <div>
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}> */}
        <div>
          <h1 className="as1">Task On Work</h1>
          <div class="table-responsive adtable">
            <table className="table table-striped">
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
              {allData.map((item, idx)=>{
                      return <>
                        <tr key={idx}>
                        <td>{item.task_title}</td>
                        {/* <td>{item.task_description}</td> */}
                        <td><div dangerouslySetInnerHTML={{ __html: item.task_description}} /></td>
                        <td>{item.task_priority}</td>
                        <td>{item.task_issues}</td> 
                        <td>{item.task_estimated_time}</td>
                        <td>{item.task_due_date}</td>
                        <td>{item.assignName}</td>
                        <td>{item.task_start_date}</td>
                        <td>{item.task_end_date}</td>
                        <th>< FaRegTrashAlt onClick={()=>{handleDelete(item._id)}}/></th>   
                        </tr>
                      </>
                    })}
              </tbody>
            </table>
          </div>
        </div>
        {/* </Box> */}
      </div>
      )
}

export default Admintable;