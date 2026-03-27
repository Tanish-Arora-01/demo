import { Clock, CheckCircle2 } from "lucide-react";

const TaskCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4 h-full">
      {/* Prioritized Tasks */}
      <div className="rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between min-h-[180px]"
        style={{
          background: "linear-gradient(135deg, #fdd6c7 0%, #f5c6d0 40%, #d4c4e8 100%)"
        }}
      >
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold text-gray-800 text-sm leading-tight">Prioritized</h4>
            <h4 className="font-semibold text-gray-800 text-sm">tasks</h4>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center">
            <Clock className="w-4 h-4 text-gray-700" />
          </div>
        </div>
        <div>
          <p className="text-4xl font-bold text-gray-800 mb-0.5">83%</p>
          <p className="text-xs text-gray-600 font-medium">Avg. Completed</p>
        </div>
      </div>

      {/* Additional Tasks */}
      <div className="rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between min-h-[180px]"
        style={{
          background: "linear-gradient(135deg, #c8f0e6 0%, #d0eef5 40%, #c4dbe8 100%)"
        }}
      >
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold text-gray-800 text-sm leading-tight">Additional</h4>
            <h4 className="font-semibold text-gray-800 text-sm">tasks</h4>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-gray-700" />
          </div>
        </div>
        <div>
          <p className="text-4xl font-bold text-gray-800 mb-0.5">56%</p>
          <p className="text-xs text-gray-600 font-medium">Avg. Completed</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCards;
