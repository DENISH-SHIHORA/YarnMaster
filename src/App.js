import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import Sidebar from "./components/Sidebar";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./protectedroute/ProtectedRoute";
import Accountmaster from "./master/Accountmaster/Accountmaster" 
import Colormaster from "./master/Colormaster/Colormaster";
import Designmaster from "./master/Designmaster/Designmaster";
import Matchingmaster from "./master/Matchingmaster/Matchingmaster";
import EditCMData from "./master/Colormaster/EditCMData";
import EditAMData from "./master/Accountmaster/EditAMData";
import EditDMData from "./master/Designmaster/EditDMData";
import Topbar from "./components/Topbar";

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          {/* <Route
            exact
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          /> */}
          <Route path="/topbar" element={<Topbar/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/amaster" element={<Accountmaster />} />
          <Route path="/cmaster" element={<Colormaster />} />
          <Route path="/dmaster" element={<Designmaster />} />
          <Route path="/mmaster" element={<Matchingmaster />} />
          <Route path="/amaster/edit/:id" element={<EditAMData />} />
          <Route path="/cmaster/edit/:id" element={<EditCMData />} />
          <Route path="/dmaster/edit/:id" element={<EditDMData />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}


export default App;
