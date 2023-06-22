import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (<React.Fragment>
        <div className="auth-header">
        <h1 className="auth-header-title">FORGOT PASSWORD</h1>
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
                 <button type="submit" className="btn-submit">
                    Send Link Notification
                 </button>

                <Link to={"/signin"} className="link-text-center">
                    Back to login
                </Link>
                </form>
        </div>
    </React.Fragment>
)}














export default ForgotPassword;