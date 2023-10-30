import React, {useRef, useState} from 'react'
import { useAppContext } from '../../context/AppContext'
import { LoginForm,RegisterForm } from './components'
import "./Login.css"

const Login = () => {
  const {handleLogin} = useAppContext();
  const [toggleForm,setToggleForm] = useState(false)

  return (
    <div className="login-parent view-parent">
    {/* <div className="login-overlay"></div> */}
  <div className="login-content-container">
    <div className="login-header-row">
      <h1>SayWhat 💬</h1>
    </div>
    <div className="login-message-area">
      <h4>Error -- Problem Loggin You In! :(</h4>
    </div>
    <div className="login-form-parent">
      <div className={toggleForm ? "login-form-card" : "login-form-card flip-card"}>
        {/* <div className={toggleForm ? "login-form-inner flip-card" : "login-form-inner"}> */}
        <div className="form-side front">
            <LoginForm setToggleForm={setToggleForm} toggleForm={toggleForm}/>
         </div>
         <div className="form-side back">
            <RegisterForm setToggleForm={setToggleForm} toggleForm={toggleForm}/>
        </div>
        {/* </div> */}
      </div>
      </div>
      </div>
    </div>
  )
}

export default Login