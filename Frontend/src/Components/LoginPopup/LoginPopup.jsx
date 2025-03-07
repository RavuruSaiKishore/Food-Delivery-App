import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {

  const { setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  }

  const onLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission
  
    let baseUrl = "https://food-delivery-app-backend-4uzo.onrender.com";
    let newUrl = `${baseUrl}${currState === "Login" ? "/api/user/login" : "/api/user/register"}`;
  
      const response = await axios.post(newUrl, data);
  
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token); // Fixed typo here
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    
  };
  





  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className='login-popup-inputs'>

          {currState === "Login" ? <></> : <input name='name' onChange={onChangehandler} value={data.name} type="text" placeholder='Your name' required />}

          <input name='email' onChange={onChangehandler} value={data.email} type="email" placeholder='Your email' required />
          <input name='password' onChange={onChangehandler} value={data.password} type="password" placeholder='Your password' required />
        </div>
        <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Controlling, i agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login"
          ? <p>Create a new Account?<span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
          : <p>Already have an account?<span onClick={() => setCurrState("Login")}>Login Here</span></p>
        }


      </form>

    </div>
  )
}

export default LoginPopup
