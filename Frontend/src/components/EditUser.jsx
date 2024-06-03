import React from 'react'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditUser = () => {

    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [phone, setPhone] = useState();
    const [appointmentdate, setAppointmentDate] = useState(new Date());
    const [disdate, setDisdate] = useState(new Date());
    const [paid, setPaid] = useState();
    const [doctor, setDoctor] = useState();
    const [pending, setPending] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
  
    useEffect(() => {
      setLoading(true);
      axios
        .get(`http://localhost:5000/record/${id}`)
        .then((res) => {
          setName(res.data.name);
          setAge(res.data.age);
          setGender(res.data.gender);
          setPhone(res.data.phone);
          setDoctor(res.data.doctor);
          setAppointmentDate(res.data.appointmentdate);
          setDisdate(res.data.disdate);
          setPaid(res.data.paid);
          setPending(res.data.pending);
        }).catch((error) => {
          setLoading(false);
          console.log(error);
        })
      }, []);
  
      const Update = (e) => {
        const data = {
          name,
          age,
          gender,
          phone,
          appointmentdate,
          doctor,
          disdate,
          paid,
          pending
        };
        setLoading(true);
        e.preventDefault();
        
        axios
        .put(`http://localhost:5000/record/${id}`, data)
        .then((res) => {
          setLoading(false);
          console.log(res);
          navigate("/record/appointments");
          
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
       <form onSubmit={Update}>
            <h2>Update User</h2>
           
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' placeholder='Enter name' className='form-control' 
                value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='name'>Age</label>
                <input type='text' placeholder='Enter name' className='form-control' 
                value={age} onChange={(e) => setAge(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='name'>Gender</label>
                <input type='text' placeholder='Enter name'className='form-control' 
                
               value={gender} onChange={(e) => setGender(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='name'>Phone</label>
                <input type='Number' placeholder='Enter phone number' className='form-control' 
                value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='name'>Doctor</label>
                <input type='text' placeholder='Enter name' className='form-control' 
                value={doctor} onChange={(e) => setDoctor(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='name'>Appointment Date</label>
                <input type='date' placeholder='Enter date' className='form-control' 
                value={appointmentdate.toString().slice(0,10)} onChange={(e) => setAppointmentDate(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='name'>Discharge Date</label>
                <input type='date' placeholder='Enter date' className='form-control' 
                value={disdate.toString().slice(0,10)} onChange={(e) => setDisdate(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='name'>Paid Bill</label>
                <input type='number' placeholder='Enter bill' className='form-control' 
                value={paid} onChange={(e) => setPaid(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='name'>Pending Bill</label>
                <input type='number' placeholder='Enter bill' className='form-control' 
                value={pending} onChange={(e) => setPending(e.target.value)}/>
            </div>
            <button className='btn btn-success' >
                Update
            </button>
        </form>
    </div>
</div>
  )
}

export default EditUser