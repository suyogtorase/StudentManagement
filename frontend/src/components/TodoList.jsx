import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";

const TodoList = ({ refreshTrigger }) => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("/api");

      setTodos(res.data.todos);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [refreshTrigger]);

  const toggleComplete = async (todo) => {
    try {
      await axios.put(`/api/update/${todo._id}`, {
        completed: !todo.completed,
      });

      fetchTodos();

    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/delete/${id}`);

      fetchTodos();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-5">

      {todos.map((todo) => (
        <div
          key={todo._id}
          className="bg-gray-800 border border-gray-700 rounded-2xl p-5 flex items-center justify-between"
        >

          <div className="flex items-center gap-4">

            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo)}
              className="w-5 h-5"
            />

            <div>
              <p className={`text-lg ${
                todo.completed
                  ? 'line-through text-gray-500'
                  : 'text-white'
              }`}>
                {todo.title}
              </p>

              <p className="text-sm text-gray-400">
                {new Date(todo.createdAt).toLocaleString()}
              </p>
            </div>

          </div>

          <button
            onClick={() => handleDelete(todo._id)}
            className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-xl"
          >
            <Trash2 className="w-5 h-5" />
          </button>

        </div>
      ))}

    </div>
  );
};

export default TodoList;