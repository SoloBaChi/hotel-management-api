
const http = require('http');
const Room = require('./controller');
// console.log(room)

//creating a port or using the default port value
const PORT = process.env.PORT || 3000;

//creating a server 
const server = http.createServer(async(req,res)=>{
// /api/v1/rooms-types :GET
if(req.url === '/api/v1/room-types' && req.method === GET){
//get the rooms
const rooms = await Room.getRooms();
//setting the status code and content-type
res.writeHead(200,{'Content-Type':'Application/json'})
//send the data
res.end(JSON.stringify(rooms))
}

// /api/room-types:id GET
else if(req.url.match(/\/api\/v1\/room-types\/([0-9]+)/) && req.method === 'GET'){
try{
//get id from the url
const id  = req.url.split("/")[4];
//get room
const room = await Room.getRoom(id);
//set status code and content-type
res.writeHead(200,{'Content-Type':'Application/json'})
//send the data
res.end(JSON.stringify(room))
}
catch(err){
//set the status code and content-type
res.writeHead(404,{'Content-Type':'Application/json'})
//send the error
res.end(JSON.stringify({message:err}))
}
}


// /api/room-types/:id :UPDATE
else if(req.url.match(/\/api\/v1\/room-types\/([0-9]+)/) && req.method === 'PATCH'){
try{
//get id from the url
const id  = req.url.split("/")[4];
//get room
const updatedTodo = await Room.updateRoom(id);
//set status code and content-type
res.writeHead(200,{'Content-Type':'Application/json'})
//send the data
res.end(JSON.stringify({updatedTodo}))
}
catch(err){
//set the status code and content-type
res.writeHead(404,{'Content-Type':'Application/json'})
//send the error
res.end(JSON.stringify({message:err}))
}
}

// /api/room-types/:id :DELETE
else if(req.url.match(/\/api\/v1\/room-types\/([0-9]+)/) && req.method === 'DELETE'){
try{
//get id from the url
const id  = req.url.split("/")[4];
//get room
const message = await Room.deleteRoom(id);
//set status code and content-type
res.writeHead(200,{'Content-Type':'Application/json'})
//send the data
res.end(JSON.stringify({message}))
}
catch(err){
//set the status code and content-type
res.writeHead(404,{'Content-Type':'Application/json'})
//send the error
res.end(JSON.stringify({message:err}))
}
}

//if there is no available route
else{
res.writeHead(404,{'Content-Type':'Application/json'})
//send the error
res.end(JSON.stringify({message:"Route not found"}))
}
})

//listen to server
server.listen(PORT,()=>{
	console.log(`server listening on port: ${PORT}`)
})