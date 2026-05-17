import mongoose from "mongoose";

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
