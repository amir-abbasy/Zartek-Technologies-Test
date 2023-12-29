// ErrorPage.jsx

import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl text-gray-700">Page not found</p>
        <p className="text-gray-500 mt-4">
          The page you are looking for might be in another universe.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
