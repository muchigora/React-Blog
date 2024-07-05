import "./login.css";

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>

        <form className='loginForm'>
            <label>Email</label>
            <input type="Email" placeholder='Enter your email address'/>
            <label>Password</label>
            <input type="password" placeholder='Enter your password'/>

            <button className='loginButton'>Login</button>
    
        </form>

        <button className='registerButton'>Register</button>
      
    </div>
  )
}
