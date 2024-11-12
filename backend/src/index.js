import express from "express";
import cors from "cors";
import connectionToDatabase from "./db/connection.js";

const app = express();

app.listen(3000,()=>{
    console.log("server Running on port 3000");
    connectionToDatabase();
}) 