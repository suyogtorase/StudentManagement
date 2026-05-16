import { useState } from "react";
import axios from "axios";

const TodoForm = ({ onTodoAdded }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/create", { title });

      alert("Todo added");

      setTitle("");

      onTodoAdded();

    } catch (error) {
      console.log(error);
      alert("Error adding todo");
    }
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Add New Todo
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        <input
          type="text"
          placeholder="Enter todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-600 text-white outline-none focus:border-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-linear-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold"
        >
          Add Todo
        </button>

      </form>
    </div>
  );
};

export default TodoForm;