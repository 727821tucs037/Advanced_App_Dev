import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-200">
      <div className="md:w-1/2 mx-auto">
        <h1 className="text-4xl text-center mb-5">British Online Certification</h1>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 p-5">
            <div className="bg-white rounded-lg shadow-md p-5">
              <h2 className="text-2xl text-gray-800 mb-3">Course 1</h2>
              <p className="text-gray-600">Learn the fundamentals of React JS and Tailwind CSS.</p>
              <button className="bg-blue-500 text-white rounded-lg py-2 px-4 mt-5 hover:bg-blue-600">Enroll Now</button>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-5">
            <div className="bg-white rounded-lg shadow-md p-5">
              <h2 className="text-2xl text-gray-800 mb-3">Course 2</h2>
              <p className="text-gray-600">Advance your skills with advanced topics in React JS and Tailwind CSS.</p>
              <button className="bg-blue-500 text-white rounded-lg py-2 px-4 mt-5 hover:bg-blue-600">Enroll Now</button>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-5">
            <div className="bg-white rounded-lg shadow-md p-5">
              <h2 className="text-2xl text-gray-800 mb-3">Course 3</h2>
              <p className="text-gray-600">Master React JS and Tailwind CSS with real-world projects.</p>
              <button className="bg-blue-500 text-white rounded-lg py-2 px-4 mt-5 hover:bg-blue-600">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;