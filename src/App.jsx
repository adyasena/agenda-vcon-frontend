import { Routes, Route } from "react-router-dom";
import Homepage from "./page/homepage";
import Loginpage from "./page/loginpage";
import Adminpage from "./page/adminpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/vcon-login" element={<Loginpage />} />
        <Route path="/vcon-admin" element={<Adminpage />} />
      </Routes>
    </>
  );
}

export default App;