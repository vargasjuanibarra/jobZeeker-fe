import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useParams } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Mainlayout from './layouts/Main.layout'
import Jobspage from "./pages/Jobs.page";
import Notfound from "./pages/Notfound.page";
import JobPage from "./pages/Job.page";
import AddJobPage from "./pages/AddJob.page";
import EditJobpage from "./pages/EditJob.page";
import { jobLoader } from "./components/loaderData";

const App = () => {
  
const addJob = async (newJob) => {
  // Adding new job
  await fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newJob)
  });
  return;
}

const updateJob = async (updatedJob) => {
  await fetch(`/api/jobs/${updatedJob.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updatedJob)
  });
  return;
}

const deleteJob = async(jobId) => {
  await fetch(`/api/jobs/${jobId}`, {
    method: 'DELETE'
  })
  return
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<Jobspage />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/jobs/:id" element={<JobPage removeJob={deleteJob}/>} loader={jobLoader} />
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>} />
      <Route path="/edit-job/:id" element={<EditJobpage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
    </Route>
  )
  );
  return <RouterProvider router={router}/>
};

export default App;
