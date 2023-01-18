import { Routes, Route } from "react-router-dom";
import Home from "../src/page/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;