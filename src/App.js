import "./styles.css";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
export default function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "Admin123"
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const Logout = () => {
    console.log("logout");
    setUser({ name: "", email: "" });
  };
  const Login = (details) => {
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("logged in ");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match");
      setError("Details do not match");
    }
    console.log(details);
  };
  return (
    <div className="App">
      {user.email != "" ? (
        <div>
          <h1> Welcome</h1>
          <button onClick={Logout}>LogOut</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
