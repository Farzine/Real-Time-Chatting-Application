import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import AuthRoutes from './routes/AuthRoutes.js';
import MessageRoutes from  './routes/MessageRoutes.js';
import { Server } from 'socket.io';

dotenv.config(); 
const app = express();
app.use(cors());
app.use(express.json());


// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use("/api/auth", AuthRoutes);
app.use("/api/messages",MessageRoutes);


const server = app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
    
});

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
    },
});
global.onlineUsers = new Map();
io.on("connection", (socket) => {
    global.chatSoket = socket;
    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);

    });
    socket.on("send-msg", (data) => {
        const sendUserSocket = onlineUsers.get(data.to);
        if (sendUserSocket) {
            socket.to(sendUserSocket).emit("msg-recieve", { message: data.message, from: data.from});
        }
    });
});