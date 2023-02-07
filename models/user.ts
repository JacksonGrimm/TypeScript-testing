import {Schema, model, Types} from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require:true
    }
})



userSchema.pre("save", async function (next) {
    if(this.isNew || this.isModified("password")){
        const salt: number = 7
        this.password = await bcrypt.hash(this.password || "", salt) 
    }
})

userSchema.methods.checkPassword = async function (password:string) {
    return bcrypt.compare(this.password, password)
}

const User = model("user", userSchema)

export { User } 


