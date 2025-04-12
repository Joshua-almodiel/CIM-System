import express from 'express'
import cors from 'cors'
import UserRouter from './Router/UserRouter.js'
import ParentRouter from './Router/Parent.js'
import connectToDatabase from './DB/Database.js'
import SalaryRouter from './Router/Salary.js'
import VaccinationRouter from './Router/Vaccination.js'
import SettingRouter from './Router/SettingRouter.js'
import DashboardRouter from './Router/DashboardRouter.js'

connectToDatabase()
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth', UserRouter)
app.use('/api/parent', ParentRouter)
app.use('/api/salary', SalaryRouter)
app.use('/api/vaccination', VaccinationRouter)
app.use('/api/setting', SettingRouter)
app.use('/api/dashboard', DashboardRouter)



app.listen(process.env.PORT, () => {
    console.log(`Server is running.. on PORT ${process.env.PORT}`)
})
