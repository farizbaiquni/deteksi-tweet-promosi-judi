import axios from "axios";
import { useState } from "react";
import { AxiosResponse } from "axios";
import { AxiosError } from "axios";
import { ResultPredictionType } from "../constants/constants";

type propsType = {
  onChangeResultPrediction: (prediction: ResultPredictionType) => void;
};

function UploadFileExcel({ onChangeResultPrediction }: propsType) {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile === undefined) return alert("Pilih file terlebih dahulu.");
    setFile(selectedFile);
  };

  const apiUrl: string = "http://127.0.0.1:5000/predict";

  const uploadFile = async () => {
    if (!file) {
      alert("Pilih file Excel terlebih dahulu.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/analisis",
        formData,
      );

      onChangeResultPrediction(response.data);

      console.log("Response:", response.data);
      alert(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mt-8 space-y-3">
      <div className="grid grid-cols-1 space-y-2">
        <label className="text-sm font-bold tracking-wide text-gray-500">
          Judul
        </label>
        <input
          className="rounded-lg border border-gray-300 p-2 text-base focus:border-indigo-500 focus:outline-none"
          type=""
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
                <span className="text-sm">Drag dan drop</span> file excel disini{" "}
                <br /> atau{" "}
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
  );
}

export default UploadFileExcel;
