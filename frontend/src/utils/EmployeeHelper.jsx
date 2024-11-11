import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import deleteEmp from '../components/employee/Delete'

const EmployeeHelper = () => {


    
  return (
    <div >
        <button
        className='px-3 py-1 bg-yellow-600 text-white'
         > Edit

        </button>

        <button
        className='px-3 py-1 bg-red-600 text-white'
         > Delete

        </button>

    </div>
  )
}

export const columns =[
    {
        name:"Unique No",
        selector:(row) =>row.sno,
        width:"100px"

    },
   
    {
        name:"Image",
        selector:(row) =>row.profileImage,
       width:"100px"

    },
    {
        name:"Name",
        selector:(row) =>row.name,
        sortable:true,
        width:"100px"

    },
    {
        name:"Email",
        selector:(row) =>row.email,
         width:"100px"

    },

    {
        name:"Mobile no",
        selector:(row) =>row.mobileno,
          width:"130px"

    },
    {
        name:"Designation",
        selector:(row) =>row.designation,
         width:"130px"

    },
    {
        name:"Gender",
        selector:(row) =>row.gender,
         width:"100px"

    },
    {
        name:"Action",
        selector:(row) =>row.action,
     
    }



]
const handleDelete = (id) => {
    deleteEmployee(id);
  };

export const EmployeeButtons=({Id})=>{
    const navigate = useNavigate()
  
    return (
        <div className='flex space-x-3'>
            <button
            className='px-3 py-1 bg-yellow-600 text-white'
            onClick={()=> navigate(`/admin-dashboard/employees/edit/${Id}`)}
             > Edit
    
            </button>
    
            <button
            className='px-3 py-1 bg-red-600 text-white'
            onClick={() => handleDelete(employee._id)}
             > Delete
    
            </button>
    
        </div>
      )


}

export const EmployeeButton=({Id,onEmployeeDelete})=>{
    const navigate= useNavigate();

    // const handleDelete = async(id)=>{
    //     const confirm = window.confirm("do you want to delete")
    //     if(confirm){
    //         try{
    //             const response = await axios.delete(`http://localhost:3000/api/employees/${id}`,
                    
    //                     {
    //                         headers:{
    //                           Authorization:`Bearer ${localStorage.getItem("token")}`
    //                         },
    //                       }
                    
    //             )
    //             if(response.data.success){
    //                 onEmployeeDelete(id)
    //             }

    //         }
    //         catch(error){

    //         }
    //     }
       

    // }
}

export default EmployeeHelper