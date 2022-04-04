import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./pages/home/Home"
import UserList from "./pages/userList/UserList"
import User from "./pages/user/User"
import "./app.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Topbar />
      <div className="container"> 
          <Sidebar />
          <div className="bodyContainer">
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/users" element={<UserList/>}/>
              <Route path="/user/:userId" element={<User />} />
              <Route path="*" element={"Not found"}/>
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
