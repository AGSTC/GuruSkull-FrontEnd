import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Loader from './components/common/Loader';

{/* Login Folder */}
import Login from './pages/Login/Login';
import ForgotPassword from './pages/Login/forgotPassword';
import ResetPassword from './pages/Login/ResetPassword';
import NewPassword from './pages/Login/newPassword'

{/* Dashboard Folder */}
import Dashboard from './pages/Dashboard/Dashboard';
import TeacherDashboard from './pages/Dashboard/TeacherDashboard';
import StudentDashboard from './pages/Dashboard/StudentDashboard';
import ParentDashboard from './pages/Dashboard/ParentDashboard';

{/* General Folder */}
import Messages from './pages/General/Chat';
import TermsConditions from './pages/General/TermsConditions';
import SafetySecurity from './pages/General/SafetySecurity';
import PrivacyPolicy from './pages/General/PrivacyPolicy';
import Notification from './pages/General/Notification';

{/* Profile Folder */}
import Profile from './pages/Profile/Profile';
import TeacherProfile from './pages/Profile/TeacherProfile';
import StudentProfile from './pages/Profile/StudentProfile';

{/* Schedule Folder */}
import Schedule from './pages/Schedule/Schedule';
import TeacherSchedule from './pages/Schedule/TeacherSchedule';
import StudentSchedule from './pages/Schedule/StudentSchedule';
import ParentSchedule from './pages/Schedule/ParentSchedule';
import StudentScheduleOptional from './pages/Schedule/StudentScheduleOptional';

{/* ReportsAnalytics Folder */}
import ReportsAnalytics from './pages/ReportsAnalytics/ReportsAnalytics';
import TeacherReportsAnalytics from './pages/ReportsAnalytics/TeacherReportsAnalytics';
import ParentReportsAnalytics from './pages/ReportsAnalytics/ParentReportsAnalytics';

{/* Payments Folder */}
import Payment from './pages/Payments/Payment';

{/* AttedanceManagement Folder */}
import AttendanceManagement from './pages/Attendance/AttendanceManagement';
import TeacherAttendanceManagement from './pages/Attendance/TeacherAttendanceManagement';
import StudentAttendance from './pages/Attendance/StudentAttendance';
import ParentAttendanceManagement from './pages/Attendance/ParentAttendanceManagement';

{/* UserRoleManagements Folder */}
import UserRoleManagement from './pages/UserRoleManagement/UserRoleManagement';
import ViewUser from './pages/UserRoleManagement/ViewUser';
import EditUser from './pages/UserRoleManagement/EditUser';

{/* Annnouncements Folder */}
import AnnouncementManagement from './pages/Announcements/AnnouncementManagement';
import TeacherAnnouncements from './pages/Announcements/TeacherAnnouncements';
import ParentAnnouncements from './pages/Announcements/ParentAnnouncements';

{/* Settings Folder */}
import SettingsManagement from './pages/Settings/SettingsManagement';
import TeacherSettings from './pages/Settings/TeacherSettings';
import StudentSettings from './pages/Settings/StudentSettings';
import ParentSettings from './pages/Settings/ParentSettings';

{/* Assignments Folder */}
import TeacherAssignmentsManagement from './pages/Assignments/TeacherAssignmentsManagement';
import StudentAssignments from './pages/Assignments/StudentAssignments';


import './App.css';


function App() {
  return (
    <>
    <ThemeProvider>
      <Loader />
      <Router>
        <div className="App">
          <Routes>

            {/* Shared Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/NewPassword" element={<NewPassword />} />

            {/* Tuition Owner Routes*/}
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/TermsConditions" element={<TermsConditions />} />
            <Route path="/SafetySecurity" element={<SafetySecurity />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/Messages" element={<Messages />} />
            <Route path="/Notification" element={<Notification />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Schedule" element={<Schedule />} />
            <Route path="/ReportsAnalytics" element={<ReportsAnalytics />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/AttendanceManagement" element={<AttendanceManagement />} />
            <Route path="/UserRoleManagement" element={<UserRoleManagement />} />
            <Route path="/ViewUser" element={<ViewUser />} />
            <Route path="/EditUser" element={<EditUser />} />
            <Route path="/AnnouncementManagement" element={<AnnouncementManagement />} />
            <Route path="/SettingsManagement" element={<SettingsManagement />} />

            {/* Teacher Routes*/}
            <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
            <Route path="/TeacherSchedule" element={<TeacherSchedule />} />
            <Route path="/TeacherAttendanceManagement" element={<TeacherAttendanceManagement />} />
            <Route path="/TeacherAnnouncements" element={<TeacherAnnouncements />} />
            <Route path="/TeacherSettings" element={<TeacherSettings />} />
            <Route path="/TeacherReportsAnalytics" element={<TeacherReportsAnalytics />} />
            <Route path="/TeacherAssignmentsManagement" element={<TeacherAssignmentsManagement />} />
            <Route path="/TeacherProfile" element={<TeacherProfile />} />

            {/* Student Routes*/}
            <Route path="/StudentDashboard" element={<StudentDashboard />} />
            <Route path="/StudentSchedule" element={<StudentSchedule />} />
            <Route path="/StudentAttendance" element={<StudentAttendance />} />
            <Route path="/StudentAssignments" element={<StudentAssignments />} />
            <Route path="/StudentSettings" element={<StudentSettings />} />
            <Route path="/StudentProfile" element={<StudentProfile />} />
            <Route path="/StudentScheduleOptional" element={<StudentScheduleOptional />} />

            {/* Parent Routes */}
            <Route path="/ParentDashboard" element={<ParentDashboard />} />
            <Route path="/ParentSchedule" element={<ParentSchedule />} />
            <Route path="/ParentAttendanceManagement" element={<ParentAttendanceManagement />} />
            <Route path="/ParentReportsAnalytics" element={<ParentReportsAnalytics />} />
            <Route path="/ParentAnnouncements" element={<ParentAnnouncements />} />
            <Route path="/ParentSettings" element={<ParentSettings />} />


          </Routes>
        </div>
      </Router>
    </ThemeProvider>
    </>
  );
}

export default App;