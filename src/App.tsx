import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';


// Implement lazy loading
const Home = lazy(() => import('./pages/Home'));
const Decision = lazy(() => import('./pages/Decision'));
const SignupDecision = lazy(() => import('./pages/SignupDecision'));
const Verify = lazy(() => import('./pages/Verify'));
const VerifySignin = lazy(() => import('./pages/VerifySignin'));
const Confirmation = lazy(() => import('./pages/Confirmation'));
const UserDetail = lazy(() => import('./pages/UserDetail'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/decision" element={<Decision />} />
          <Route path="/signup-decision" element={<SignupDecision />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/verify-signin" element={<VerifySignin />} />
          <Route path="/confirm-page" element={<Confirmation />} />
          <Route path="/user-detail" element={<UserDetail />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App
