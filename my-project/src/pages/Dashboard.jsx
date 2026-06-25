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

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Line,Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

import {useNavigate} from "react-router-dom";


import AdminImage from '../assets/admin.png';


function Dashboard() {
  //logic for logout  
  const navigate = useNavigate();
  const handleLogout = () => {
    // Logout logic
    navigate("/");
  }

  const studentGrowthData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Student Growth',
        data: [2, 6, 30, 60, 100, 150],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const attendanceData = {
    labels:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets:[
        {
            label: 'Attendance',
            data: [20, 15, 18, 25, 22],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        }
    ]
};

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

                     {/* Dashboard Cards */}
                    <div className="cards">
                        <div className="card">
                            <h3>Total Students</h3>
                            <p>150</p>
                        </div>

                        <div className="card">
                            <h3>Total Courses</h3>
                            <p>10</p>
                        </div>

                        <div className="card">
                            <h3>Total Departments</h3>
                            <p>5</p>
                        </div>

                        <div className="card">
                            <h3>Total Teachers</h3>
                            <p>20</p>
                        </div>
                    </div>

                  {/* Student Growth Chart */}
                    <div className="charts">
                        
                            <div className="chart-card">
                                <h3>Student Growth</h3>
                                <Line data={studentGrowthData} />
                            </div>
                            <div className="chart-card">
                                <h3>Attendance Overview</h3>
                                <Bar data={attendanceData} />
                            </div>
                    </div> 
                    <div className="table-section">
                       <h3>Recent Students</h3>
                          <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Registration No</th>
                                        <th>Department</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                            <tbody>
                                <tr>
                                    <td>ST001</td>
                                    <td>Nimal Perera</td>
                                    <td>2024to2188</td>
                                    <td>Agricultural Technology</td>
                                    <td>2026/02/17</td>
                                    <td><span className="status-text"><span className="active"></span><span>Active</span></span></td>
                                </tr>

                                <tr>
                                    <td>ST002</td>
                                    <td>Kamal Perera</td>
                                    <td>2024to2156</td>
                                    <td>Environmental Technology</td>
                                    <td>2026/06/17</td>
                                    <td><span className="status-text"><span className="active"></span><span>Active</span></span></td>
                                </tr>

                                <tr>
                                    <td>ST003</td>
                                    <td>Amal Perera</td>
                                    <td>2024to2180</td>
                                    <td>Information and Communication Technology</td>
                                    <td>2026/08/17</td>
                                    <td><span className="status-text"><span className="pending"></span><span>Pending</span></span></td>
                                </tr>
                            </tbody>
                          </table>
                    </div>







            </div>


           

        </div>
    );
}





export default Dashboard;