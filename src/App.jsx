import React, { useEffect, useState } from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useParams, Navigate } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Mainlayout from './layouts/Main.layout'
import Jobspage from "./pages/Jobs.page";
// import Notfound from "./pages/Notfound.page";
import JobPage from "./pages/Job.page";
import AddJobPage from "./pages/AddJob.page";
import EditJobpage from "./pages/EditJob.page";
import { jobLoader, userLoader } from "./data/loaderData";
import JobsService from "./service/jobsService";
import { FetchClient } from "./service/fetchClient";
import Loginpage from "./pages/Login.page";
import Signuppage from "./pages/Signup.page";
import Talentspage from "./pages/Talents.page";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import UserProfile from "./pages/UserProfile";
import { parseToJson } from "./utils/parseJSON.utils";
import SendEmailPage from "./pages/SendEmailPage";
import EditProfile from "./pages/EditProfile";
import TalentViewPage from "./pages/TalentViewPage";

const App = () => {
  const accessToken = window.localStorage.getItem('accessToken');
  const user = window.localStorage.getItem('user');
  const userAdmin = window.localStorage.getItem('userAdmin');

  const userObj = parseToJson(user)

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
          <Route path="/profile/:id" element={<UserProfile user={parseToJson(user)}/>} loader={userLoader}/>
          <Route path="/edit-profile/:id" element={<EditProfile />} loader={userLoader}/>
          <Route path="/" element={<Navigate to={`/profile/${userObj && userObj.id}`} />} />
          <Route path="/apply/:id" element={<SendEmailPage />} loader={jobLoader}/>
          

        </>
      ) : (
        <>
          <Route path="/edit-job/:id" element={<EditJobpage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>} />
          <Route path="/" element={<Navigate to="/admin-dashboard" />} />
          <Route path="/talent/:id" element={<TalentViewPage />} />
          <Route path="/email-talent/:id" element={<SendEmailPage />} loader={userLoader}/>

        </>
      )}
      </Route>
    </Route>
  )
  );
  return <RouterProvider router={router}/>
};

export default App;
