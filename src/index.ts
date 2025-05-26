import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port : 8000 })

wss.on("connection", (socket) => {
    console.log("hello");
    setInterval(() => {
        socket.send("current price of SOLANA is : " + Math.random());
        
    }, 1000)

    socket.on("message", (e) => {
        console.log(e.toString());
        
    })


})