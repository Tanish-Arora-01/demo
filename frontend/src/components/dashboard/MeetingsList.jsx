import { ArrowUpRight, Calendar } from "lucide-react";

const meetings = [
  {
    id: 1,
    title: "Quick Daily Meeting",
    platform: "Zoom",
    platformColor: "#2D8CFF",
    time: "08:15 am",
    date: "Tue, 11 Jul",
  },
  {
    id: 2,
    title: "John Onboarding",
    platform: "Google Meet",
    platformColor: "#00897B",
    time: "09:30 pm",
    date: "Tue, 11 Jul",
  },
  {
    id: 3,
    title: "Call With a New Team",
    platform: "Google Meet",
    platformColor: "#00897B",
    time: "02:30 pm",
    date: "Tue, 12 Jul",
  },
  {
    id: 4,
    title: "Lead Designers Event",
    platform: "Zoom",
    platformColor: "#2D8CFF",
    time: "04:00 pm",
    date: "Tue, 15 Jul",
  },
];

const MeetingsList = () => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-bold text-gray-800">My meetings</h3>
        <Calendar className="w-5 h-5 text-gray-400" />
      </div>

      <div className="flex flex-col gap-4">
        {meetings.map((m) => (
          <div key={m.id} className="flex items-center justify-between group">
            <div className="flex items-start gap-3">
              {/* Date & Time */}
              <div className="text-right min-w-[70px]">
                <p className="text-[11px] text-gray-400 font-medium leading-tight">{m.date}</p>
                <p className="text-xs font-bold text-gray-700">{m.time}</p>
              </div>

              {/* Title & Platform */}
              <div>
                <p className="text-sm font-semibold text-gray-800 leading-tight">{m.title}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span
                    className="w-3 h-3 rounded-full inline-block"
                    style={{ backgroundColor: m.platformColor }}
                  />
                  <span className="text-[11px] text-gray-400">{m.platform}</span>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-600 transition-colors shrink-0" />
          </div>
        ))}
      </div>

      <button className="mt-4 text-xs font-semibold text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1">
        See all meetings <span className="text-sm">›</span>
      </button>
    </div>
  );
};

export default MeetingsList;
