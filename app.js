
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
res.writeHead(400,{'Content-Type':'Application/json'})
//send the error
res.end(JSON.stringify({message:err}))
}
}
})
