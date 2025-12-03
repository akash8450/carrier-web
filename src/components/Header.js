import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const navigate = useNavigate();
  const notifRef = useRef(null);

  const navigationLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Who We Are", href: "/whowere" },
    { name: "Work With Us", href: "/home" },
    { name: "Get in Touch", href: "/getintouch" },
  ];

  const user = {
    name: "Abhishek Singh",
    role: "Senior Java Developer",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop",
  };

  const notifications = [
    {
      id: 1,
      title: "Your Test Result is Here",
      desc: "Your skill test results are now available. See how you performed and boost your chances of getting hired by improving your profile visibility.",
      time: "2025-08-22 | 12:56 PM",
      avatarType: "initials",
      initials: "YT",
    },
    {
      id: 2,
      title: "You’ve Got a Test Invite",
      desc: "An employer has invited you to take a skill test. Showcase your expertise and move one step closer to your dream job. Start now!",
      time: "2025-08-21 | 10:00 AM",
      avatarType: "initials",
      initials: "YG",
    },
    {
      id: 3,
      title: "Complete Your Profile",
      desc: "Your journey is just getting started! Complete your profile to unlock personalized opportunities and stand out to employers.",
      time: "2025-08-20 | 11:00 AM",
      avatarType: "image",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];

  const handleLogout = () => navigate("/login");

  useEffect(() => {
    const clickHandler = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setIsNotifOpen(false);
      }
    };
    const escHandler = (e) => e.key === "Escape" && setIsNotifOpen(false);
    document.addEventListener("mousedown", clickHandler);
    document.addEventListener("keydown", escHandler);
    return () => {
      document.removeEventListener("mousedown", clickHandler);
      document.removeEventListener("keydown", escHandler);
    };
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Skills-pVhqSZP8UNC5kN23csqJr6yEbwNR1O.png"
              alt="Logo"
              className="w-8 h-8"
            />
            <div className="leading-4">
              <div className="text-gray-900 font-semibold">Skill</div>
              <div className="text-xs text-gray-600">Assessment</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 pb-1">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3" ref={notifRef}>
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotifOpen((s) => !s)}
                className="relative p-2 rounded-full hover:bg-gray-100"
                aria-label="Notifications"
                title="Notifications">
                {/* Only the icon's built-in red dot remains */}
                <img
                  src="/notification.svg"
                  alt="Notifications"
                  className="h-6 w-6"
                />
              </button>

              {/* Dropdown */}
              {isNotifOpen && (
                <div className="absolute right-0 mt-2 w-[28rem] max-w-[90vw] bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50">
                  <div className="flex items-center gap-2 px-4 py-3 border-b">
                    <img
                      src="/Vector (6).svg"
                      alt="notif"
                      className="w-5 h-5"
                    />
                    <h3 className="text-green-700 font-semibold text-lg">
                      Notifications
                    </h3>
                  </div>

                  <ul className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                    {notifications.map((n) => (
                      <li
                        key={n.id}
                        className="flex items-start gap-3 px-4 py-4 hover:bg-gray-50">
                        {n.avatarType === "image" ? (
                          <img
                            src={n.img}
                            alt="User avatar"
                            className="h-10 w-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="h-10 w-10 rounded-full flex items-center justify-center bg-green-100 text-green-700 font-bold select-none">
                            {n.initials}
                          </div>
                        )}

                        <div className="flex-1">
                          <p className="font-semibold text-gray-800">
                            {n.title}
                          </p>
                          <p className="text-sm text-gray-600">{n.desc}</p>
                          <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                            <img
                              src="/Vector (6).svg"
                              alt="calendar"
                              className="w-4 h-4 shrink-0"
                            />
                            <span>{n.time}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Avatar -> Profile */}
            <button
              onClick={() => navigate("/profile")}
              className="flex items-center focus:outline-none"
              title={user.name}
              aria-label="Open profile">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-9 w-9 rounded-full object-cover ring-1 ring-gray-200"
              />
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 underline decoration-gray-300/80"
              title="Logout">
              Logout
              <img
                src="/LogoutIcon.svg"
                alt="Logout Icon"
                className="h-5 w-5"
              />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((s) => !s)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 transition-transform duration-200 ${
                  isMobileMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12M6 12h12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <Link
                to="/profile"
                className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}>
                My Account
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleLogout();
                }}
                className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
