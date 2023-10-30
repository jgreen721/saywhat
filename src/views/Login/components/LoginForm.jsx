import React, {useRef} from 'react'

const LoginForm = ({toggleForm,setToggleForm}) => {
    const loginFormRef = useRef();
  return (
    <form className="form" ref={loginFormRef} action="">
      <div className="form-header">
            <h2>Welcome Back!</h2>
            <small>We're so excited to see you again!</small>
      </div>
    <div className="form-div">
      <input type="text" name="username" placeholder="Username..." autoComplete="off" className="form-control" />
    </div>
    <div className="form-div">
      <input type="text" name="password" placeholder="Password..." autoComplete="off" className="form-control" />
    </div>
    <div className="form-div">
      <button className="btn login-btn">Login</button>
    </div>
    <div className="form-div">
      <h5>First time here?</h5>
      <a onClick={()=>setToggleForm(!toggleForm)} className="toggle-form-link-btn">Sign Up</a>
    </div>
    </form>
  )
}

export default LoginForm