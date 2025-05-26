"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8000 });
wss.on("connection", (socket) => {
    console.log("user connectd");
    socket.on("message", (e) => {
        console.log(e.toString());
        console.log(e.toString() == "ping");
        if (e.toString() == "ping") {
            socket.send("pong");
        }
    });
});
