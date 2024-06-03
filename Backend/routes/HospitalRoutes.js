import express from "express";
import { Hospital } from "../models/HospitalModel.js";

const router = express.Router();

//posting on to the server
router.post("/", async (req, res) => {
  try {
    if (!req.body.name || !req.body.age || !req.body.gender) {
      res.status(400).send({
        message: "Please input all the details required",
      });
    }

    const newRecord = {
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      appointmentdate: req.body.appointmentdate,
      doctor: req.body.doctor,
      phone: req.body.phone,
      paid: req.body.paid,
      pending: req.body.pending,
      disdate: req.body.disdate
    };

    const record = await Hospital.create(newRecord);
    return res.status(201).send(record);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

//getting id details
router.get("/:id", async (req,res)=> {
  try{
      const { id }  = req.params;

      const result = await Hospital.findById(id);
      return res.status(200).json(result)

  }catch(error){
      console.log(error.message);
      res.status(500).send({message: error.message});

  }
})

//getting from the server
router.get("/", async (req, res) => {
  try {
    const records = await Hospital.find({});
    res.status(200).json({
      data: records,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: error.message,
    });
  }
});

//updating user
router.put("/:id", async (req,res)=>{
  try{
      if(
          !req.body.name || 
          !req.body.age ||
          !req.body.gender ||
          !req.body.appointmentdate ||
          !req.body.doctor ||
          !req.body.phone
      ){
          return res.status(404).send({
              message: "input all the fields"
          })
      }

      const {id} = req.params;
      const result = await Hospital.findByIdAndUpdate(id, req.body);

      if(!result){
          return res.status(404).send("not found");
      }

      return res.status(200).send({message: "Updated successfully"});

  }catch(error){
      console.log(error.message);
      res.status(400).send({message: error.message});
  }
})

//deleting user
router.delete("/:id", async (req,res)=> {
  try{
      const { id }  = req.params;

      const result = await Hospital.findByIdAndDelete(id);

      if(!result){
          return res.status({message: "Book not found"});
      }
      return res.status(200).send({message: "Deleted successfully"});

  }catch(error){
      console.log(error.message);
      res.status(500).send({message: error.message});

  }
})

export default router;
