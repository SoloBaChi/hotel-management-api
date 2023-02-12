const roomData = require('./data');

class RoomController{
//get all rooms
async getRooms(){
//return all the rooms
return new Promise((resolve,reject)=> resolve(roomData))
}

//get a room
async getRoom(id){
return new Promise((resolve,reject)=>{
//get room
let room = roomData.find(todo => todo.id === parseInt(id));
if(room){
 resolve(room)
}
else{
reject(`Room identification number ${id} not found!`)
}
})
}

//create a new room
async createRoom(room){
return new Promise((resolve,reject)=>{
let newRoom = {
 id: 1 + Math.floor(Math.random() * 12),
 ...room,
}
//return new room
resolve(newRoom)
})
}

//update an existing room
}