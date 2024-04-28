import React, { useState } from 'react';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    // Implement logout logic here (e.g., clear user data, redirect)
    console.log('User logged out');
  };

  return (
    <header className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
      <h1 className="text-xl font-bold">Your App Name</h1>

      <div className="relative">
        <button
          className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-full p-2"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <svg
            className="w-6 h-6 fill-current text-white"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M15 11H9a1 1 0 1 0 0-2h6a1 1 0 1 0 0 2zm-6 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm12-4a1 1 0 1 0 0-2h-6a1 1 0 0 0 0 2h6z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {showDropdown && (
          <div className="absolute right-0 top-full mt-2 w-20 origin-top-right rounded-md shadow-lg bg-white dark:bg-gray-800">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={handleLogout}
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
