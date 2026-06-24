import { Link } from "react-router-dom";
import loginImage from '../assets/21426.jpg';

function LoginPage(){
   return (
            <div className="container">

                        <div className="left-section">
                        <img
                            src={loginImage}
                            alt="Login"
                            className="login-image"
                        />
                        </div>

                <div className="right-section">
                <div className="login-card">

                    <div className="logo">
                    <h1>STUDENT</h1>
                    <h2>MANAGEMENT SYSTEM</h2>
                    </div>

                    <p className="subtitle">Login to your account</p>

                    <input type="text" placeholder="Username" className="input-field" />
                    <input type="password" placeholder="Password" className="input-field" />

                    <div className="options">
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>

                    <a href="#">Forgot Password?</a>
                    </div>

                    <button className="login-btn">LOGIN</button>

                    <p className="footer-text">
                    Don't have an account? <Link to="/register">Create</Link>
                    </p>

                </div>
                </div>

            </div>
);
}


export default LoginPage;
