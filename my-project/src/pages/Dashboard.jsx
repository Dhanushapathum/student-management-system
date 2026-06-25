import { FiBell } from "react-icons/fi";
import AdminImage from '../assets/admin.png';


function Dashboard() {
  return (
    <div className="dashboard">
            
                {/* Sidebar   */}
                <div className="sidebar">
                    <h1>STUDENT</h1>
                    <h2>MANAGEMENT SYSTEM</h2>
                    <ul> 
                        <li> Dashboard</li>
                        <li> Students</li>
                        <li> Courses</li>
                        <li> Departments</li>
                        <li> Teachers</li>
                        <li> Attendance</li>
                        <li> Exams</li>
                        <li> Results</li>
                        <li> Fees</li>
                        <li> Reports</li>
                        <li> Settings</li>
                    </ul>
                </div>

            {/* Main Content */}
            <div className="header-content">
                    <div className="header-left">
                        <span className="menu-icon">&#9776;</span>
                        <h2>Dashboard</h2>
                    </div>
                    <div className="header-right">
                        <div className='search-box'>
                        <input type="text" placeholder="Search Students..." className="search-bar" />
                        <span>&#128269;</span>
                        </div>

                        <div className="notification">
                            <FiBell />
                            <span className="badge">3</span>
                        </div>

                        <div className="profile">
                            <img src={AdminImage} alt="Profile" className="profile-image" />
                                <div>
                                  <h4>Admin</h4>
                                  <p>Administrator</p>  
                                </div>
                            </div>
                    </div>
           
            </div>
    </div>
    );
}






                
            
    





export default Dashboard;