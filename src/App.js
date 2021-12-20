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

  // calling the fetchJobs function when the app renders
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>loading...</h1>
      </section>
    );
  }

  // destructuring the first item in the jobs array (pulled from the api) and putting the value variable in as the parameter
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {/* iterate the jobs array tp render the company keys as the info inside the buttons */}
          {jobs.map((item, index) => {
            return (
              // once button is clicked changes state value in order to cycle through the index's of the jobs array to display all of the different jobs
              <button key={item.id} onClick={()=> setValue(index)}>
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duties, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duties}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>

  );
}

export default App