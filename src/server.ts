import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createNewUser, signin } from "./handlers/user";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "LMAO" });
});

app.post("/user", createNewUser);
app.post("/signin", signin);

export default app;
