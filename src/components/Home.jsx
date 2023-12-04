import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
// import { FaReadme } from "react-icons/fa6";

const Home = () => {

    const [data, setData] = useState([])
    const navigate = useNavigate('')

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then(res=> setData(res.data))
        .catch(err=>console.log(err))
    },[])

    const handelDelete =(id)=>{
       const confirm = window.confirm("Are you Sure you want to Delete")
       if (confirm){
        axios.delete("http://localhost:3000/users/"+id)
      .then(res=>{
        location.reload();
        navigate('/')
      })
      .catch(er=>console.log(er))
       }
  }



  return (
    <div className='text-center'>
       <h1 className='font-bold py-5 text-4xl uppercase '>List of Users</h1>
      
     <div className='flex justify-center '>

     
       
        <table className='table-auto border-red-800  border-separate border-spacing-5'>
       
            <thead>
              <tr>
                {/* <th><FaReadme /></th>  */}
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                  
                  <button className='bg-green-500 hover:bg-green-800 text-white px-2 py-1 rounded-lg'> <Link to='/create'>Add </Link>  </button>
              </tr>
            </thead>
            <tbody>
             {
              data.map((user,index)=>(
                <tr key={index} className='font-mono text-xl hover:shadow-xl'   >
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td> <Link to={`/read/${user.id}`} className='hover:bg-green-500 bg-green-800 px-3 py-1 rounded-lg text-white'>Read </Link> </td>
                    
                    <td> <button onClick={e=> handelDelete(user.id)} className='hover:bg-red-800 bg-red-500 px-3 py-1 rounded-lg text-white'>Delete</button> </td>
              </tr>
              ))
             }
            </tbody>
        </table>
     </div>
     


    </div>
  )
}

export default Home
