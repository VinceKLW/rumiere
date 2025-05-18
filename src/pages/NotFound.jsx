import React from 'react';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <h1 className="text-5xl font-bold mb-4">404</h1>
    <p className="text-xl mb-6">Page Not Found</p>
    <a href="/" className="text-blue-500 underline">Go Home</a>
  </div>
);

export default NotFound;
