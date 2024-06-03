import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Doctors from './Doctors';
import Appointment from './Appointment';
import { Link } from 'react-router-dom';
import Datepicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";


const Home = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [gender, setGender] = useState('');
    const [appointmentdate, setappointmentDate] = useState();
    const [doctor, setDoctor] = useState('');
    const [phone, setPhone] = useState();
    const [disdate, setDisdate] = useState();
    const [paid, setPaid] = useState();
    const [pending, setPending] = useState();
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const recordSaveHandle = ()=> {
        const data = {
            name,
            age,
            gender,
            appointmentdate,
            doctor,
            phone,
            paid,
            pending,
            disdate,
        }
        setLoading(true);
        axios.post('http://localhost:5000/record', data).then
        (()=>{
            setLoading(false);
            navigate('/record/appointments');
        }).catch((error)=>{
            setLoading(false);
            alert('an error occurred, please check console');
            console.log(error);
        })
    }

    function customInput({value, onClick}){
      <div>
        <input type='text' value={value} onClick={onClick} readOnly />
        <div>
          <span>
            <FaCalendarAlt/>
          </span>
        </div>
      </div>
    }
  return (
    
    <div className='bg-white '>
      <div class="bg-[url('/pexels2.jpg')] bg-repeat">
    <nav className='bg-purple-500 rounded text-white text-xl h-10 items-center w-full'>
      <ul className='flex bg-slate-400 rounded-none h-9 w-full'>
        <li className='mx-[10px]'> <Link to='/record/appointments'>Appointments</Link></li>
        <li className='mx-[10px]'><Link to='/record/doctors'>Doctors</Link></li>
        <li className='mx-[10px]'><Link to='/record/patients'>Patients</Link></li>
      </ul>
    </nav>
    <div className='text-black flex justify-center mt-10 text-xl font-serif font-semibold'>
      Add New Patient
    </div>
    <div className='flex flex-col text-xl'>
      <div className='flex justify-center mt-5'>
      <label className="display:inline-block w-[150px] font-serif" htmlFor='name'>Name : </label>
      <input className='bg-sky-100 rounded-lg display: inline ring-cyan-400 focus:bg-cyan-600 ring-2 border-none' type='text' name='Name' value={name} 
      onChange={(e)=> setName(e.target.value)}/>
      </div>
      <div className='mt-5 flex justify-center'>
      <label className="display:inline-block w-[150px] font-serif" htmlFor='age'>Age : </label>
      <input className='bg-sky-100 rounded-lg display: inline ring-cyan-400 focus:bg-cyan-600 ring-2 border-none' type='number' name='Age' value={age} 
      onChange={(e)=> setAge(e.target.value)}/>
      </div>
      <div className='mt-5 flex justify-center'>
      <label className="display:inline-block w-[150px] font-serif" htmlFor='gender'>Gender : </label>
      <input className='bg-sky-100 rounded-lg display: inline ring-cyan-400 focus:bg-cyan-600 ring-2 border-none' type='text' name='Gender' value={gender}
      onChange={(e)=> setGender(e.target.value)}/>
      </div>
      <div className='mt-5 flex justify-center'>
      <label className="display:inline-block w-[150px] font-serif">Date : </label>
      <Datepicker className='rounded bg-sky-100 border-none ring-2 ring-cyan-400 focus:bg-cyan-600' label="Uncontrolled picker" defaultValue='2022-04-17' 
      selected={appointmentdate} onChange={(appointmentdate)=> (setappointmentDate(appointmentdate)).toString().slice(0,10)} customeinput = {<customInput/>} />
      </div>
      <div className='mt-5 flex justify-center'>
      <label className="display:inline-block w-[150px] font-serif" htmlFor='gender'>Doctor : </label>
      <input className='bg-sky-100 rounded-lg display: inline ring-cyan-400 focus:bg-cyan-600 ring-2 border-none' type='text' name='doctor' value={doctor}
      onChange={(e)=> setDoctor(e.target.value)}/>
      </div>
      <div className='mt-5 flex justify-center'>
      <label className="display:inline-block w-[150px] font-serif" htmlFor='gender'>Phone No. : </label>
      <input className='bg-sky-100 rounded-lg ring-cyan-400 focus:bg-cyan-600 ring-2 border-none' type='Number' name='phone' value={phone}
      onChange={(e)=> setPhone(e.target.value)}/>
      </div>
      <div className='mt-5 flex justify-center'>
      <label className="display:inline-block w-[150px] font-serif" htmlFor='gender'>Bill Paid : </label>
      <input className='bg-sky-100 rounded-lg display: inline ring-cyan-400 focus:bg-cyan-600 ring-2 border-none' type='Number' name='paid' value={paid}
      onChange={(e)=> setPaid(e.target.value)}/>
      </div>
      <div className='mt-5 flex justify-center'>
      <label className="display:inline-block w-[150px]" htmlFor='gender'>Pending Bill : </label>
      <input className='bg-sky-100 rounded-lg display: inline ring-cyan-400 focus:bg-cyan-600 ring-2 border-none' type='Number' name='pending' value={pending}
      onChange={(e)=> setPending(e.target.value)}/>
      </div>
      <div className='mt-5 flex justify-center'>
      <label className="display:inline-block w-[150px] font-serif" htmlFor='gender'>Discharge Date : </label>
      <Datepicker className='rounded bg-sky-100 border-none ring-2 ring-cyan-400 focus:bg-cyan-600 ' label="Uncontrolled picker" defaultValue='2022-04-17' 
      selected={disdate} onChange={(disdate)=> (setDisdate(disdate).toString().slice(0,10))} customeinput = {<customInput/>} />

      </div>
      <div className='flex justify-center'>
      <button className='text-black font-serif font-semibold mt-10 border-slate-950 bg-sky-700 p-2 rounded-md' onClick={recordSaveHandle}>SUBMIT</button>
    </div>
    </div>
   

  </div>
  </div>
  )
}

export default Home