import "./register.css";

export default function Register() {
  return (
    <div className="login">
        <span className="registerTitle">Register</span>

        <form className='registerForm'>
            <label>Username</label>
            <input type="text" placeholder='Enter your username'/>
            <label>Email</label>
            <input type="Email" placeholder='Enter your email address'/>
            <label>Password</label>
            <input type="password" placeholder='Create a password'/>
            <label>Confirm Password</label>
            <input type="password" placeholder='Confirm your password'/>

            {/* <button className='registerButton'>Register</button> */}
            <button className="register-Button">Register</button>
    
        </form>

        <button className='login-Button'>Login</button>
      
    </div>
  )
}
