import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Read = () => {

  const [data, setData] = useState([])

  const {id} = useParams()

    useEffect(()=>{
        axios.get("http://localhost:3000/users/" + id)
        .then(res=> setData(res.data))
        .catch(err=>console.log(err))
    },[])





  return (
    <div className='py-20 text-center'>
       <h1 className='font-bold text-4xl '>User Details</h1>
       <div className='font-bold text-xl  mt-5'>
            <h2>Name: {data.name}</h2>
            <h2>Email:{data.email}</h2>
            <h2 className='mb-5'>Phone:{data.phone}</h2>
            
       </div>
       <div>
       <Link to={`/update/${data.id}`} className=' mr-5 hover:bg-green-800 bg-green-500 px-3 py-1 rounded-lg text-white'>Edit</Link>
            <Link to='/' className='hover:bg-blue-800 bg-blue-500 px-3 py-1 rounded-lg text-white' > Back </Link>
       </div>
    </div>
  )
}

export default Read
