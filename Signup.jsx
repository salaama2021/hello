import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    return <React.Fragment>
        <div className="auth-header">
        <h1 className="auth-header-title">WELCOME</h1>
        <p className="auth-header-subtitle">SIGNUP FOR AN ACCOUNT</p>
        </div>
        <div className="auth-body">
            <form className="auth-form-validation">
                <div className="input-field">
                    <label htmlFor="email" className="input-label">Email address</label>
                    <input type="text" className="input-control" id="email" placeholder="xyz@gmail.com"
                    autoComplete="off"
                    required
                    
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="password" className="input-label">Password</label>
                    <input type="text" className="input-control" id="password" placeholder="PASSWORD" 
                    autoComplete="off"
                    required
                    />
                </div>
                
                 <button type="submit" className="btn-submit">
                    Create account
                 </button>

            </form>
            <p className="text-center">
                Already have an account?{" "}
                <Link to={"/signin"} className="link-text-center">
                    Signin instead
                </Link>
            </p>
        </div>
    </React.Fragment>
}














export default Signup;