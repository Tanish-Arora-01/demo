import { RefreshCw, Users, Heart, Trophy, Star } from "lucide-react";

const ProfileCard = ({ userName = "Kristin Watson" }) => {
  const initials = userName.split(" ").map(n => n[0]).join("");

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col items-center relative h-full">
      {/* Header */}
      <div className="flex justify-between items-center w-full mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Profile</h3>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Profile Photo with Ring Gauge */}
      <div className="relative mb-4">
        <svg width="120" height="120" viewBox="0 0 120 120" className="transform -rotate-90">
          {/* Background circle */}
          <circle cx="60" cy="60" r="52" fill="none" stroke="#f3f4f6" strokeWidth="6" />
          {/* Progress arc - 75% complete */}
          <circle
            cx="60" cy="60" r="52"
            fill="none"
            stroke="#ef4444"
            strokeWidth="6"
            strokeDasharray={`${2 * Math.PI * 52 * 0.75} ${2 * Math.PI * 52 * 0.25}`}
            strokeLinecap="round"
          />
        </svg>
        {/* Avatar */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
            <span className="text-2xl font-bold text-gray-500">{initials}</span>
          </div>
        </div>
        {/* Blue badge */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 translate-y-0">
          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shadow-md">
            <Star className="w-3 h-3 text-white fill-white" />
          </div>
        </div>
      </div>

      {/* Name & Title */}
      <h4 className="font-bold text-gray-900 text-base mb-0.5">{userName}</h4>
      <p className="text-xs text-gray-400 mb-5">Design Manager</p>

      {/* Stats Row */}
      <div className="flex items-center gap-4 w-full justify-center">
        <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
          <Users className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-sm font-semibold text-gray-700">11</span>
        </div>
        <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
          <Heart className="w-3.5 h-3.5 text-red-400" />
          <span className="text-sm font-semibold text-gray-700">56</span>
        </div>
        <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
          <Trophy className="w-3.5 h-3.5 text-amber-500" />
          <span className="text-sm font-semibold text-gray-700">12</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
