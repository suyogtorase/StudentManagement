import { Student } from "../model/studentModel.js";

// Create Student
export const createStudent = async (req, res) => {
    try {
        const { name, email, course, age } = req.body;

        if (!name || !email || !course || !age) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const student = await Student.create({
            name,
            email,
            course,
            age
        });

        return res.status(201).json({
            success: true,
            student
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Students
export const getStudents = async (req, res) => {
    try {
        const students = await Student.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            students
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update Student
export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const student = await Student.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        return res.status(200).json({
            success: true,
            student
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete Student
export const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        await Student.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Student deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};