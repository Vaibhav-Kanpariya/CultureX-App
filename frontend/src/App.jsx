import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Landing from "./pages/LandingPage/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
function App() {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      // const url = "http://localhost:8000/auth/login/success";
      const url = "https://my-snap.onrender.com/auth/login/success";
      axios
        .get(url, { withCredentials: true })
        .then((res) => {
          console.log(res);
          setUser({
            displayName: res.data.user.displayName,
            email: res.data.user.emails[0].value,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home user={user} /> : <Landing />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
