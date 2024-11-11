import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { columns, EmployeeButtons } from '../../utils/EmployeeHelper'
import DataTable from 'react-data-table-component'

const List = () => {
  const [employees,setEmployees] = useState([])
  const [empLoading,setEmpLoading] = useState(false)
  const [filterEmployee,setFilterEmployee] = useState(null)

  const onEmployeeDelete = async (id)=>{
    const data =employees.filter(emp =>emp._id!==id)
    setEmployees(data)
  }

  useEffect(()=>{
    const fetchEmployees = async()=>{
      setEmpLoading(true)
      try{
        const response= await axios.get("http://localhost:3000/api/employees",
          {
            headers:{
              Authorization:`Bearer ${localStorage.getItem("token")}`
            },
          }
        )
        if(response.data.success){
          let sno=1
          const data = await response.data.employees.map((emp)=>({
            sno:sno++,
            name:emp.name,
            email:emp.email,
            mobileno:emp.mobileno,
            designation:emp.designation,
            gender:emp.gender,
            profileImage:<img width={40} className='rounded full' src={`http://localhost:3000/${emp.userId.profileimage}`}/>,
            action:(<EmployeeButtons Id={emp._id}/>)



          }))
          setEmployees(data)
          setFilterEmployee(data)

        }
      }catch(error){
        if(error.response && !error.response.data.success){
          alert(error.response.data.error)
        }
      }
      finally{
        setEmpLoading(false)
      }

    }

    fetchEmployees()
    
  },[])

  const handleSearch =()=>{
    const records= employees.filter((emp)=>{
      emp.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFilterEmployee(records)

  }
 


  return (
    <div className='p-6'>
      <div className='text-center'>
        <h3 className='text-2xl font-bold'>Manage Employee</h3>
      </div>
      <div className='flex justify-between items-center'>
      <input 
          type='text' 
          placeholder='Search' 
          className='px-4 py-0.5 border' 
          onChange={handleSearch} 
        />
      <Link to ="/admin-dashboard/add-employee"className='px-4 py-1 bg-teal-600 rounded text-white'>Add New Employee</Link>
      </div>
      <div className='mt-6'>
        <DataTable columns={columns} data={employees}  pagination/>
      </div>
    </div>
  )
}

export default List