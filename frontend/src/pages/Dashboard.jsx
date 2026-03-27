import { useNavigate } from "react-router-dom";
import { Search, LogOut, User } from "lucide-react";
import ProfileCard from "../components/dashboard/ProfileCard";
import TaskCards from "../components/dashboard/TaskCards";
import TrackersConnected from "../components/dashboard/TrackersConnected";
import FocusChart from "../components/dashboard/FocusChart";
import MeetingsList from "../components/dashboard/MeetingsList";
import SkillsProgress from "../components/dashboard/SkillsProgress";

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "User";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f5f6fa] flex">
      {/* ─── Main Content ─── */}
      <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">
                {userName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-tight">
                Welcome, {userName.split(" ")[0]}
              </h1>
              <p className="text-xs text-gray-400">Your personal Dashboard overview</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2.5 shadow-sm border border-gray-100 w-64">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400 flex-1"
              />
            </div>

            {/* Profile */}
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
              <User className="w-4 h-4 text-gray-500" />
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-red-500 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Row 1: Profile + Task Cards */}
          <div className="lg:col-span-4">
            <ProfileCard userName={userName} />
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-rows-[auto_auto] gap-5 h-full">
              <TaskCards />
              <TrackersConnected />
            </div>
          </div>

          {/* Row 2: Focusing Chart (full width) */}
          <div className="lg:col-span-12">
            <FocusChart />
          </div>
        </div>
      </div>

      {/* ─── Right Sidebar ─── */}
      <aside className="hidden xl:flex flex-col w-[320px] bg-[#fafbfd] border-l border-gray-100 p-6 overflow-y-auto shrink-0">
        <MeetingsList />
        <div className="my-4 border-t border-gray-100" />
        <SkillsProgress />
      </aside>
    </div>
  );
};

export default Dashboard;
