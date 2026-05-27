import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import API from "../services/api";

function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await API.get(`/jobs/${id}`);

        setJob(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJob();
  }, [id]);

  if (!job) {
    return (
      <div className="container mt-5">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <h2>{job.title}</h2>

        <hr />

        <p>
          <strong>Company:</strong> {job.company}
        </p>

        <p>
          <strong>Location:</strong> {job.location}
        </p>

        <p>
          <strong>Salary:</strong> ₹{job.salary}
        </p>

        <p>
          <strong>Job Type:</strong> {job.jobType}
        </p>

        <p>
          <strong>Description:</strong>{" "}
          {job.description}
        </p>

        <h4>Qualifications</h4>

        <ol>
          {job.qualifications.map(
            (qualification, index) => (
              <li key={index}>
                {qualification}
              </li>
            )
          )}
        </ol>
      </div>
    </div>
  );
}

export default JobDetails;