import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PostJob from "./pages/PostJob.jsx";
import { useState } from "react";

function App() {
  const [jobListings, setJobListings] = useState([
    {
      title: "Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      description: "We are looking for a skilled software engineer to join our team.",
    },
    {
      title: "Product Manager",
      company: "Innovate Ltd.",
      location: "New York, NY",
      description: "Seeking an experienced product manager to lead our product team.",
    },
    {
      title: "UX Designer",
      company: "Design Studio",
      location: "Remote",
      description: "A creative UX designer needed for our remote team.",
    },
  ]);

  const addJobListing = (job) => {
    setJobListings([...jobListings, job]);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index jobListings={jobListings} />} />
        <Route exact path="/post-job" element={<PostJob addJobListing={addJobListing} />} />
      </Routes>
    </Router>
  );
}

export default App;
