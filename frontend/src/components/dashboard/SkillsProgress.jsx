import { TrendingUp, TrendingDown } from "lucide-react";

const skills = [
  { name: "Sport Skills", value: 71, trend: "down" },
  { name: "Blogging", value: 92, trend: "up" },
  { name: "Leadership", value: 33, trend: "down" },
  { name: "Meditation", value: 56, trend: "up" },
  { name: "Philosophy", value: 79, trend: "up" },
];

const SkillsProgress = () => {
  return (
    <div>
      <div className="mb-5">
        <h3 className="text-lg font-bold text-gray-800">Developed areas</h3>
        <p className="text-xs text-gray-400">Most common areas of interests</p>
      </div>

      <div className="flex flex-col gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-3">
            {/* Skill Name */}
            <span className="text-sm font-semibold text-gray-700 min-w-[100px] shrink-0">
              {skill.name}
            </span>

            {/* Progress Bar */}
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-blue-500 transition-all duration-500"
                style={{ width: `${skill.value}%` }}
              />
            </div>

            {/* Value */}
            <span className="text-sm font-bold text-gray-700 min-w-[35px] text-right">
              {skill.value}%
            </span>

            {/* Trend Arrow */}
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
              skill.trend === "up"
                ? "bg-blue-100 text-blue-500"
                : "bg-orange-100 text-orange-500"
            }`}>
              {skill.trend === "up" 
                ? <TrendingUp className="w-3 h-3" />
                : <TrendingDown className="w-3 h-3" />
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsProgress;
