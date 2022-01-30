import logo from './logo.svg';
import './App.css';
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";

function App() {
  return (
  <Router>
    <Topbar/>
    <div className='container'>
      <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/users" element={<UserList />}></Route>
        <Route path="/user/:userId" element={<User />}></Route>
        <Route path="/newUser" element={<NewUser />}></Route>
      </Routes>
    </div>
  </Router>
)
}

export default App;
