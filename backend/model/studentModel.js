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

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },

    course: {
        type: String,
        required: true,
        trim: true,
    },

    age: {
        type: Number,
        required: true,
    }

}, { timestamps: true });

const Student = mongoose.model("Student", studentSchema);

export { Student };