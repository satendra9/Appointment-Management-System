import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Patients = () => {

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5000/record')
    .then((res)=> {
      setDetails(res.data.data);
      setLoading(false);
    }).catch((error)=>{
      console.log(error);
    })

  
  }, [])
  

  return (
    <div>
      <table className='shadow-2xl font-[poppins] border-2 border-cyan-200 w-full overflow-hidden text-center'>
  <thead className='text-white'>
    <tr>
      <th className='py-3 bg-cyan-800'>Patient's Name</th>
      <th className='py-3 bg-cyan-800'>Phone No.</th>
      <th className='py-3 bg-cyan-800'>Date of Admission</th>
      <th className='py-3 bg-cyan-800'>Discharge date</th>
      <th className='py-3 bg-cyan-800'>Bill Paid</th>
      <th className='py-3 bg-cyan-800'>Bill Pending</th>
    </tr>
  </thead>
  <tbody className='text-cyan-900 text-center'>
    {
      details.map((detail) => (

    <tr key={detail._id} className='bg-cyan-400 hover:bg-cyan-200 hover:scale-105 cursor-pointer duration-300 text-center'>
      <td className='py-3 px-6 text-center'>{detail.name}</td>
      <td className='py-3 px-6'>{detail.phone}</td>
      <td className='py-3 px-6'>{(detail.appointmentdate).toString().slice(0, 10)}</td>
      <td className='py-3 px-6'>{(detail.disdate).toString().slice(0, 10)}</td>
      <td className='py-3 px-6' >{detail.paid}</td>
      <td className='py-3 px-6' >{detail.pending}</td>
    </tr>
      ))}
  </tbody>
</table>

    </div>
  )
}

export default Patients