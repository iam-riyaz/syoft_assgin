
const express= require("express")

const User=require("../models/user.model")

const app=express()

const crudController=require("./crud.controller")





app.get("", crudController(User).get)



app.post("",crudController(User).post)

module.exports = app