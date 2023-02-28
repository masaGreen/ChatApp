
// const io = require("socket.io")



// const socketio = io(3800,{
//     cors:{
//         origin:"http://localhost:3000"
//     }
// })
// let users = []
// function checkUser(userId,socketId){
//     const newUser = users.find(user=>user.userId === userId)
//     if(newUser) return
//     users.push({socketId, userId})
//    }

// function findUser(id){
//     const socketUser = users.find(user=>user.userId === id)
//     return socketUser
// }
// function removeUser(id){
//     users =  users.filter(user=>user.socketId !== id)
//     // return newUsers
// }

// socketio.on("connection", (socket)=>{

//     socket.on("addUser", (user)=>{
       
//         checkUser(user, socket.id)
//         // console.log(users)
//         socketio.emit("getUsers", users)
//     })
 
//    socket.on("message", (data)=>{
   
//     const myUser = findUser(data.members[1])
    
//    if(myUser){
//     socketio.to(myUser.socketId).emit("newmess", data)
//    }
    
//    })

//    socket.on("disconnect",()=>{
    
//     removeUser(socket.id)
//     socketio.emit("leftUsers", users)
//    })
// }
    
//    )