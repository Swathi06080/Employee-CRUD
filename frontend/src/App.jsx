
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import List from './components/employee/List'
import EmployeeDashboard from './pages/EmployeeDashboard'
import Add from './components/employee/Add'
import Edit from './components/employee/Edit'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route path="employee" element={<List />} />
          <Route path="add-employee" element={<Add />} />
          <Route path="employees/edit/:id" element={<Edit />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
