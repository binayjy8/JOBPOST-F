import { useState } from "react";
import { toast } from "react-toastify";

import API from "../services/api";

function PostJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    jobType: "",
    description: "",
    qualifications: "",
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
      const payload = {
        ...formData,
        qualifications: formData.qualifications.split(","),
      };

      await API.post("/jobs", payload);

      toast.success("Job posted successfully");

      setFormData({
        title: "",
        company: "",
        location: "",
        salary: "",
        jobType: "",
        description: "",
        qualifications: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to post job"
      );
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Post a Job</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          className="form-control mb-3"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="form-control mb-3"
          value={formData.company}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          className="form-control mb-3"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          className="form-control mb-3"
          value={formData.salary}
          onChange={handleChange}
          required
        />

        <select
          name="jobType"
          className="form-control mb-3"
          value={formData.jobType}
          onChange={handleChange}
          required
        >
          <option value="">Select Job Type</option>
          <option>Full-time (On-site)</option>
          <option>Part-time (On-site)</option>
          <option>Full-time (Remote)</option>
          <option>Part-time (Remote)</option>
        </select>

        <textarea
          name="description"
          placeholder="Job Description"
          className="form-control mb-3"
          rows="5"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="qualifications"
          placeholder="Qualification1, Qualification2"
          className="form-control mb-3"
          value={formData.qualifications}
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary">
          Post Job
        </button>
      </form>
    </div>
  );
}

export default PostJob;