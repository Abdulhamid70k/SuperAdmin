import React, { useState } from 'react';

const LogIn = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-8">
      <div className="bg-slate-800 rounded-xl shadow-2xl w-full max-w-7xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-16">
            <div className="flex items-center mb-8">
              <span className="bg-indigo-600 p-3 rounded-lg mr-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              <span className="text-3xl font-bold text-white">Rovfabs</span>
            </div>
            <p className="text-gray-400 mb-16 text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.
            </p>
            <div className="relative h-96">
              <img src="/path-to-your-illustration.png" alt="Login illustration" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-h-full" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-slate-800 p-16">
            <h2 className="text-lg text-indigo-500 mb-3">Start for free</h2>
            <h3 className="text-4xl font-bold mb-10 text-white">Sign In to TailAdmin</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <label htmlFor="username" className="block text-base font-medium mb-3 text-white">Username</label>
                <input type="text" id="username" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-5 py-4 text-white text-xl focus:outline-none focus:border-indigo-500" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="mb-10">
                <label htmlFor="password" className="block text-base font-medium mb-3 text-white">Password</label>
                <input type="password" id="password" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-5 py-4 text-white text-xl focus:outline-none focus:border-indigo-500" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white rounded-lg py-4 px-5 text-xl font-semibold hover:bg-indigo-700 transition duration-200">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
