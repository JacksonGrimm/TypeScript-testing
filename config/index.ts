import mongoose, { modelNames } from "mongoose";

try {
    mongoose.connect("mongodb://localhost/ts-db");
} catch (error) {
    console.log(error)   
}

const db = mongoose.connection

export { db }