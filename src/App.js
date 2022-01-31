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
        <Route path="/react_test" element={<Home />}></Route>
        <Route path="/react_test/users" element={<UserList />}></Route>
        <Route path="/react_test/user/:userId" element={<User />}></Route>
        <Route path="/react_test/newUser" element={<NewUser />}></Route>
      </Routes>
    </div>
  </Router>
)
}

export default App;
