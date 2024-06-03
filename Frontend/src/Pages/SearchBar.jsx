import React from 'react';
import {FaSearch} from 'react-icons/fa';
import { useState, useEffect } from 'react'
import axios from 'axios';

const SearchBar = () => {
    const [data, setData] = useState([]);
    const [records, setRecords] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/record').then((res)=>{
            setData(res.data.data)
            setRecords(res.data.data)
            
        })
            .catch(error=>
                console.log(error)
            );
    }, [])
    
    const Filter = (event)=> {
        console.log(setRecords(data.filter(f=> f.name.toLowerCase().includes(event.target.vale))))
        
    }
  return (
    <div className='flex justify-center'>
    <div className='flex flex-row'>
    <div className='mx-[10px] border border-slate-700 mt-1'><FaSearch id='search icon'/></div>
    <div className='border border-slate-700 bg-slate-300'>
        <input placeholder='Search by name...' onChange={Filter}/></div>
    </div>
    </div>
   
  )
}

export default SearchBar