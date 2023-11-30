import {
  ResultPredictionType,
  RatioPredictionType,
  ResultPredictionGroupByDateType,
  StatistikMenuFeature,
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
import ChartDataLabels from "chartjs-plugin-datalabels";
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
  ChartDataLabels,
);

type PropsType = {
  resultPrediction: Array<ResultPredictionType>;
  ratioPrediction: RatioPredictionType;
  resultPredictionGroupByDate: Array<ResultPredictionGroupByDateType>;
  changeDisplayMode: (menu: StatistikMenuFeature) => void;
  resetTitleStatistic: () => void;
};

function Statistik({
  resultPrediction,
  ratioPrediction,
  resultPredictionGroupByDate,
  changeDisplayMode,
  resetTitleStatistic,
}: PropsType) {
  return (
    <div className="flex-col px-11 pb-11 pt-3">
      <div
        className="group mb-4 flex w-fit cursor-pointer items-center rounded-md bg-green-200 px-3 py-1"
        onClick={() => {
          changeDisplayMode(StatistikMenuFeature.upload);
          resetTitleStatistic();
        }}
      >
        <img className="mr-3 h-8 w-8" src="/icons/previous.png" alt="back" />
        <p className="font-semibold text-gray-600 hover:font-bold group-hover:font-bold">
          Kembali
        </p>
      </div>
      <div className="flex justify-around bg-gray-300">
        <div className="my-3 flex-col items-center rounded-md border-2 border-gray-400 bg-white px-5 py-5 shadow-xl">
          <p className="mb-3 text-center text-2xl font-semibold text-gray-600">
            {ratioPrediction.positive_promosi_judi +
              ratioPrediction.negative_promosi_judi}
          </p>
          <p className="text-center text-sm text-gray-800">Jumlah Tweets</p>
        </div>
        <div className="my-3 flex-col items-center rounded-md border-2 border-gray-400 bg-white px-5 py-5 shadow-xl">
          <p className="mb-3 text-center text-2xl font-semibold text-gray-600">
            {ratioPrediction.positive_promosi_judi}
          </p>
          <p className="text-center text-sm text-gray-800">
            Jumlah Tweets Promosi Judi
          </p>
        </div>
        <div className="my-3 flex-col items-center rounded-md border-2 border-gray-400 bg-white px-5 py-5 shadow-xl">
          <p className="mb-3 text-center text-2xl font-semibold text-gray-600">
            {ratioPrediction.negative_promosi_judi}
          </p>
          <p className="text-center text-sm text-gray-800">
            Jumlah Tweets Tidak Promosi Judi
          </p>
        </div>
      </div>
      <div className="my-5 flex h-[430px] w-full justify-center border-2 border-gray-300 bg-white px-11 pb-14 pt-6 shadow-lg shadow-gray-300">
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

      <div className="mt-9 flex w-full bg-white">
        <div className=" w-1/3 flex-col border-2 border-gray-300 p-5 shadow-lg">
          <p className=" mb-11 text-center text-2xl font-bold text-gray-500">
            Perbandingan Persentase
          </p>
          <PieChart
            resultPrediction={resultPrediction}
            ratioPrediction={ratioPrediction}
          />
        </div>
        <div className=" w-5 bg-[#F4F2EC]"></div>
        <div className=" w-2/3 flex-col border-2 border-gray-300 bg-white p-5 shadow-lg">
          <p className=" mb-11 text-center text-2xl font-bold text-gray-500">
            Perbandingan Jumlah
          </p>
          <BarChart
            resultPrediction={resultPrediction}
            ratioPrediction={ratioPrediction}
          />
        </div>
      </div>
      <div className="mt-10 w-full flex-col bg-white shadow-lg shadow-gray-300">
        <p className=" mb-7 pt-10 text-center text-2xl font-bold text-gray-500">
          Daftar Hasil Prediksi Tweet
        </p>
        <div className="mx-5 h-[500px] overflow-y-auto">
          <table className="table w-full rounded-lg border-2 border-gray-300 bg-white p-4 shadow">
            <thead>
              <tr>
                <th className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-4 font-semibold text-gray-700">
                  No
                </th>
                <th className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-4 font-semibold text-gray-700">
                  Teks Tweet
                </th>
                <th className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-4 font-semibold text-gray-700">
                  Tanggal
                </th>
                <th className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-4 font-semibold text-gray-700">
                  Prediksi
                </th>
              </tr>
            </thead>
            <tbody>
              {resultPrediction.map((tweet: ResultPredictionType, index) => (
                <tr className="text-gray-700">
                  <td className="dark:border-dark-5 border-2 border-gray-300 p-2 text-center">
                    {index + 1}
                  </td>
                  <td className="dark:border-dark-5 border-2 border-gray-300 p-2">
                    {tweet.full_text}
                  </td>
                  <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
                    20 November 2023
                  </td>
                  <td className="dark:border-dark-5 whitespace-nowrap border-2 border-gray-300 p-2">
                    {tweet.prediction === 1 ? "Promosi" : "Tidak"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className=" h-10"></div>
        </div>
      </div>
    </div>
  );
}

export default Statistik;
