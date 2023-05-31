
//Get task by email
export const getAllTasksByEmail = async email => {
    const url = `${process.env.REACT_APP_API_URL}/tasks?email=${email}`
  
    const response = await fetch(url)
  
    const data = await response.json()
  
    return data
  }



//Get task by status
export const getAllTasksByActive = async status => {
    const url = `${process.env.REACT_APP_API_URL}/status/tasks?status=${status}`
  
    const response = await fetch(url)
  
    const data = await response.json()
  
    return data
  }


  //Search Result
  export const getSearchResult = async (title) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/search-result?title=${title}`)
    const data = await response.json()
    return data
  }


















  //Get task by id
//   export const getAllTasksByid = async _id => {
//     console.log("clg from api",_id );
//     const url = `${process.env.REACT_APP_API_URL}/tasks?id=${_id}`
  
//     const response = await fetch(url)
  
//     const data = await response.json()
  
//     return data
//   }