import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export const Details = () => {

    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const { id } = useParams();

    useEffect(()=> {
        setLoading(true);
        axios.get(`http://localhost:5000/record/${id}`).
        then((res)=>{
            setDetails(res.data);
            setLoading(false);
        }).catch((error)=> {
            console.log(error);
            setLoading(false);
        })
    },[])

  return (
    <div className='p4'>
    <h1 className='text-3xl my-4'>Appointment Details</h1>
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 bg-cyan-200 font-serif'>
            <div className='my-4 font-serif'>
                <span className='text-xl mr-4 text-grey-500'>Name -</span>
                <span>{details.name}</span>
            </div>
            <div className='my-4'>
                <span className='text-xl mr-4 text-grey-500 '>Age -</span>
                <span>{details.age}</span>
            </div>
            <div className='my-4'>
                <span className='text-xl mr-4 text-grey-500 '>Gender -</span>
                <span>{details.gender}</span>
            </div>
            <div className='my-4'>
                <span className='text-xl mr-4 text-grey-500 '>Appointment Date -</span>
                <span>{new Date(details.appointmentdate).toString()}</span>
            </div>
            <div className='my-4'>
                <span className='text-xl mr-4 text-grey-500 '>Doctor Appointed -</span>
                <span>{details.doctor}</span>
            </div>
            <div className='my-4'>
                <span className='text-xl mr-4 text-grey-500 '>Phone No. -</span>
                <span>{details.phone}</span>
            </div>
            <div className='my-4'>
                <span className='text-xl mr-4 text-grey-500 '>BILL PAID -</span>
                <span>{details.paid}</span>
            </div>
            <div className='my-4'>
                <span className='text-xl mr-4 text-grey-500 '>BILL DUE -</span>
                <span>{details.pending}</span>
            </div>
            <div className='my-4'>
                <span className='text-xl mr-4 text-grey-500 '>Discharge Date -</span>
                <span>{details.disdate}</span>
            </div>
        </div>


</div>
  )
}
