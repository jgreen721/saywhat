import React, {useRef} from 'react'

const RegisterForm = ({toggleForm,setToggleForm}) => {
    const registerFormRef = useRef();
  return (
    <form className="form" ref={registerFormRef} action="">
        <div className="form-header">
            <h2>First Time? Welcome!</h2>
            <small>We're so happy to have you!</small>
      </div>
    <div className="form-div">
      <input type="text" name="username" placeholder="Username..." autoComplete="off" className="form-control" />
    </div>
    <div className="form-div">
      <input type="text" name="email" placeholder="Email..." autoComplete="off" className="form-control" />
    </div>
    <div className="form-div">
      <input type="text" name="password" placeholder="Password..." autoComplete="off" className="form-control" />
    </div>
    <div className="form-div">
      <input type="text" name="confirm" placeholder="Confirm..." autoComplete="off" className="form-control" />
    </div>
    <div className="form-div">
      <button className="btn login-btn">Register</button>
    </div>
    <div className="form-div">
      <h5>Already part of the family?</h5>
      <a onClick={()=>setToggleForm(!toggleForm)} className="btn toggle-form-link-btn">Sign In</a>
    </div>
    </form>
  )
}

export default RegisterForm