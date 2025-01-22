import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import Header from './component/Header';
import Add from './component/Add';
import Home from './component/Home';
import Edit from './component/Edit';
import Login from "./component/Login/Login";
import AdminLogin from "./component/Admin/AdminLogin";
import AdminPage from "./component/Admin/AdminPage";
import Signup from "./component/Signup/Signup";


function App() {
  return (
    <>
      <Header />
      <Routes>
      {/* <Route element={<Login />} path="/" /> */}
        <Route path="/" element={<Login />} />
        <Route element={<AdminLogin />} path="/admin-login" />
        <Route element={<AdminPage />} path="/admin" />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path="/signup"  element={<Signup />}/>
      </Routes>
    </>
  )
}

export default App
