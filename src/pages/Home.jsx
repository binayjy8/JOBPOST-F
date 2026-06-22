import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import API from "../services/api";
import JobCard from "../components/JobCard";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  const fetchJobs = async () => {
    try {
      const response = await API.get("/jobs");
      setJobs(response.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to fetch jobs"
      );
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/jobs/${id}`);

      toast.success("Job deleted successfully");

      fetchJobs();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to delete job"
      );
    }
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (search && filteredJobs.length === 0) {
      toast.info("No matching jobs found");
    }
  }, [search, filteredJobs.length]);

  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by job title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              className="col-md-4 mb-4"
              key={job._id}
            >
              <JobCard
                job={job}
                handleDelete={handleDelete}
              />
            </div>
          ))
        ) : (
          <h4 className="text-center">
            No jobs available
          </h4>
        )}
      </div>
    </div>
  );
}

export default Home;