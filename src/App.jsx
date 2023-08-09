import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { LoginPage } from "./pages/login";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { setValue } from "./redux/userSlice";
import { useEffect } from "react";
import { RegisterPage } from "./pages/register";
import { EmployeePage } from "./pages/employee";
import { HomeContent } from "./pages/home";
import { LogHistory } from "./pages/logHistory";
import { Profile } from "./pages/profile";
import { SalaryPage } from "./pages/salary";


const router = createBrowserRouter([
  {path: "/", element: <HomePage />, children: [
    {path: "", element: <HomeContent />},
    {path: "employee", element: <EmployeePage />},
    {path: "loghistory", element: <LogHistory />},
    {path: "profile", element: <Profile />},
    {path: "salary", element: <SalaryPage />}
  ]},
  {path: "/login", element: <LoginPage />},
  {path: "/register/:token", element: <RegisterPage />}
])

function App() {
  const token = localStorage.getItem("token")
  const dispatch = useDispatch()
  
  const keepLogin = async () => {
    try {
      const response = await Axios.get("http://localhost:9000/api/auth/", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      dispatch(setValue(response.data))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    keepLogin()
  }, [])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
