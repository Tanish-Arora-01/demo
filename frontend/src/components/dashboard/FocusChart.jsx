import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChevronDown, ChevronsUp } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip);

const FocusChart = () => {
  const data = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Maximum of focus",
        data: [40, 55, 45, 60, 50, 65, 55, 70, 50, 60, 45, 55],
        borderColor: "rgba(239, 68, 68, 0.7)",
        backgroundColor: "rgba(239, 68, 68, 0.05)",
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 5,
      },
      {
        label: "Min or lack of focus",
        data: [20, 30, 35, 25, 40, 30, 45, 35, 50, 40, 55, 70],
        borderColor: "rgba(99, 102, 241, 0.7)",
        backgroundColor: "rgba(99, 102, 241, 0.05)",
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: (context) => context.dataIndex === 7 ? 5 : 0,
        pointBackgroundColor: "rgba(99, 102, 241, 1)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: "index",
    },
    scales: {
      x: {
        display: false,
        grid: { display: false },
      },
      y: {
        display: false,
        grid: { display: false },
        min: 0,
        max: 100,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    elements: {
      line: { capBezierPoints: true },
    },
  };

  const months = ["Aug", "Sep", "Oct", "Nov"];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start mb-1">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Focusing</h3>
          <p className="text-xs text-gray-400">Productivity analytics</p>
        </div>
        <button className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5 hover:bg-gray-100 transition-colors">
          Range: Last month
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      {/* Chart Area */}
      <div className="flex-1 flex relative mt-2">
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between pr-3 py-2">
          <ChevronsUp className="w-4 h-4 text-gray-300 mb-1" />
          {months.map((m, i) => (
            <span key={m} className={`text-[10px] font-medium ${i === 1 ? "text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded-md" : "text-gray-400"}`}>
              {m}
            </span>
          ))}
        </div>

        {/* Chart */}
        <div className="flex-1 relative">
          {/* Week 8 Bubble */}
          <div className="absolute top-2 left-[35%] z-10 bg-white rounded-full px-3 py-1 shadow-md border border-gray-100 text-center">
            <p className="text-[10px] font-bold text-gray-800">Week 8</p>
            <p className="text-[9px] text-gray-400">Unbalanced</p>
          </div>

          <div className="h-full">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-end mt-2">
        <div className="flex items-center gap-4">
          <ChevronsUp className="w-4 h-4 text-gray-300 rotate-180" />
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="text-[10px] text-gray-400">Maximum of focus</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            <span className="text-[10px] text-gray-400">Min or lack of focus</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-gray-800 leading-none">41%</p>
          <p className="text-[10px] text-gray-400 mt-0.5">Avg. Conc-ion</p>
        </div>
      </div>
    </div>
  );
};

export default FocusChart;
