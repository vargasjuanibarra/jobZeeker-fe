import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useParams } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Mainlayout from './layouts/Main.layout'
import Jobspage from "./pages/Jobs.page";
import Notfound from "./pages/Notfound.page";
import JobPage from "./pages/Job.page";
import AddJobPage from "./pages/AddJob.page";
import EditJobpage from "./pages/EditJob.page";
import { jobLoader } from "./data/loaderData";
import JobsService from "./service/jobsService";
import { FetchClient } from "./service/fetchClient";
import Loginpage from "./pages/Login.page";
import Signuppage from "./pages/Signup.page";
import Talentspage from "./pages/Talents.page";

const App = () => {
const jobService = new JobsService(FetchClient)

const addJob = async (newJob) => {
  await jobService.createJob(newJob)
}

const updateJob = async (updatedJob) => {
  await jobService.updateJob(updatedJob)
}

const deleteJob = async(jobId) => {
  await jobService.deleteJob(jobId)
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<Jobspage />} />
      <Route path="/talents" element={<Talentspage />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/jobs/:id" element={<JobPage removeJob={deleteJob}/>} loader={jobLoader} />
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>} />
      <Route path="/edit-job/:id" element={<EditJobpage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
      <Route path="/login/" element={<Loginpage />} />
      <Route path="/register/" element={<Signuppage />} />
    </Route>
  )
  );
  return <RouterProvider router={router}/>
};

export default App;
