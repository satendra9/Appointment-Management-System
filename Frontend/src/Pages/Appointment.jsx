import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";

const Appointment = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/record")
      .then((res) => {
        setDetails(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);


    
  return (
    <div className="bg-[url('/imagee.png')] bg-cover h-screen w-full">
      <div  >
       
        <div className="flex flex-row ">
          <div className="mx-[10px] border border-slate-700 mt-3">
            <FaSearch id="search icon" />
          </div>
          <div className="border border-slate-700 bg-slate-300 mt-2">
            <input
              placeholder="Search by name..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4">
      {details
        .filter((user) => user.name.toLowerCase().includes(search))
        .map((detail, index) => (
          
            <div
              key={detail._id}
              className="border-2 rounded-md border-slate-900 border-spacing-2 w-full max-w-72 mt-5
       hover:bg-slate-500 border-solid bg-slate-600 text-white"
            >
              
              <div className="font-bold ml-2">{detail.name}</div>
              <div className="flex justify-between">
              <div className="ml-2">Age: {detail.age}</div>
              <div className="flex justify-around mr-6 bg-white w-7 h-7 border border-black">
              <Link to={`/record/details/${detail._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800' />
                  </Link>
              </div>
              </div>
              <div className="ml-2">Gender: {detail.gender}</div>

              <div className="flex flex-row">
                <Link to={`/record/EditUser/${detail._id}`}>
                <button
                  className="border border-slate-950 rounded-md bg-sky-700
         text-white max-w-14 text-center mx-10 mt-5 mb-3 p-2 font-serif font-semibold
          hover:bg-slate-400" 
                >
                  Edit
                </button>
                </Link>
                <Link to={`/record/DeleteUser/${detail._id}`}>
                <button
                  className="border border-slate-950 rounded-md bg-sky-700
         text-white max-w-18 text-center mx-10 mt-5 mb-3 p-2 font-serif font-semibold
          hover:bg-slate-400" 
                >
                  Delete
                </button></Link>
              </div>
            </div>
          
          
        ))}
    </div>
    </div>
  );
};

export default Appointment;
