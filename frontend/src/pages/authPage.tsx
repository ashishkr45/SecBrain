import { useState } from 'react';
import SecBrainIcon from '../icons/SecBrainIcon';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
  general?: string;
}

const AuthPages = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    // Sign up specific validations
    if (isSignUp) {
      if (!formData.name.trim()) {
        newErrors.name = 'Full name is required';
      }

      if (!formData.confirmPassword.trim()) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle successful form submission here
    }
  };

  const handleButtonClick = () => {
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle successful form submission here
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f2f5fc] via-[#e2eaf7] to-[#cbdaf2] flex items-center justify-center p-2 relative overflow-hidden">
      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md max-h-screen">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 transform ">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f0c48a] rounded-2xl mb-4 transform transition-all duration-300 hover:rotate-12 hover:scale-110 hover:shadow-xl">
              <SecBrainIcon />
            </div>
            <h1 className="text-3xl font-bold text-[#232948] mb-2">Second Brain</h1>
            <p className="text-gray-600 text-sm">
              {isSignUp ? 'Create your account to get started' : 'Welcome back! Please sign in'}
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex bg-gray-100 rounded-2xl p-1 mb-4 relative">
            <div 
              className={`absolute top-1 bottom-1 rounded-xl bg-white shadow-lg transition-all duration-300 ease-in-out ${
                isSignUp ? 'left-1/2 right-1' : 'left-1 right-1/2'
              }`}
            ></div>
            <button
              onClick={() => {
                setIsSignUp(false);
                setErrors({});
              }}
              className={`flex-1 py-3 text-center text-sm font-medium rounded-xl transition-all duration-300 relative z-10 ${
                !isSignUp ? 'text-[#232948]' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setIsSignUp(true);
                setErrors({});
              }}
              className={`flex-1 py-3 text-center text-sm font-medium rounded-xl transition-all duration-300 relative z-10 ${
                isSignUp ? 'text-[#232948]' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field (Sign Up Only) */}
            <div className={`transition-all duration-500 ${
              isSignUp ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#232948]/20 focus:border-[#232948] transition-all duration-300 peer placeholder-transparent ${
                    errors.name ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Full Name"
                  id="name"
                />
                <label 
                  htmlFor="name"
                  className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#232948] pointer-events-none"
                >
                  Full Name
                </label>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#232948]/20 focus:border-[#232948] transition-all duration-300 peer placeholder-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Email Address"
                id="email"
              />
              <label 
                htmlFor="email"
                className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#232948] pointer-events-none"
              >
                Email Address
              </label>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#232948]/20 focus:border-[#232948] transition-all duration-300 peer placeholder-transparent ${
                  errors.password ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Password"
                id="password"
              />
              <label 
                htmlFor="password"
                className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#232948] pointer-events-none"
              >
                Password
              </label>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field (Sign Up Only) */}
            <div className={`transition-all duration-500 ${
              isSignUp ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
              <div className="relative">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#232948]/20 focus:border-[#232948] transition-all duration-300 peer placeholder-transparent ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Confirm Password"
                  id="confirmPassword"
                />
                <label 
                  htmlFor="confirmPassword"
                  className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#232948] pointer-events-none"
                >
                  Confirm Password
                </label>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#394994] to-[#5572c9] text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 relative overflow-hidden group"
            >
              <span className="relative z-10">
                {isSignUp ? 'Create Account' : 'Sign In'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5572c9] to-[#a7c2e9] opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Footer Text */}
          <p className="text-center text-sm text-gray-600 mt-8">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                setErrors({});
              }}
              className="text-[#232948] font-semibold hover:text-[#5572c9] transition-colors duration-300"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPages;