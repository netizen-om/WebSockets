"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8000 });
wss.on("connection", (socket) => {
    console.log("hello");
    setInterval(() => {
        socket.send("current price of SOLANA is : " + Math.random());
    }, 1000);
    socket.on("message", (e) => {
        console.log(e.toString());
    });
});
