import multer, { diskStorage } from 'multer'
import Employee from '../models/Employee.js'
import User from '../models/User.js'
import path from 'path'
import bcrypt from 'bcrypt'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage })

const addEmployee = async (req, res) => {
  try {
    const { name, email, password,mobileno, designation, gender, course, role,profileImage } = req.body
    if (!name || !email || !password) {
        return res.status(400).json({
          success: false,
          error: "Name, email, and password are required",
        });
      }
      console.log("request",req.body);

    if (!password) {
      return res.status(400).json({ success: false, error: "Password is required" });
    }

    const user = await User.findOne({ email })
    console.log("user",user)

    if (user) {
      return res.status(400).json({ success: false, error: "User already registered" });
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
      name,
      email,
      password: hashPassword,
      role,
      profileImage: req.file ? req.file.filename : ""
    })

    const savedUser = await newUser.save()

    const newEmployee = new Employee({
     userId: savedUser._id,
     name,
     email,
     profileImage,
      mobileno,
      designation,
      gender,
      course
    })

    await newEmployee.save()

    return res.status(200).json({ success: true, message: "Employee created" })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, message: "Server error in adding employee" })
  }
}


const getEmployees=async (req,res) =>{
    try{
        const employees = await Employee.find().populate('userId')
        return res.status(200).json({success:true,employees})
    }catch(error){
        return res.status(500).json({success:false,error:"get employee error"})

    }
}

const deleteEmployee = async (req,res) =>{
    try{
        const {id} = req.params;
        const deleteemp= await Employee.findByIdAndDelete({_id:id})
        return res.status(200).json({success:true,deleteemp})



    }
    catch(error){
        return res.status(500).json({success:false,error:"delete error"})

    }
}

export { addEmployee, upload ,getEmployees,deleteEmployee}