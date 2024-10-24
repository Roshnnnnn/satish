// import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 px-4 md:px-8">
      <h1 className="text-3xl md:text-5xl sm:text-6lg font-bold text-white animate-bounce-fix">
        Welcome to Our Landing Page
      </h1>
      <p className="mt-4 text-base md:text-lg text-white animate-fade-in">
        Experience the best services we offer!
      </p>
      <button className="mt-6 px-4 py-2 text-base md:text-lg font-semibold text-white bg-blue-700 rounded-lg shadow-lg transform transition-transform hover:scale-105 animate-pulse hover:blur-none">
        Get Started
      </button>
    </div>
  );
};

export default Home;
