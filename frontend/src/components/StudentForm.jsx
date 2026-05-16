import { useState } from "react";
import axios from "axios";

const StudentForm = ({ onStudentAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post("/api/create", formData);

      alert("Student added successfully");

      setFormData({
        name: "",
        email: "",
        course: "",
        age: "",
      });

      onStudentAdded();

    } catch (error) {
      console.log(error);
      alert("Error adding student");
    }
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">

      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Add Student
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-600 text-white outline-none"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Student Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-600 text-white outline-none"
          required
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-600 text-white outline-none"
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-600 text-white outline-none"
          required
        />

        <button
          type="submit"
          className="w-full bg-linear-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold"
        >
          Add Student
        </button>

      </form>

    </div>
  );
};

export default StudentForm;