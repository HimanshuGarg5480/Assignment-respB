import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideNavbar from "./sidenavbar";
import SearchBar from "./search";
import Dashboard from "./dashboard";
import Login from "./components/login";
import Signup from "./components/signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dashboardWidth, setDashboardWidth] = useState("90%"); // Initial width when sidebar is open

  const toggleSidebar = () => {
    setSidebarOpen((prevSidebarOpen) => !prevSidebarOpen);
  };

  useEffect(() => {
    // Adjust dashboard width when sidebarOpen state changes
    if (sidebarOpen) {
      setDashboardWidth("90%");
    } else {
      setDashboardWidth("100%");
    }
  }, [sidebarOpen]);

  return (
    <Router>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <div className="flex bg-[#F9F9F9] ">
                  <div className="relative h-screen pl-5">
                    <SideNavbar
                      sidebarOpen={sidebarOpen}
                      setSidebarOpen={setSidebarOpen}
                      toggleSidebar={toggleSidebar}
                    />
                  </div>

                  <div className="p-5 bg-[#F9F9F9]" style={{ width: dashboardWidth }}>
                    <SearchBar
                      sidebarOpen={sidebarOpen}
                      toggleSidebar={toggleSidebar}
                    />
                    <Routes>
                      <Route path="/analytics" element={<Dashboard />} />
                    </Routes>
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;
