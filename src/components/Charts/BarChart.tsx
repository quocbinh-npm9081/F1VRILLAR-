import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
type TProps = {
  driverInfo: any;
};
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC<TProps> = ({ driverInfo }) => {
  console.log("driverInfo: ", driverInfo);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        display: false, // Ẩn label
      },
      title: {
        display: true,
        text: `${driverInfo.name} achievements`,
      },
    },
  };

  const labels = [
    "Podiums",
    "Points",
    "WorldChampionShips",
    "Highest Race Finish",
  ];
  const data = {
    labels,
    datasets: [
      {
        data: [
          driverInfo.podiums,
          driverInfo.points,
          driverInfo.worldChampionships,
          driverInfo.highestGridPosition,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
export default BarChart;
