import React, { useState } from "react";

function StudentForm() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: students.length + 1, // Serial Number
      ...formData,
    };

    setStudents([...students, newStudent]);
    setFormData({ name: "", gender: "", city: "" }); // reset form
  };

  return (
    <div style={{ margin: "30px", fontFamily: "Arial, sans-serif" }}>
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <select
          id="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <input
          type="text"
          id="city"
          placeholder="Enter City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {students.length > 0 && (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Gender</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// Inline styles
const formStyle = {
  marginBottom: "20px",
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px #ccc",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const tableStyle = {
  borderCollapse: "collapse",
  width: "80%",
  marginTop: "20px",
  background: "white",
  border: "1px solid #ccc",
};

export default StudentForm;
