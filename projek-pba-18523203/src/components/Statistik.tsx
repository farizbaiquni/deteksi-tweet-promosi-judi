import {
  ResultPredictionType,
  RatioPredictionType,
  ResultPredictionGroupByDateType,
} from "../constants/constants";
import BarChart from "./statistics/BarChart";

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from "chart.js";
import PieChart from "./statistics/PieChart";
import LineChart from "./statistics/LineChart";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
);

type PropsType = {
  resultPrediction: Array<ResultPredictionType>;
  ratioPrediction: RatioPredictionType;
  resultPredictionGroupByDate: Array<ResultPredictionGroupByDateType>;
};

function Statistik({
  resultPrediction,
  ratioPrediction,
  resultPredictionGroupByDate,
}: PropsType) {
  // Example usage:
  const filename = "output.csv";
  const searchKeyword = "mkmk lang:id";
  const limit = 10;
  const authToken = process.env.TWITTER_KEY?.toString() ?? "";

  return (
    <div className="flex-col px-11 pb-11 pt-3">
      <div className="group mb-4 flex w-fit cursor-pointer items-center rounded-md bg-green-200 px-3 py-1">
        <img className="mr-3 h-8 w-8" src="/icons/previous.png" alt="back" />
        <p className="font-semibold text-gray-600 hover:font-bold group-hover:font-bold">
          Kembali
        </p>
      </div>
      <div className=" flex justify-around bg-gray-300">
        <div className="my-3 flex-col items-center rounded-md border-2 border-gray-400 bg-white px-5 py-5 shadow-xl">
          <p className="mb-3 text-center text-2xl font-semibold text-gray-600">
            3245
          </p>
          <p className="text-center text-sm text-gray-800">
            Jumlah Tweets Promosi Judi
          </p>
        </div>
        <div className="my-3 flex-col items-center rounded-md border-2 border-gray-400 bg-white px-5 py-5 shadow-xl">
          <p className="mb-3 text-center text-2xl font-semibold text-gray-600">
            3245
          </p>
          <p className="text-center text-sm text-gray-800">
            Jumlah Tweets Promosi Judi
          </p>
        </div>
        <div className="my-3 flex-col items-center rounded-md border-2 border-gray-400 bg-white px-5 py-5 shadow-xl">
          <p className="mb-3 text-center text-2xl font-semibold text-gray-600">
            3245
          </p>
          <p className="text-center text-sm text-gray-800">
            Jumlah Tweets Promosi Judi
          </p>
        </div>
      </div>
      <div className=" shadow-gray-00 my-5 flex h-[430px] w-full justify-center border-2 border-gray-300 px-11 pb-14 pt-6 shadow-lg">
        <div className=" w-full flex-col">
          <p className=" mb-3 text-center text-2xl font-bold text-gray-500">
            Tren Jumlah Tweet Judi vs. Non-Judi dari Waktu ke Waktu
          </p>
          <LineChart
            resultPrediction={resultPrediction}
            ratioPrediction={ratioPrediction}
            resultPredictionGroupByDate={resultPredictionGroupByDate}
          />
        </div>
      </div>

      <div className=" mt-9 w-full flex-col border-2 border-gray-300 p-5 shadow-lg">
        <p className=" mb-11 text-center text-2xl font-bold text-gray-500">
          Line Chart
        </p>
        <div className=" flex h-96 justify-around">
          <div className="flex h-full w-1/2  items-center justify-center px-5">
            <PieChart
              resultPrediction={resultPrediction}
              ratioPrediction={ratioPrediction}
            />
          </div>
          <div className="h-full w-full px-10">
            <BarChart
              resultPrediction={resultPrediction}
              ratioPrediction={ratioPrediction}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistik;
