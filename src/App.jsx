import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useParams, Navigate } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Mainlayout from './layouts/Main.layout'
import Jobspage from "./pages/Jobs.page";
// import Notfound from "./pages/Notfound.page";
import JobPage from "./pages/Job.page";
import AddJobPage from "./pages/AddJob.page";
import EditJobpage from "./pages/EditJob.page";
import { jobLoader } from "./data/loaderData";
import JobsService from "./service/jobsService";
import { FetchClient } from "./service/fetchClient";
import Loginpage from "./pages/Login.page";
import Signuppage from "./pages/Signup.page";
import Talentspage from "./pages/Talents.page";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import UserProfile from "./pages/UserProfile";
import { parseToJson } from "./utils/parseJSON.utils";
import Apply from "./pages/Apply";

const App = () => {
  const accessToken = window.localStorage.getItem('accessToken');
  const user = window.localStorage.getItem('user');
  const userAdmin = window.localStorage.getItem('userAdmin');

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
    <Route element={<Mainlayout />}>
      <Route path="/jobs" element={<Jobspage />} />
      <Route path="/talents" element={<Talentspage />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/jobs/:id" element={<JobPage removeJob={deleteJob} userAdmin={parseToJson(userAdmin)} user={user} accessToken={accessToken}/>} loader={jobLoader} />
      

      {(!parseToJson(user) && !parseToJson(accessToken)) && (
        <>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Signuppage />} />
          <Route index path="/" element={<HomePage />} />
        </>
      )}

      

      <Route element={<ProtectedRoute />}>
        <Route path="/login" element={<Navigate to="/" />} />
        <Route path="/register" element={<Navigate to="/" />} />
        {!parseToJson(userAdmin) ? (
          <>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/" element={<Navigate to="/profile" />} />
          <Route path="/apply/:id" element={<Apply to="/profile" />} loader={jobLoader}/>
          

        </>
      ) : (
        <>
          <Route path="/edit-job/:id" element={<EditJobpage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>} />
          <Route path="/" element={<Navigate to="/admin-dashboard" />} />
        </>
      )}
      </Route>
    </Route>
  )
  );
  return <RouterProvider router={router}/>
};

export default App;
