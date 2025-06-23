import React, { useState, useEffect } from "react";
import { Menu, X, Home, Compass, Utensils, Video, Store, Info, Mail, ShoppingCart, LogIn, UserPlus, UserCog, Sparkles } from "lucide-react";
import aa from "../assets/Picsart_circle.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  console.log(user);
  

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
    window.location.reload();
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  let generalNavItems = [
    { label: "Home", href: "/", icon: <Home size={22} /> },
    { label: "About", href: "/about", icon: <Info size={22} /> },
    { label: "Contact Us", href: "/contactus", icon: <Mail size={22} /> },
    
  ];

  // If logged in as a "user", change "Home" to "/home2"
  if (user?.role === "user") {
    generalNavItems = generalNavItems.map(item =>
      item.label === "Home" ? { ...item, href: "/home2" } : item
    );
  }

  let roleNavItems = [];

  if (user?.role === "admin") {
    roleNavItems = [{ label: "Admin Panel", href: "/admin", icon: <UserCog size={22} /> }];
  } else if (user?.role === "restaurant") {
    roleNavItems = [{ label: "Restaurant Panel", href: "/restaurant/dashboard", icon: <Store size={22} /> }];
  } else if (user?.role === "user") {
    roleNavItems = [
      { label: "Dashboard", href: "/dashboard", icon: <Compass size={22} /> },
      { label: "Recipes", href: "/recipes", icon: <Utensils size={22} /> },
      { label: "Vlogs", href: "/vlog", icon: <Video size={22} /> },
      { label: "Restaurant", href: "/restaurantlist", icon: <Store size={22} /> },
      { label: "Bookings", href: "/bookings", icon: <ShoppingCart size={22} /> },
      { label: "AI Recipe Generator", href: "/recipegenerator", icon: <Sparkles size={22} className="animate-pulse" /> },
    ];
  }

  return (
    <div className="flex">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-6 left-6 z-50 p-3 bg-gray-200 text-gray-700 rounded-full shadow-md hover:bg-gray-300 transition-all"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Sidebar Menu */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white text-gray-800 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 p-6 rounded-r-xl border-r border-gray-300 overflow-y-auto`}
      >
        <div className="flex flex-col items-center">
          <img src={aa} alt="Noshly Logo" className="w-20 h-20 mb-4 rounded-full shadow-sm" />
          <h1 className="text-3xl font-extrabold text-gray-700">Noshly</h1>
        </div>

        <nav className="mt-8">
          <ul className="space-y-6 text-lg">
            {[...generalNavItems, ...roleNavItems].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex text-decoration-none items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 transition-all hover:text-purple-500"
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex flex-col space-y-4 pb-6">
          {user ? (
            <>
            <a
                  href="/profile"
                  className="flex text-decoration-none items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 transition-all hover:text-purple-500"
                >
                  <span>Profile</span>
                </a>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 transition-all hover:text-purple-500"
              >
              <span>Logout</span>
            </button>
              </>
          ) : (
            <>
              <a
                href="/login"
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 transition-all hover:text-purple-500"
              >
                <LogIn size={22} /> <span>Login</span>
              </a>
              <a
                href="/register"
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 transition-all hover:text-purple-500"
              >
                <UserPlus size={22} /> <span>Register</span>
              </a>
            </>
          )}
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
