import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formDta",formData); // Verify formData

    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });
    for (let [key, value] of formDataObj.entries()) {
      console.log('formdata',`${key}: ${value}`);
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/employees/add",
        formDataObj,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("response",response); // Verify response

      if (response.data.success) {
        navigate("/admin-dashboard/employee");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
        console.log(error)
      }
    }
  };





  return (
    <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
      <h2 className='text-2xl font-bold mb-6'>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Name
            </label>
            <input 
              type='text'
              name='name'
              placeholder='Enter name'
              onChange={handleChange}
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
              required
            ></input>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input 
              type='password'
              name='password'
              placeholder='Enter password'
              onChange={handleChange}
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
              required
            ></input>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input 
              type='text'
              name='email'
              onChange={handleChange}
              placeholder='Enter email'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
              required
            ></input>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Mobile No
            </label>
            <input 
              type='text'
              name='mobileno'
              onChange={handleChange}
              placeholder='Enter Mobile No'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
              required
            ></input>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Designation
            </label>
            <select 
              name='designation'
              onChange={handleChange}
              placeholder='Designation'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
              required
            >
              <option value="">Select Designation</option>
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Gender
            </label>
        <input 
          type="radio" 
          value="male" 
          name='gender'
          onChange={handleChange}
       /> 
       Male
        <input 
          type="radio" 
          value="female" 
          onChange={handleChange}
          name='gender'
         /> 
         Female
      
     </div>
     <div>
            <label className='block text-sm font-medium text-gray-700'>
              Designation
            </label>
            <select 
              name='course'
              onChange={handleChange}
              placeholder='course'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
              required
            >
              <option value="">Select course</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="BSC">BSC</option>
            </select>
          </div>
       <div>
        <label className='block text-sm font-medium text-gray-700' >
          Upload Image
        </label>
        <input
        type='file'
        name='image'
        onChange={handleChange}
        placeholder='Upload Image'
        accept='image/*'
        className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
        
        >
        </input>
       </div>
       
    </div>
     <button
       type='submit'
       className='w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded'

       > Add Employee
        </button>
      </form>
    </div>
  )
}

export default Add