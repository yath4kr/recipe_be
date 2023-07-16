import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./Routes/users.js";
import { recipeRouter } from "./Routes/recipes.js";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env);
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipeRouter);

const { DB_pass, DB_name } = process.env;

mongoose.connect(
  `mongodb+srv://chefYatharth:LetsMakeRecipes@recipes.cnrwhnh.mongodb.net/recipes?retryWrites=true&w=majority`
);

app.listen(3001, () => console.log("The server is up to rock...!!"));

// DB_pass = LetsMakeRecipes;
// DB_name = chefYatharth;
