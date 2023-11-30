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
    // maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          padding: 10,
        },
      },
      datalabels: {
        color: "#000000",
        font: {
          size: 20,
        },
        formatter: (value: any, context: any) => {
          const datapoints = context.chart.data.datasets[0].data;
          const totalSum = (total: any, datapoint: any) => {
            return total + datapoint;
          };
          const totalValue = datapoints.reduce(totalSum, 0);
          const percentageValue = ((value / totalValue) * 100).toFixed(0);

          return `${percentageValue} %`;
        },
      },
    },
  };

  const [userData, setUserData] = useState({
    labels: ["Tidak Promosi Judi", "Promosi Judi"],
    datasets: [
      {
        label: "Users Gained",
        data: [
          ratioPrediction.negative_promosi_judi,
          ratioPrediction.positive_promosi_judi,
        ],
        backgroundColor: ["#7eb0d5", "#fd7f6f"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  return <Pie data={userData} options={options} />;
}

export default PieChart;
