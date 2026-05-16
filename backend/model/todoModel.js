import mongoose from "mongoose";

// sudo apt update
// sudo apt install gnupg curl -y

// curl -fsSL https://pgp.mongodb.com/server-7.0.asc | \
// sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
// --dearmor

// echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list 

// sudo apt update

// sudo apt install mongodb-org -y

// sudo systemctl start mongod
// sudo systemctl enable mongod

// sudo systemctl status mongod -> tocheck status

// mongosh -> for checking

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },

    completed: {
        type: Boolean,
        default: false,
    }

}, { timestamps: true });

const Todo = mongoose.model("Todo", todoSchema);

export { Todo };