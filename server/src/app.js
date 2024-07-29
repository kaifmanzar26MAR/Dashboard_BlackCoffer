import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import homeRouter from "./routes/home.routes.js";
import dataRouter from "./routes/data.routes.js"
const app= express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "https://dashboard-blackcoffer.onrender.com",
    credentials: true,
  })
);
const __dirname= path.resolve();
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes declaration
app.use("/api", homeRouter);
app.use("/api/data", dataRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
})

export { app };
