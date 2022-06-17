<<<<<<< HEAD
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./containers/Dashboard";
import Settings from "./containers/Settings/Settings";
import Surveys from "./containers/Surveys";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/surveys" element={<Surveys />} />
        <Route path="/quizes" element={<></>} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<p>Error</p>} />
    </Routes>
  );
=======
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import SurveySlug from './pages/SurveySlug';

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Landing />} />
			<Route path='/dashboard' element={<Home />} />
			<Route path='/register' element={<Register />} />
			<Route path='/login' element={<Login />} />
			<Route path='/surveys/:slug' element={<SurveySlug />} />
		</Routes>
	);
>>>>>>> bf3f92ded177f3f5304922affe07e4fb4e7e21c4
};

export default App;
