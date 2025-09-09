import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  LogOut, 
  User, 
  Calendar, 
  Shield, 
  Settings, 
  Activity,
  Bell,
  ChevronRight,
  Award,
  Star,
  Clock,
  Globe
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    setIsAnimated(true);
    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    logout();
  };

  const stats = [
    {
      title: 'Account Security',
      value: '100%',
      subtitle: 'Fully Protected',
      icon: Shield,
      color: 'emerald',
      bgGradient: 'from-emerald-500 to-emerald-600',
      lightBg: 'bg-emerald-50',
      textColor: 'text-emerald-600'
    },
    {
      title: 'Session Status',
      value: 'Active',
      subtitle: 'Online Now',
      icon: Activity,
      color: 'blue',
      bgGradient: 'from-blue-500 to-blue-600',
      lightBg: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Account Age',
      value: user?.created_at ? Math.floor((Date.now() - new Date(user.created_at).getTime()) / (1000 * 60 * 60 * 24)) : 0,
      subtitle: 'Days Active',
      icon: Calendar,
      color: 'purple',
      bgGradient: 'from-purple-500 to-purple-600',
      lightBg: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      title: 'Experience Level',
      value: 'Pro',
      subtitle: 'Verified User',
      icon: Award,
      color: 'amber',
      bgGradient: 'from-amber-500 to-amber-600',
      lightBg: 'bg-amber-50',
      textColor: 'text-amber-600'
    }
  ];

  const activities = [
    { action: 'Logged in', time: '2 minutes ago', icon: User },
    { action: 'Profile updated', time: '1 hour ago', icon: Settings },
    { action: 'Security scan completed', time: '3 hours ago', icon: Shield },
    { action: 'Welcome email sent', time: '1 day ago', icon: Bell }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative bg-white/80 backdrop-blur-lg shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">AuthApp Pro</h1>
                  <p className="text-xs text-gray-500">Premium Dashboard</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Time Display */}
              <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 bg-white/60 rounded-lg backdrop-blur">
                <Clock className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-mono text-gray-700">
                  {currentTime.toLocaleTimeString()}
                </span>
              </div>
              
              {/* User Profile */}
              <div className="flex items-center space-x-3 px-4 py-2 bg-white/60 rounded-xl backdrop-blur hover:bg-white/80 transition-all duration-200">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-semibold text-gray-800">{user?.username}</p>
                  <p className="text-xs text-gray-500">Premium Member</p>
                </div>
              </div>
              
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:block">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
        <div className="px-4 space-y-8">
          {/* Hero Welcome Section */}
          <div className={`relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl transform transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <div className="relative flex flex-col lg:flex-row items-center justify-between">
              <div className="text-white mb-6 lg:mb-0">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
                  Welcome back, {user?.username}! ✨
                </h2>
                <p className="text-xl text-white/90 mb-6">
                  You're looking amazing today. Here's your personalized dashboard.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur">
                    <Star className="w-4 h-4 text-yellow-300" />
                    <span className="text-sm font-medium">Premium Account</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur">
                    <Globe className="w-4 h-4 text-green-300" />
                    <span className="text-sm font-medium">Global Access</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl flex items-center justify-center backdrop-blur border border-white/20 shadow-2xl animate-pulse">
                  <User className="w-16 h-16 lg:w-20 lg:h-20 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.title}
                  className={`relative overflow-hidden bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-white/20 animate-slide-up`}
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/0 pointer-events-none"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${stat.lightBg} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200`}>
                        <Icon className={`w-6 h-6 ${stat.textColor}`} />
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-xs text-gray-500">{stat.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Information - Enhanced */}
            <div className="lg:col-span-2 bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 px-6 py-4 border-b border-gray-200/50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Settings className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Profile Information</h3>
                  <div className="flex-1"></div>
                  <button className="px-4 py-2 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-colors duration-200 transform hover:scale-105">
                    Edit Profile
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      👤 Username
                    </label>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl px-4 py-3 text-gray-900 font-medium hover:shadow-md transition-shadow duration-200">
                      {user?.username}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      ✉️ Email Address
                    </label>
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl px-4 py-3 text-gray-900 font-medium hover:shadow-md transition-shadow duration-200">
                      {user?.email}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      🔢 User ID
                    </label>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl px-4 py-3 text-gray-600 font-mono text-sm hover:shadow-md transition-shadow duration-200">
                      {user?.id}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      📅 Account Created
                    </label>
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl px-4 py-3 text-gray-900 font-medium hover:shadow-md transition-shadow duration-200">
                      {user?.created_at ? new Date(user.created_at).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric'
                      }) : 'N/A'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-purple-50/50 px-6 py-4 border-b border-gray-200/50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {activities.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/50 transition-colors duration-200 group">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
                <div className="pt-4 mt-6 border-t border-gray-200">
                  <button className="w-full text-center text-sm text-primary-600 hover:text-primary-700 font-medium hover:bg-primary-50 py-2 rounded-lg transition-colors duration-200">
                    View All Activity →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
