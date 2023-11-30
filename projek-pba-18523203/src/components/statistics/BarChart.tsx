import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  RatioPredictionType,
  ResultPredictionType,
} from "../../constants/constants";

type PropsType = {
  resultPrediction: Array<ResultPredictionType>;
  ratioPrediction: RatioPredictionType;
};

function BarChart({ resultPrediction, ratioPrediction }: PropsType) {
  const options = {
    // maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#000000",
        font: {
          size: 20,
        },
        formatter: (value: any, context: any) => {
          return value;
        },
      },
    },
  };

  const data = [
    {
      id: 1,
      total: ratioPrediction.positive_promosi_judi,
      label: "positif",
    },
    {
      id: 2,
      total: ratioPrediction.negative_promosi_judi,
      label: "negatif",
    },
  ];

  const [userData, setUserData] = useState({
    labels: ["Promosi Judi", "Tidak Promosi Judi"],
    datasets: [
      {
        data: data.map((data) => data.total),
        backgroundColor: ["#fd7f6f", "#8bd3c7"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return <Bar data={userData} options={options} />;
}

export default BarChart;
