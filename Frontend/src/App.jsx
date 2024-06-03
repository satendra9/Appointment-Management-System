import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Appointment from "./Pages/Appointment.jsx";
import Doctors from "./Pages/Doctors.jsx";
import SearchBar from "./Pages/SearchBar.jsx";
import Patients from "./Pages/Patients.jsx";
import EditUser from "./components/EditUser.jsx";
import DeleteUser from "./components/DeleteUser.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Details } from "./components/Details.jsx";

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/record/appointments" element={<Appointment />}/>
      <Route path="/record/doctors" element={<Doctors />} />
      <Route path="/record/searchbar" element={<SearchBar />} />
      <Route path="/record/patients" element={<Patients />} />
      <Route path="/record/EditUser/:id" element={<EditUser />} />
      <Route path="/record/DeleteUser/:id" element={<DeleteUser />} />
      <Route path="/record/Details/:id" element={<Details />} />
      
    </Routes>
  );
};

export default App;
