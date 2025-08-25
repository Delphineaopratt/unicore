import React, { useState } from 'react';
import './OnboardingForm.css';

export default function OnboardingForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    program: '',
    cgpa: '',
    jobType: '',
    skills: '',
    transcript: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Send to parent or server
  };

  return (
    <form className="onboarding-form" onSubmit={handleSubmit}>
      <h2>Personalize Your Job Feed</h2>
      <label>
        Program of Study:
        <input type="text" name="program" onChange={handleChange} required />
      </label>
      <label>
        CGPA:
        <input type="text" name="cgpa" onChange={handleChange} required />
      </label>
      <label>
        Ideal Type of Job:
        <input type="text" name="jobType" onChange={handleChange} required />
      </label>
      <label>
        Skills:
        <input type="text" name="skills" onChange={handleChange} required />
      </label>
      <label>
        Upload Transcript:
        <input type="file" name="transcript" onChange={handleChange} required />
      </label>
      <button type="submit">Generate Feed</button>
    </form>
  );
}
