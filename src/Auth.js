import { Alert } from "bootstrap";
import React from "react";
import { useHistory , Route, useNavigate } from 'react-router-dom';


export default function (props) {
    const navigate = useNavigate();
    const login=()=>{
        alert("Button Clicked");
        navigate('/dashboard')
    } 
  return (
    <div className="auth-body">
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button className="btn btn-primary" onClick={()=>login()}>
                    Submit
                    </button>
                </div>
                <p className="forgot-password text-right mt-2">
                    Forgot <a href="#">password?</a>
                </p>
                </div>
            </form>
        </div>
    </div>
    
  )
}