import { useEffect, useState } from "react";

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
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/jobs/${id}`);

      fetchJobs();
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

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
        {filteredJobs.map((job) => (
          <div
            className="col-md-4 mb-4"
            key={job._id}
          >
            <JobCard
              job={job}
              handleDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;