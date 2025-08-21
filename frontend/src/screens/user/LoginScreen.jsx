import React, { useState } from 'react';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!email || !password) {
      setError('Please enter both username and password.');
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      console.log('Login attempted with:', email, password);
      alert('Login Submitted!');
    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center font-inter p-4"
      style={{ backgroundColor: "#303036" }}
    >
      <div className="bg-black p-8 rounded-xl shadow-2xl w-full max-w-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">TECH TUBE</h2>
          <p className="text-gray-400 text-sm">
            Please sign in to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              id="username"
              name="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition duration-200"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition duration-200"
              placeholder="Password"
              required
            />
          </div>

          <div className="text-right">
            <a
              href="#"
              className="text-sm font-medium text-violet-400 hover:text-violet-300 transition duration-200"
            >
              Forgot Password?
            </a>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center font-medium">
              {error}
            </p>
          )}

          <div>
            <button
              type="submit"
              className={`w-full flex items-center justify-center py-3 px-4 rounded-lg text-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200
                ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              style={{ backgroundColor: "#8F00FF" }}
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                'Sign In'
              )}
            </button>
          </div>
        </form>

        <div className="mt-6 space-y-4">
          <button
            className="w-full flex items-center justify-center py-3 px-4 rounded-lg text-white font-semibold shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition duration-200"
            style={{ backgroundColor: "#8F00FF" }} 
            onClick={() => alert('Google Sign-In Clicked!')}
          >
            <svg
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.24 10.284V13.84H18.598C18.411 14.888 18.068 16.035 17.518 17.152C16.968 18.269 16.142 19.348 15.08 20.308C13.882 21.242 12.399 21.84 10.84 22C9.281 22.16 7.643 21.986 6.096 21.488C4.549 20.99 3.125 20.17 1.957 19.062C0.789 17.954 0.057 16.578 0 15.097H3.456C3.518 16.336 4.093 17.433 5.044 18.232C5.996 19.031 7.279 19.462 8.643 19.462C10.007 19.462 11.29 19.031 12.241 18.232C13.193 17.433 13.768 16.336 13.83 15.097H17.286C17.286 16.136 17.11 17.171 16.793 18.175C16.476 19.179 16.012 20.103 15.421 20.927L12.24 10.284Z" fill="#EA4335"/>
              <path d="M10.84 2.54C12.399 2.16 14.037 2.034 15.584 2.034C17.131 2.034 18.769 2.16 20.316 2.54V6.096C19.999 6.256 19.648 6.477 19.264 6.759L17.286 8.736C17.16 8.61 17.034 8.484 16.908 8.358C16.782 8.232 16.656 8.106 16.53 7.98H13.83C13.768 6.741 13.193 5.644 12.241 4.845C11.29 4.046 10.007 3.615 8.643 3.615C7.279 3.615 5.996 4.046 5.044 4.845C4.093 5.644 3.518 6.741 3.456 7.98H0C0.057 6.499 0.789 5.123 1.957 4.015C3.125 2.907 4.549 2.087 6.096 1.589C7.643 1.091 9.281 0.915 10.84 1.075V2.54Z" fill="#FBBC04"/>
              <path d="M10.84 1.075C9.281 0.915 7.643 1.091 6.096 1.589C4.549 2.087 3.125 2.907 1.957 4.015C0.789 5.123 0.057 6.499 0 7.98H3.456C3.518 6.741 4.093 5.644 5.044 4.845C5.996 4.046 7.279 3.615 8.643 3.615C10.007 3.615 11.29 4.046 12.241 4.845C13.193 5.644 13.768 6.741 13.83 7.98H22.08C22.023 6.499 21.291 5.123 20.123 4.015C18.955 2.907 17.531 2.087 15.984 1.589C14.437 1.091 12.799 0.915 11.24 1.075L10.84 1.075Z" fill="#4285F4"/>
              <path d="M12.24 10.284L15.421 20.927C16.012 20.103 16.476 19.179 16.793 18.175C17.11 17.171 17.286 16.136 17.286 15.097H13.83C13.768 16.336 13.193 17.433 12.241 18.232C11.29 19.031 10.007 19.462 8.643 19.462C7.279 19.462 5.996 19.031 5.044 18.232C4.093 17.433 3.518 16.336 3.456 15.097H0C0.057 16.578 0.789 17.954 1.957 19.062C3.125 20.17 4.549 20.99 6.096 21.488C7.643 21.986 9.281 22.16 10.84 22C12.399 21.84 13.882 21.242 15.08 20.308L12.24 10.284Z" fill="#34A853"/>
            </svg>
            Sign In With Google
          </button>
        </div>

        <div className="mt-8 text-center text-sm">
          <span className="text-gray-400">Don't Have An Account? </span>
          <a
            href="#"
            className="font-medium text-violet-400 hover:text-violet-300 transition duration-200"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
