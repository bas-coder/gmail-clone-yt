import React from 'react'
import {Button} from  '@mui/material';
import { login } from '../features/counter/userSlice';
import { auth, provider } from '../features/firebase';
import { useDispatch } from 'react-redux';

function Login() {

  const dispatch = useDispatch();

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(({user}) =>  {
      dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
      }))
    })
    .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <div className="login__container">
        <img src="https://i.im.ge/2022/08/31/OCiHD0.gmail.png" alt="Mail" />

        <div className='login__button'>
          <Button 
            variant="contained" 
            color="primary" 
            id="btn"
            onClick={signIn}>Login</Button>
        </div>

      </div>
    </div>
  )
}

export default Login
