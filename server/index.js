import express from 'express'
import authRouter from'./routes/auth.js'
import connectDatabase from './db/db.js'
import employeeRouter from './routes/employee.js'
import cors from 'cors'
import Employee from './models/Employee.js'


connectDatabase()
const app = express()
app.use(cors({
    origin:"*",
    methods:['GET','POST','UPDATE','DELETE','PUT']
}))
app.use(express.json())
app.use('/api/auth',authRouter)
app.use(express.static('public/uploads'))
app.use('/api/employees',employeeRouter)


app.listen(process.env.PORT, ()=>{
    console.log(`server is listening on the port ${process.env.PORT}`)
})

