import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Box } from "@mui/material";

type TProps = {
  data: any[];
  labels: string[];
};
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC<TProps> = ({ data, labels }) => {
  const options: any = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "left" as const,
        labels: {
          ...Chart.defaults.font,
          rotation: 90,
        },
      },
    },
  };
  const driversFinished = data.filter(
    (driver: any) => driver.Status === "Finished"
  );

  const driversElectrical = data.filter(
    (driver: any) => driver.Status === "Electrical"
  );
  const driversAccident = data.filter(
    (driver: any) => driver.Status === "Accident"
  );
  const driversHydraulics = data.filter(
    (driver: any) => driver.Status === "Hydraulics"
  );
  const driversOverheating = data.filter(
    (driver: any) => driver.Status === "Overheating"
  );

  const driversSuspension = data.filter(
    (driver: any) => driver.Status === "Suspension"
  );
  const data1 = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: [
          driversFinished.length,
          driversElectrical.length,
          driversAccident.length,
          driversHydraulics.length,
          driversOverheating.length,
          driversSuspension.length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ minWidth: "100%", minHeight: "150px" }}>
      <Pie data={data1} options={options} />
    </Box>
  );
};

export default PieChart;
