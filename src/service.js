import axios from 'axios';

// const apiUrl = "http://localhost:5023"
axios.defaults.baseURL="http://localhost:5023"
// axios.defaults.baseURL =process.env.REACT_APP_API_URL


// setAuthorizationBearer();
// function saveAccessToken(authResult) {
//   localStorage.setItem("access_token", authResult.token);
//   setAuthorizationBearer();
// }
// function setAuthorizationBearer() {
//   const accessToken = localStorage.getItem("access_token");
//   if (accessToken) {
//     axios.defaults.headers.common["Authorization"] = Bearer `/tasks/${accessToken}`;
//   }
// }
// axios.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {
//   return Promise.reject(error);
// });
export default {
 getTasks:async()=>{
  const result=await axios.get(`/tasks`)
  return result.data;
 },
addTask:async(name)=>{
  const result=await axios.post(`/tasks/${name}`)
  return result.data;
},
deleteTask:async(id)=>{
  console.log(id)
  const result=await axios.delete(`/tasks/${id}`)
  return result.data;
},
setCompleted:async(id,isComplete)=>{
  const result=await axios.patch(`/tasks/${id}/${isComplete}`)
  return result.data;
},





  // getTasks: async () => {
    
  //   try{

  //   const result = await axios.get(`${apiUrl}/tasks`)    
  //   // console.log(result);
  //   return result.data;
  //   }
  //   catch(error){
  //     console.error('Error fetching tasks:', error)
  //   }
  // },
  // addTask: async (name) => {
  //       try {
  //       console.log('addTask', name)
  //       // const result = await axios.post(`${apiUrl}/tasks/?name=${name}`)
  //       const result = await axios.post(`${apiUrl}/tasks/?name=${name}`)

  //       return result.data;
  //       }
  //       catch (error) {
  //         console.error('Error adding task:', error);
  //       }
  //     },

  //     setCompleted: async (id, isComplete) => {
  //           try{
  //           console.log('setCompleted', { id, isComplete })
  //           const result = await axios.patch(`${apiUrl}/tasks/?id=${id}&isComplete=${isComplete}`)
  //           return result.data;
  //           }
  //           catch (error) {
  //             console.error('Error setting task complete:', error);
  //           }
  //         },
        
  // deleteTask: async (id) => {
  //   try{
  //   console.log('deleteTask')
  //   const result = await axios.delete(`${apiUrl}/tasks/?id=${id}`)
  //   return result.data;
  //   }
  //   catch (error) {
  //     console.error('Error deleting task:', error);
  //   }
  // }
};



// // import jwt_decode from "jwt-decode";

// axios.defaults.baseURL =process.env.REACT_APP_API_URL

// setAuthorizationBearer();
// function saveAccessToken(authResult) {
//   localStorage.setItem("access_token", authResult.token);
//   setAuthorizationBearer();
// }
// function setAuthorizationBearer() {
//   const accessToken = localStorage.getItem("access_token");
//   if (accessToken) {
//     axios.defaults.headers.common["Authorization"] = Bearer ${accessToken};
//   }
// }
// axios.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {
//   return Promise.reject(error);
// });

// export default {
//   getTasks: async () => {
//     try {
//       const result = await axios.get()
//       return result.data;
//     }
//     catch (error) {
//       console.error('Error fetching tasks:', error);
//     }
//   },

//   addTask: async (name) => {
//     try {
//     console.log('addTask', name)
//     const result = await axios.post(?name=${name})
//     return result.data;
//     }
//     catch (error) {
//       console.error('Error adding task:', error);
//     }
//   },

//   setCompleted: async (id, isComplete) => {
//     try{
//     console.log('setCompleted', { id, isComplete })
//     const result = await axios.patch(?id=${id}&isComplete=${isComplete})
//     return result.data;
//     }
//     catch (error) {
//       console.error('Error setting task complete:', error);
//     }
//   },

//   deleteTask: async (id) => {
//     try{
//     console.log('deleteTask')
//     const result = await axios.delete(?id=${id})
//     return result.data;
//     }
//     catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   }
// };