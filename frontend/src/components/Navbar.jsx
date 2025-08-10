import React, { useState } from 'react';

const Logo = () => (
  <svg height="32" viewBox="0 0 32 32" width="32" className="mr-2">
    <circle cx="16" cy="16" r="16" fill="#2563eb" />
    <text
      x="16"
      y="22"
      textAnchor="middle"
      fontSize="16"
      fill="#fff"
      fontFamily="Arial"
      fontWeight="bold"
    >
      P
    </text>
  </svg>
);

const navItemsByRole = {
  client: [
    { label: 'Products', path: '/products' },
    { label: 'My Orders', path: '/orders' },
  ],
  staff: [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Packages', path: '/packages' },
    { label: 'Drivers', path: '/drivers' },
  ],
  driver: [{ label: 'Packages', path: '/my-packages' }],
};

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('client');

  const handleLogin = () => {
    setUser({ name: 'Alice', role });
  };

  const handleLogout = () => {
    setUser(null);
  };

  const navItems = navItemsByRole[user?.role || role];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex items-center justify-between bg-gradient-to-r from-white via-white to-blue-600 px-6 h-16 shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <Logo />
        <span className="font-bold text-2xl text-blue-700 tracking-wider">
          Porter
        </span>
      </div>

      {/* Center: Nav Items */}
      <div className="flex gap-6">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.path}
            className="text-blue-700 font-medium text-base px-3 py-2 rounded hover:bg-blue-100 transition"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Right: Login/User */}
      <div>
        {!user ? (
          <button
            onClick={handleLogin}
            className="bg-blue-700 text-white rounded-full px-5 py-2 font-semibold text-base hover:bg-blue-800 transition"
          >
            Login
          </button>
        ) : (
          <div className="flex flex-row items-center gap-3">
            <div
              className="bg-blue-700 text-white rounded-full w-9 h-9 flex items-center justify-center font-bold text-lg uppercase"
              title={user.name}
            >
              {user.name[0]}
            </div>
            <button
              onClick={handleLogout}
              className="bg-transparent text-blue-700 border border-blue-700 rounded-full px-4 py-1.5 font-semibold text-sm hover:bg-blue-50 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
