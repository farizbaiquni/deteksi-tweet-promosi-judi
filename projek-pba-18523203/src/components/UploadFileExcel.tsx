import axios, { AxiosResponse } from "axios";
import { useState, Fragment } from "react";
import {
  RatioPredictionType,
  ResultPredictionGroupByDateType,
  ResultPredictionType,
  StatistikMenuFeature,
} from "../constants/constants";

type propsType = {
  updateAllResultPrediction: (
    prediction: Array<ResultPredictionType>,
    rasio: RatioPredictionType,
    resultPredictionGroupByDate: Array<ResultPredictionGroupByDateType>,
    title: string,
  ) => void;
  changeDisplayMode: (mode: StatistikMenuFeature) => void;
};

function UploadFileExcel({
  updateAllResultPrediction,
  changeDisplayMode,
}: propsType) {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [showModalLoading, setShowModalLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile === undefined) return alert("Pilih file terlebih dahulu.");
    setFile(selectedFile);
  };

  const apiUrl: string = "http://127.0.0.1:5000/predict";

  function groupByDate(dataArray: Array<ResultPredictionType>) {
    const groupedData: { [date: string]: ResultPredictionGroupByDateType } = {};

    dataArray.forEach((data) => {
      const createdDate = new Date(data.created_at).toDateString();

      if (!groupedData[createdDate]) {
        groupedData[createdDate] = {
          date: createdDate,
          total_promosi_judi: 0,
          total_tidak_promosi_judi: 0,
        };
      }

      // Mengupdate nilai predictionOne dan totalPredictionTwo
      if (data.prediction === 1) {
        groupedData[createdDate].total_promosi_judi += 1;
      } else {
        groupedData[createdDate].total_tidak_promosi_judi += 1;
      }
    });

    // Mengubah objek hasil pengelompokkan menjadi array
    const resultArray = Object.values(groupedData);

    return resultArray;
  }

  const uploadFile = async () => {
    if (title.trim().length < 0) {
      alert("Masukkan judul terlebih dahulu.");
    }
    if (!file) {
      alert("Pilih file Excel terlebih dahulu.");
      return;
    }
    setShowModalLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios
        .post("http://127.0.0.1:5000/analisis", formData)
        .then((response: AxiosResponse) => {
          setTimeout(() => {
            let totalPositif = 0;
            let totalNegatif = 0;
            response.data.result.map((data: ResultPredictionType) => {
              if (data.prediction === 1) {
                totalPositif += 1;
              } else {
                totalNegatif += 1;
              }
            });

            const rasioPrediksi = {
              positive_promosi_judi: totalPositif,
              negative_promosi_judi: totalNegatif,
            };

            const resultPredictionGroupByDate = groupByDate(
              response.data.result,
            );

            updateAllResultPrediction(
              response.data.result,
              rasioPrediksi,
              resultPredictionGroupByDate,
              title,
            );
            setShowModalLoading(false);
            changeDisplayMode(StatistikMenuFeature.statistic);
          }, 2500);
        });
    } catch (error) {
      setShowModalLoading(false);
      alert(error);
    }
  };

  return (
    <Fragment>
      <div className="mt-8 space-y-3 px-28">
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold tracking-wide text-gray-500">
            Judul
          </label>
          <input
            className="rounded-lg border border-gray-300 p-2 text-base focus:border-indigo-500 focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Judul statistik"
          />
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold tracking-wide text-gray-500">
            Pilih File
          </label>
          <div className="flex w-full items-center justify-center">
            <label className="group flex h-60 w-full flex-col rounded-lg border-4 border-dashed border-gray-400 p-10 text-center">
              <div className="flex h-full w-full flex-col items-center justify-center text-center  ">
                <img
                  className=" mb-5 h-16 w-16 object-contain"
                  src="/icons/excel.png"
                  alt="freepik image"
                />
                <p className=" mb-3 font-semibold">
                  {file !== null ? file.name : ""}
                </p>
                <p className="pointer-none text-gray-500 ">
                  <span className="text-sm">Drag dan drop</span> file excel
                  disini <br /> atau{" "}
                  <span className="cursor-pointer text-blue-600  hover:underline">
                    pilih file
                  </span>{" "}
                  dari komputer
                </p>
              </div>
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept=".xlsx, .xls"
              />
            </label>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          <span>File type: xlsx, xls</span>
        </p>
        <div>
          <button
            onClick={uploadFile}
            className="focus:shadow-outline my-5 flex w-full cursor-pointer justify-center rounded-full bg-teal-800 p-4 font-semibold  tracking-wide text-gray-100 shadow-lg transition duration-300 ease-in hover:bg-blue-600 focus:outline-none"
          >
            ANALISIS
          </button>
        </div>
      </div>
      {showModalLoading && (
        <Fragment>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-[500px] max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="border-blueGray-200 flex  items-start justify-between rounded-t border-b border-solid p-5 py-8"></div>
                {/*body*/}
                <div className="flex items-center justify-center">
                  <img
                    src="/gifs/XVo6.gif"
                    alt="processing"
                    className=" my-7 h-14 w-14 bg-white"
                  />
                </div>
                {/*footer*/}
                <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                  <p className=" w-full text-center text-lg font-semibold text-gray-500">
                    Sedang memproses
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-60"
            onClick={() => alert("hello")}
          ></div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default UploadFileExcel;
