import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/Login/forgotPassword';
import ResetPassword from './pages/Login/ResetPassword';
import NewPassword from './pages/Login/newPassword'
import Dashboard from './pages/Home/Dashboard';
import Chat from './pages/Home/Chat';
import TermsConditions from './pages/Home/TermsConditions';
import SafetySecurity from './pages/Home/SafetySecurity';
import PrivacyPolicy from './pages/Home/PrivacyPolicy';
import Notification from './pages/Home/Notification';
import Profile from './pages/Home/Profile';
import Schedule from './pages/Home/Schedule';
import ReportsAnalytics from './pages/Home/ReportsAnalytics';
import Payment from './pages/Home/Payment';
import AttendanceManagement from './pages/Home/AttendanceManagement';
import UserRoleManagement from './pages/Home/UserRoleManagement';
import ViewUser from './pages/Home/ViewUser';
import EditUser from './pages/Home/EditUser';
import AnnouncementManagement from './pages/Home/AnnouncementManagement';
import SettingsManagement from './pages/Home/SettingsManagement';
import TeacherDashboard from './pages/Home/TeacherDashboard';
import TeacherSchedule from './pages/Home/TeacherSchedule';
import TeacherAttendanceManagement from './pages/Home/TeacherAttendanceManagement';
import TeacherAnnouncements from './pages/Home/TeacherAnnouncements';
import TeacherSettings from './pages/Home/TeacherSettings';
import TeacherReportsAnalytics from './pages/Home/TeacherReportsAnalytics';
import TeacherAssignmentsManagement from './pages/Home/TeacherAssignmentsManagement';
import TeacherProfile from './pages/Home/TeacherProfile';
import StudentDashboard from './pages/Home/StudentDashboar';
import StudentSchedule from './pages/Home/StudentSchedule';
import StudentAttendance from './pages/Home/StudentAttendance';
import StudentAssignments from './pages/Home/StudentAssignments';
import StudentSettings from './pages/Home/StudentSettings';
import StudentProfile from './pages/Home/StudentProfile';
import ParentDashboard from './pages/Home/ParentDashboard';
import ParentSchedule from './pages/Home/ParentSchedule';
import ParentAttendanceManagement from './pages/Home/ParentAttendanceManagement';
import ParentReportsAnalytics from './pages/Home/ParentReportsAnalytics';
import ParentAnnouncements from './pages/Home/ParentAnnouncements';
import ParentSettings from './pages/Home/ParentSettings';

import './App.css';


function App() {
  return (
    <ThemeProvider>
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
            <Route path="/Chat" element={<Chat />} />
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
  );
}

export default App;