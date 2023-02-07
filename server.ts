import express, { Router } from "express"
import { db } from "./config";
import { User } from "./models";

const PORT: any = process.env.PORT || 3001;
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use("/", Router)

db.once("open", ()=> {
    app.listen(PORT, ()=> {
        console.log(`running on http://localhost:${PORT}`)
    })
    const seed = async () => {
        await User.create({
            name: "Bill",
            pass: "password"
        })
    }
    seed()
})