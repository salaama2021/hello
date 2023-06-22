import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";

function App() {
  return (
    <Routes>
      
        {/* {authRoutes.map((route, idx) => (
          <AppRoute
            key={idx}
            path={route.path}
            element={route.element}
            layout={Authlayout}
          />
        ))} */}
        <Route to="/signin" element={Signin} ></Route>
        <Route to="/signup" element={Signup} ></Route>
        <Route to="/forgotpassword" element={ForgotPassword} ></Route>
        <Navigate strict from="/" to="/signin" />
      
    </Routes>
  );
}

export default App;