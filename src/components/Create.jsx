import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Create = () => {
  const [ values, setValues] = useState({
    name:"",
    email:"",
    password:""
  })
  
  const navigate = useNavigate()




  
  const handelSubmit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/users",values)
    .then(res=> {
      console.log(res)
      navigate('/')
    })
    .catch(err=>console.log(err))
  }




  return (
     <div>
       <h1 className='font-bold text-4xl pt-20 text-center'>Add User</h1>
        <div className='flex justify-center items-center ' >
            <form onSubmit={handelSubmit} >
              <div className='mt-3 '>
                 <input onChange={e=> setValues({...values, name:e.target.value})} type="text" placeholder='user name' className="bg-gray-50 border border-gray-300 w-96 p-3 rounded-lg border-b-2 border-t-0 " />
              </div>
              <div className='mt-3 '>
                 <input onChange={e=> setValues({...values, email:e.target.value})} type="text" placeholder='user email' className="bg-gray-50 border border-gray-300 w-96 p-3 rounded-lg border-b-2 border-t-0 " />
              </div>
              <div className='mt-3 '>
                 <input onChange={e=> setValues({...values, phone:e.target.value})} type="text" placeholder='user phone' className="bg-gray-50 border border-gray-300 w-96 p-3 rounded-lg border-b-2 border-t-0 " />
              </div>
             <div className='mt-5 '>
                <button type="submit"  className=' mr-2 bg-blue-500 text-white px-2 py-1 rounded-lg'>Submit</button>
                <Link to="/" > <button  type="submit" className='bg-green-500 text-white px-2 py-1 rounded-lg' >   Back </button> </Link> 
             </div>
            </form>
         </div>
     </div>
  )
}

export default Create
