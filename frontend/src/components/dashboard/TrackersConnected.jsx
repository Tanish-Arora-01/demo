import { Check, MoreHorizontal } from "lucide-react";

const trackers = [
  { name: "Figma", color: "#A259FF", icon: "F", connected: true },
  { name: "Slack", color: "#4A154B", icon: "S", connected: true },
  { name: "Jira", color: "#0052CC", icon: "J", connected: true },
];

const TrackersConnected = () => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-center h-full">
      <div className="mb-3">
        <h4 className="text-sm font-semibold text-gray-800">Trackers connected</h4>
        <p className="text-xs text-gray-400">3 active connections</p>
      </div>

      <div className="flex items-center gap-3">
        {trackers.map((t) => (
          <div key={t.name} className="relative">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm"
              style={{ backgroundColor: t.color }}
            >
              {t.icon}
            </div>
            {t.connected && (
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-green-500 border-2 border-white flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
              </div>
            )}
          </div>
        ))}
        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TrackersConnected;
