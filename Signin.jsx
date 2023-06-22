import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {

    return (<React.Fragment>
        <div className="auth-header">
        <h1 className="auth-header-title">WELCOME</h1>
        <p className="auth-header-subtitle">SIGN INTO ACCOUNT</p>
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
                <Link to="./forgot-password" className="link-end">
                    Forgot Password
                </Link>
                 <button type="submit" className="btn-submit">
                    Sign in
                 </button>

            </form>
        </div>
    </React.Fragment>
)}

export default Signin;