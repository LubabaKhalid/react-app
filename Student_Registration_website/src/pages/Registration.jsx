import React, { useState } from 'react';
import './Registration.css';

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    
    age: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    subject: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for matching passwords
    if (formData.password === formData.confirmPassword) {
      setSuccessMessage("Registered successfully! Thank you.");
      setFormData({
        name: "",
        city: "",
       
        age: "",
        gender: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setSuccessMessage("Passwords do not match.");
    }
  };

  return (
    <div className="registration-form">
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  required
>
  <option value="">Select Subject</option>
  <option value="Information Security">Information Security</option>
  <option value="Data Structure">Data Structure</option>
  <option value="Artificial Intelligence">Artificial Intelligence</option>
  <option value="Statistics">Statistics</option>
</select>
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        
        <button type="submit">Register</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default Registration;
