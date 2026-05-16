import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, Pencil } from "lucide-react";

const StudentList = ({ refreshTrigger }) => {

  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [editData, setEditData] = useState({
    name: "",
    email: "",
    course: "",
    age: "",
  });

  const fetchStudents = async () => {
    try {

      const res = await axios.get("/api");

      setStudents(res.data.students);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [refreshTrigger]);

  const handleDelete = async (id) => {
    try {

      await axios.delete(`/api/delete/${id}`);

      fetchStudents();

    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (student) => {
    setEditingId(student._id);

    setEditData({
      name: student.name,
      email: student.email,
      course: student.course,
      age: student.age,
    });
  };

  const handleUpdate = async (id) => {
    try {

      await axios.put(`/api/update/${id}`, editData);

      setEditingId(null);

      fetchStudents();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-6">

      {students.map((student) => (

        <div
          key={student._id}
          className="bg-gray-800 border border-gray-700 rounded-2xl p-6"
        >

          {editingId === student._id ? (

            <div className="space-y-4">

              <input
                type="text"
                value={editData.name}
                onChange={(e) =>
                  setEditData({ ...editData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-600 text-white"
              />

              <input
                type="email"
                value={editData.email}
                onChange={(e) =>
                  setEditData({ ...editData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-600 text-white"
              />

              <input
                type="text"
                value={editData.course}
                onChange={(e) =>
                  setEditData({ ...editData, course: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-600 text-white"
              />

              <input
                type="number"
                value={editData.age}
                onChange={(e) =>
                  setEditData({ ...editData, age: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-600 text-white"
              />

              <button
                onClick={() => handleUpdate(student._id)}
                className="bg-green-500 text-white px-6 py-2 rounded-xl"
              >
                Save
              </button>

            </div>

          ) : (

            <div className="flex items-start justify-between">

              <div>
                <h2 className="text-2xl font-bold text-white">
                  {student.name}
                </h2>

                <p className="text-gray-300 mt-2">
                  Email: {student.email}
                </p>

                <p className="text-gray-300">
                  Course: {student.course}
                </p>

                <p className="text-gray-300">
                  Age: {student.age}
                </p>

                <p className="text-gray-500 text-sm mt-3">
                  {new Date(student.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="flex gap-3">

                <button
                  onClick={() => handleEdit(student)}
                  className="bg-yellow-500 text-white p-3 rounded-xl"
                >
                  <Pencil className="w-5 h-5" />
                </button>

                <button
                  onClick={() => handleDelete(student._id)}
                  className="bg-red-500 text-white p-3 rounded-xl"
                >
                  <Trash2 className="w-5 h-5" />
                </button>

              </div>

            </div>

          )}

        </div>

      ))}

    </div>
  );
};

export default StudentList;