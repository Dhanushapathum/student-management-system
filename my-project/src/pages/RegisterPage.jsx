import RegisterImg from '../assets/reg.jpg';
function Register(){
    return(
        <div className="register-container">
            <div className="left-section">
                  <h1>Create New Account</h1>
                  <p>Fill in the details to register as a new student</p>
                   <img src={RegisterImg} alt='Student Registration' className='register-image'/>
                    <div className="footer-text">
                       Already have an account? <a href="/">Login</a>
                    </div>
            </div>

                <div className="right-section">
                    <div className="register-card">
                        <h1> Student Registration</h1>
                        <p>Please fill in the details carefully</p>

                    
                        <form className="register-form">
                            
                            <div className="input-group">
                                <input type="text" placeholder="First Name" className="input-field" />
                                <input type="text" placeholder="Last Name" className="input-field" />
                            </div>
                            <div className="input-group">
                                <input type="email" placeholder="Email" className="input-field" />
                                <input type="text" placeholder="Phone" className="input-field" />
                            </div>
                            <div className="input-group">
                               <select className="input-field">
                                    <option value="">Select Department</option>
                                    <option value="AT">Department of Agricultural Technology</option>
                                    <option value="ET">Department of Environmental Technology</option>
                                    <option value="IAT">Department of Instrumentation and Automation Technology</option>
                                    <option value="ICT">Department of Information and Communication Technology</option>
                                </select>
                            </div>
                            <div className='input-group'>
                                <select className="input-field">
                                    <option value="">Select Course</option>
                                    <option value="AT">Agricultural Technology</option>
                                    <option value="ET">Environmental Technology</option>
                                    <option value="IAT">Instrumentation and Automation Technology</option>
                                    <option value="ICT">Information and Communication Technology</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <input type="text" placeholder="Username" className="input-field" />
                                
                            </div>
                            <div className="input-group">
                                <input type="password" placeholder="Password" className="input-field" />
                                <input type="password" placeholder="Confirm Password" className="input-field" />
                            </div>
                            <button type="submit" className="register-btn">CREATE ACCOUNT</button>
                        </form>
                    </div>
                </div>
        </div>
    );
}






















     



export default Register;