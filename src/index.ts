import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port : 8000 })

wss.on("connection", (socket) => {
    console.log("hello");
    socket.send("Hello, thx for connecting");
    
})