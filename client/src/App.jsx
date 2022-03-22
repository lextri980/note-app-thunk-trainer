import "./assets/styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Layouts/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Note from "./pages/Note/Note";
import PrivateRoute from "./config/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/note" element={<Note />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
