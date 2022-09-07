import React from 'react'
import { imgSrc } from '../static/imgSrc';
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
        <img src={imgSrc.login__img}/*"https://i.im.ge/2022/09/06/OR8hp8.gmail.png"*/ alt="Mail" />
        <h3>Gmail Workspace</h3>
        <div className='login__button'>
          <button 
            // variant="contained" 
            color="primary" 
            id="btn"
            onClick={signIn}>Login with 
            <span><img src={imgSrc.btn__google} alt="" /></span></button>
        </div>

        <div className="login__footer">
          <p>Loading standard view{" "}|{" "}
             <span>Load basic HTML</span>{" "}(for slow connections)</p>
        </div>

      </div>
    </div>
  )
}

export default Login
