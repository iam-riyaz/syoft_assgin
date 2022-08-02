const express= require("express")

const mongoose=require("mongoose")



//middleware 


// mongo connect
const connect=require("./configs/db.js")

const User=require("../src/models/user.model")

// const Post=require("../src/models/post.model")

// const Comment=require("../src/models/comment.model")

const userController= require("./controllers/user.controller")

// const postController= require("./controllers/post.controller")

// const commentController= require("./controllers/comment.controller")

const app=express()

app.use(express.json()) 

app.use("/users",userController)

// app.use("/posts",postController)

// app.use("/comments",commentController)






app.listen(4000, async ()=>{
    try{
        await connect()
        console.log("port is working fine")
    }
    catch{
        console.log("something is not working , riyaz solve the problem")
    }
})