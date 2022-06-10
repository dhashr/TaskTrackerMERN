import axios from "axios"

export const getUsersDetail = async () => {
    try {
        let userDetails = await axios.get(`http://localhost:8080/home/users`)
        // console.log(userDetails.data);
        return userDetails.data
    }
    catch(err){
        throw new Error(`read error ${err}`)
    }
  };

export const getUserTask = async ()=>{
    try{
        let userTasks =  await axios.get(`http://localhost:8080/home/task`)
        // console.log(userTasks.data);
        return userTasks.data
    }
    catch(err){
        throw new Error(`read error ${err}`)
    }
}