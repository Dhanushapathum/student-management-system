import {
  FiBell,
  FiHome,
  FiUsers,
  FiBookOpen,
  FiBriefcase,
  FiUser,
  FiCalendar,
  FiClipboard,
  FiBarChart2,
  FiDollarSign,
  FiFileText,
  FiSettings,
  FiLogOut,
  FiGrid,
} from "react-icons/fi";
import {useNavigate} from "react-router-dom";


import AdminImage from '../assets/admin.png';


function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Logout logic
    navigate("/");
  }
    
  return (
    <div className="dashboard">
            
                {/* Sidebar   */}
                <div className="sidebar">
                    <h1>STUDENT</h1>
                    <h2>MANAGEMENT SYSTEM</h2>
                    <ul>
                        <li><FiHome /> <span>Dashboard</span></li>
                    
                        <li><FiUsers /> <span>Students</span></li>
                        <li><FiBookOpen /> <span>Courses</span></li>
                        <li><FiBriefcase /> <span>Departments</span></li>
                        <li><FiUser /> <span>Teachers</span></li>
                        <li><FiCalendar /> <span>Attendance</span></li>
                        <li><FiClipboard /> <span>Exams</span></li>
                        <li><FiBarChart2 /> <span>Results</span></li>
                        <li><FiDollarSign /> <span>Fees</span></li>
                        <li><FiFileText /> <span>Reports</span></li>
                        <li><FiSettings /> <span>Settings</span></li>
                        <div className="logout">
                             <li onClick={handleLogout}><FiLogOut /> <span>Logout</span></li>
                        </div>
                       
                    </ul>
                </div>

            {/* Main Content */}
            <div className="main-content">
                <div className="header">
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
    </div>
    );
}






                
            
    





export default Dashboard;