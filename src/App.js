import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BirthdayInfoPage from './components/BirthdayInfoPage';
import NotificationPage from './components/NotificationPage';
import FeedbackPage from './components/FeedbackPage';
import "./App.css"
import LoginPage from './components/LoginForm';
import NavBar from './NavBar';
const App = () => {
  return (
    <Router>
      <NavBar/>
      <div>
        <Routes>
          <Route path="/HomePage" element={<HomePage/> } />
          <Route path="/birthday-info" element={<BirthdayInfoPage/>} />
          <Route path="/notification" element={<NotificationPage/>}/>
          <Route path="/feedback" element={ <FeedbackPage/>} />
          <Route path="/LoginPage" element={ <LoginPage/>} />
        </Routes>
      </div>
    </Router>
    // <div >
    // <Router>
    //   <div >
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/HomePage"></Link>
    //         </li>
    //         <li>
    //           <Link to="/birthday-info"></Link>
    //         </li>
    //         <li>
    //           <Link to="/notification"></Link>
    //         </li>
    //         <li>
    //           <Link to="/feedback"></Link>
    //           </li>
    //           <li><Link to="/LoginPage"></Link></li>
    //       </ul>
    //     </nav>
    //   </div>
    //   <Routes>
    //     <Route path="/HomePage">
    //       <HomePage />
    //     </Route>
    //     <Route path="/birthday-info">
    //       <BirthdayInfoPage />
    //     </Route>
    //     <Route path="/notification">
    //       <NotificationPage />
    //     </Route>
    //     <Route path="/feedback">
    //       <FeedbackPage />
    //       </Route>
    //       <Route path="/LoginPage">
    //         <LoginPage />
    //       </Route>
    //   </Routes>
    // </Router>
    // </div>
  );
};

export default App;