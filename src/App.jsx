import { Routes, Route } from "react-router-dom";
import HomePage from "./page/homePage";
import LoginPage from "./page/loginPage";
import AdminPage from "./page/adminPage";
import NotFoundPage from "./page/notFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vcon-login" element={<LoginPage />} />
        <Route path="/vcon-admin" element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>
  );
}

export default App;