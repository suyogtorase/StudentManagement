import express from "express";

import {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent
} from "../controller/studentController.js";

const router = express.Router();

router.post("/create", createStudent);

router.get("/", getStudents);

router.put("/update/:id", updateStudent);

router.delete("/delete/:id", deleteStudent);

export default router;