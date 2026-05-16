import { Todo } from "../model/todoModel.js";

// Create Todo
export const createTodo = async (req, res) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Title is required"
            });
        }

        const todo = await Todo.create({ title });

        return res.status(201).json({
            success: true,
            todo
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Todos
export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            todos
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update Todo
export const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await Todo.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            });
        }

        return res.status(200).json({
            success: true,
            todo
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete Todo
export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        await Todo.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Todo deleted"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};