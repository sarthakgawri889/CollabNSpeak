import express from "express";
import {
  addUser,
  getUsers,
  updateUser,
  updateUserLevel,
  updateUserRecent,
} from "../controller/user-controller.js";
const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUsers);
route.put("/editusers", updateUser); 
route.put("/updateLevel", updateUserLevel);
route.put("/updateRecent", updateUserRecent);
export default route;
