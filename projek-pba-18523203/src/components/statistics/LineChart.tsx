import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  RatioPredictionType,
  ResultPredictionGroupByDateType,
  ResultPredictionType,
} from "../../constants/constants";
import { faker } from "@faker-js/faker";

type PropsType = {
  resultPrediction: Array<ResultPredictionType>;
  ratioPrediction: RatioPredictionType;
  resultPredictionGroupByDate: Array<ResultPredictionGroupByDateType>;
};

function LineChart({
  resultPrediction,
  ratioPrediction,
  resultPredictionGroupByDate,
}: PropsType) {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    stacked: false,
    plugins: {},
    scales: {
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const labels = resultPredictionGroupByDate.map((data) => data.date);

  const [userData, setUserData] = useState({
    labels: resultPredictionGroupByDate.map(
      (data: ResultPredictionGroupByDateType) => data.date,
    ),
    datasets: [
      {
        label: "Dataset 1",
        data: resultPredictionGroupByDate.map(
          (data: ResultPredictionGroupByDateType) => data.total_promosi_judi,
        ),
        borderColor: "rgb(189, 59, 36)",
        backgroundColor: "rgba(189, 59, 36)",
        yAxisID: "y",
      },
      {
        label: "Dataset 2",
        data: resultPredictionGroupByDate.map(
          (data: ResultPredictionGroupByDateType) =>
            data.total_tidak_promosi_judi,
        ),
        borderColor: "rgb(107, 144, 255)",
        backgroundColor: "rgba(107, 144, 255)",
        yAxisID: "y1",
      },
    ],
  });

  return <Line options={options} data={userData} />;
}

export default LineChart;
