import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  // looking for the first value (index of 0) in the jobs array
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    // fetching the api information then changing it into json format
    const response = await fetch(url);
    const newJobs = await response.json();
    // setting the newJobs variable to the parameter in the setJobs array
    setJobs(newJobs);
    setLoading(false);
  };

  // calling the fetchJobs function
  useEffect(() => {
    fetchJobs();
  },[]);

  // if the page is loading display loading... otherwise display jobs
  if (loading){
return (
<section className='section loading'>
  <h1>loading...</h1>
</section>
);
  }

  return <h2>jobs</h2>
}

export default App
