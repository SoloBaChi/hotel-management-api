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
let room = roomData.find(item => item.id === parseInt(id));
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
async updateRoom(id){
return new Promise((resolve,reject)=>{
//get the room
let room = roomData.filter(item => item.id === parseInt(id));
if(!room){
reject(`The room with id ${id} does not exist!`)
}
resolve(room)
})
}

//Delete an existing room
async deleteRoom(id){
return new Promise((resolve,reject)=>{
let room = roomData.filter(item => item.id !== parseInt(id));
if(!room){
reject(`The room with id ${id} does not exist!`)
}
resolve(`room with the id ${id} has been succesfully deleted!`)
})
}
}