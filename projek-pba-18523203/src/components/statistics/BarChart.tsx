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
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
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
    labels: ["Positif", "Negative"],
    datasets: [
      {
        data: data.map((data) => data.total),
        backgroundColor: ["#b34444", "#4474b3"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return <Bar data={userData} options={options} />;
}

export default BarChart;
