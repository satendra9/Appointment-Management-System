import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const DeleteUser = () => {
    const [loading, setLoading] = useState();
    const {id} = useParams();
    const navigate = useNavigate();
    const handleDeleteBook = (id) => {
        setLoading(true);
        axios.delete(`http://localhost:5000/record/${id}`).
        then(()=>{
          setLoading(false);
          navigate("/")
        }).catch((error)=>{
          setLoading(false);
          alert('An error occurred. Please check console.');
          console.log(error);
        })
      }
      
  return (
    <div className='p-4'>
    <h1 className='text-3xl my-4'>Delete Book</h1>
      <div className='flex flex-col border-2 items-center border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure? You want to delete ?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={(e) => handleDeleteBook(id)}>
          Yes! Delete it.
          </button> 
      </div>
     
  </div>
  )
}

export default DeleteUser