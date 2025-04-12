import User from './Models/User.js'
import bcrypt from 'bcryptjs'
import connectToDatabase from './DB/Database.js'
const userRegister = async () => {
    connectToDatabase()
    try{
        const hashPassword = await bcrypt.hash("admin", 10)
        const newUser = new User({
            name: "joshua",
            email: "joshua@gmail.com",
            password: hashPassword,
            role: "healthWorker",
        })
        await newUser.save()
    } catch {
        console.log(err)
    }
}


userRegister(); 