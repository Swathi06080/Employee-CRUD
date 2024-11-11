import React from 'react'
import axios from 'axios';

const deleteEmployee = async (id) => {
    try {
      // Make the API call to delete the employee
      await axios.delete(`http://localhost:3000/api/employees/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // Update the employee list
      fetchEmployees();
    } catch (error) {
      console.error(error);
      alert('Error deleting employee');
    }
  };
  

  export default  deleteEmployee;