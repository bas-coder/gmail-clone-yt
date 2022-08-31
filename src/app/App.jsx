import React from 'react';
import { useEffect } from 'react';
import { login } from '../features/counter/userSlice';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import SendMail from '../components/SendMail';
import Login from '../pages/Login';
import Mail from './mail';
import { auth } from '../features/firebase';
import EmailList from "../components/EmailList"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from '../features/counter/mailSlice';
import { selectUser } from '../features/counter/userSlice';
import IconSection from '../components/IconSection';
import { useDispatch } from "react-redux";

function App() {

 const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
 const user = useSelector(selectUser); 
 const dispatch = useDispatch()
  
useEffect(() => {
  auth.onAuthStateChanged(user => {
    if (user) {
      //the user is logged in
      dispatch(login({
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL
      }))
    }
  })
}, []);

 return (
    <Router>
      {!user ? (
        <Login />
       ): (
        <div className="App">
          <Header />

          <div className='app__body'>
          <Sidebar />

          <Routes>
            <Route path="/mail" element={<Mail />}/>
            <Route path="/" element={ <EmailList /> } />          
          </Routes>
          
          <IconSection />
        </div>

        { sendMessageIsOpen && <SendMail /> }
        </div>
       )}

    </Router>
  );
}

export default App;
