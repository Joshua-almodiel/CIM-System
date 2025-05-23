import express from 'express'
import cors from 'cors'
import UserRouter from './Router/UserRouter.js'
import ParentRouter from './Router/Parent.js'
import connectToDatabase from './DB/Database.js'
import VitalRouter from './Router/Vital.js'
import VaccinationRouter from './Router/Vaccination.js'
import SettingRouter from './Router/SettingRouter.js'
import DashboardRouter from './Router/DashboardRouter.js'
import NotificationRouter from "./Router/NotificationRouter.js";
import ReportAnalytic from "./Router/ReportsAnalytics.js"

connectToDatabase()
const app = express()
app.use(cors({
    origin: "https://cim-system.vercel.app",
    credentials: true
}))
app.use(express.json())
app.use('/api/auth', UserRouter)
app.use('/api/parent', ParentRouter)
app.use('/api/vital', VitalRouter)
app.use('/api/vaccination', VaccinationRouter)
app.use('/api/setting', SettingRouter)
app.use('/api/dashboard', DashboardRouter)
app.use('/api/notifications', NotificationRouter);
app.use('/api/reportanalytic', ReportAnalytic);



app.listen(process.env.PORT, () => {
    console.log(`Server is running.. on PORT ${process.env.PORT}`)
})
