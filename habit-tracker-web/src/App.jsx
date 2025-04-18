
import { Route,Routes } from 'react-router-dom';
import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import SignInPage from './auth/sign-in/index.jsx';

export default function App() {
  return (
   <div>
    <Routes>
      <Route path='/auth/sign-in' element={<SignInPage />} />
    </Routes>
   </div>
  );
}


