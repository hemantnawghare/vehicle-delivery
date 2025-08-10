import express from "express"
import cors from "cors"
import {connectDB} from './config/db.js'
import dotenv from "dotenv"
import userRoute from "./routes/userRoute.js"

const app = express()
dotenv.config()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

connectDB();

app.use("/api/user", userRoute)

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})