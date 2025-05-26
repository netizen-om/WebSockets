import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port : 8000 })

wss.on("connection", (socket) => {
    console.log("user connectd");
    

    socket.on("message", (e) => {
        console.log(e.toString());
        console.log(e.toString() == "ping");
        

        if(e.toString() == "ping") {
            socket.send("pong");
        }

    })


})