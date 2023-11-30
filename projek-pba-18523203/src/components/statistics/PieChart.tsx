import { useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  RatioPredictionType,
  ResultPredictionType,
} from "../../constants/constants";

type PropsType = {
  resultPrediction: Array<ResultPredictionType>;
  ratioPrediction: RatioPredictionType;
};

function PieChart({ resultPrediction, ratioPrediction }: PropsType) {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          padding: 10,
        },
      },
    },
  };

  const data = [
    {
      id: 1,
      total: ratioPrediction.positive_promosi_judi,
      label: "Promosi Judi",
    },
    {
      id: 2,
      total: ratioPrediction.negative_promosi_judi,
      label: "Tidak Promosi Judi",
    },
  ];

  const [userData, setUserData] = useState({
    labels: data.map((data) => data.label),
    datasets: [
      {
        label: "Users Gained",
        data: data.map((data) => data.total),
        backgroundColor: ["#fd7f6f", "#7eb0d5"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  return <Pie data={userData} options={options} />;
}

export default PieChart;
