import { Link } from "react-router-dom";

function JobCard({ job, handleDelete }) {
  return (
    <div className="card shadow-sm p-3 h-100">
      <h4>{job.title}</h4>

      <p>
        <strong>Company:</strong> {job.company}
      </p>

      <p>
        <strong>Location:</strong> {job.location}
      </p>

      <p>
        <strong>Job  Type:</strong> {job.jobType}
      </p>

      <div className="d-flex gap-2">
        <Link
          to={`/job/${job._id}`}
          className="btn btn-primary"
        >
          See Details
        </Link>

        <button
          className="btn btn-danger"
          onClick={() => handleDelete(job._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default JobCard;