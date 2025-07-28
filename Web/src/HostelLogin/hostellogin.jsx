import React from "react";
import './hostellogin.css';

function Hostellogin() {
    return(
        <div className="login-container">
            <form className="login-box form-group">
                <h2>Hostel Admin Login</h2>

                <label className="form-group">Admin ID</label>
                <input type="text" name="adminid" placeholder="Employer Admin ID"/>

                <label>Password</label>
                <input type="" name="" placeholder="Enter your password"/>
                <p>Use the ID sent to your email to log back in</p>

                <button className="login-btn login-btn:hover" type="submit">Login</button>
            </form>
        </div>
    )
}
export default Hostellogin;

