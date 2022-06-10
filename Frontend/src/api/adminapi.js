import axios from "axios";

// fetch and try concept
export const taskFE = async ({task_title, task_assign_to, task_description, task_estimated_time, task_priority,
    task_issues, task_due_date, task_start_date, task_end_date, assignName, userId, token}={} )=>{
    const tasks = {task_title, task_assign_to, task_description, task_estimated_time, task_priority,
        task_issues, task_due_date, task_start_date, task_end_date, assignName, userId, token};
     
    try {
        
        const res = await fetch(`http://localhost:8080/home/task/create/${userId}`,{
            method:'POST',           
            headers:{
                // Accept: "application/json",
                Authorization :`Bearer ${token}`,
                'Content-Type' : 'application/json',   
            },
            body: JSON.stringify(tasks),
        })
        let taskDetails = await res.json();
        console.log(taskDetails);    
        // return res.json()
    }
    catch(err){
        throw new Error(`upload error ${err}`) 
    }
}

// axios concept
export const getTaskFE = async ()=>{
    try {
       let result =  await axios.get('http://localhost:8080/home/task')
    //    console.log(result.data)
       return result.data
    }
    catch(err){
        throw new Error(`read error ${err}`) 
    }
}

// fetch concept
export const deleteTaskFE = async(userId, taskId, token)=>{
    return fetch(`http://localhost:8080/home/task/${userId}/${taskId}`,{
        method:'DELETE',
        headers:{
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    .then(res=> res.json())
    .catch(err=>console.log(err))

}
