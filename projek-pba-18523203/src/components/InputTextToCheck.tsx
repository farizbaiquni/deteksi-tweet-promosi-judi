import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { AxiosError } from "axios";
import React from "react";

function InputTextToCheck() {
  const [text, setText] = useState("");
  const apiUrl: string = "http://127.0.0.1:5000/predict";

  const [showModal, setShowModal] = React.useState(false);
  const [showModalLoading, setShowModalLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState(false);

  const closeAllModals = () => {
    setShowModal(false);
    setShowModalLoading(false);
  };

  const checkTextPrediction = async () => {
    setShowModalLoading(true);
    if (text.trim().length <= 10) {
      alert("Input text must be more than 10 characters");
      return;
    }
    const postData = {
      text: text,
    };
    await axios
      .post(apiUrl, postData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response: AxiosResponse) => {
        setTimeout(() => {
          // Tanggapan berhasil
          setShowModalLoading(false);
          console.log("Response:", response.data);
          let output = "";
          if (response.data.prediction === 1) {
            setPredictionResult(true);
            output = "Prediksi tweet mengandung promosi judi";
          } else {
            setPredictionResult(false);
            output = "Prediksi tweet tidak mengandung promosi judi";
          }
          setShowModal(true);
        }, 2000);
      })
      .catch((error: AxiosError) => {
        // Tanggapan gagal
        if (error.response) {
          // Tanggapan diterima dengan kode status selain 2xx
          alert(`Error Response:, ${error.response}`);
          closeAllModals();
        } else if (error.request) {
          // Tidak dapat membuat permintaan
          alert(`No Response Received::, ${error.message}`);
          closeAllModals();
        } else {
          // Kesalahan lainnya
          alert(`Error:, ${error.message}`);
          closeAllModals();
        }
      });
  };
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-32">
      {showModal && (
        <Fragment>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-[700px] flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid p-5">
                  <h3 className="w-full text-2xl font-bold">Hasil Prediksi</h3>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <p
                    className={`mb-5 text-xl font-semibold ${
                      predictionResult ? "text-red-700" : "text-blue-700"
                    }`}
                  >
                    {predictionResult
                      ? "Tweet mengandung promosi"
                      : "Tweet tidak mengandung promosi"}
                  </p>
                  <p>Kalimat Tweet :</p>
                  <p className="text-blueGray-500 mt-2 h-56 overflow-y-auto text-lg leading-relaxed">
                    {text}
                  </p>
                </div>
                {/*footer*/}
                <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                  <button
                    className="mb-1 mr-1 rounded bg-emerald-700 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-60"
            onClick={() => setShowModal(false)}
          ></div>
        </Fragment>
      )}

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
      <textarea
        className="w-full appearance-none
           rounded-sm border border-gray-400 bg-white
           px-4 py-2 text-base text-gray-700 placeholder-gray-400
           shadow-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-200"
        id="comment"
        placeholder="Masukan teks tweet"
        name="comment"
        rows={13}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

      <div className="flex w-full justify-end">
        <button
          onClick={() => checkTextPrediction()}
          type="button"
          className="mt-11 rounded-lg bg-[#2a4a21] px-16 py-2 text-center text-base
          font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-slate-900
          focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2  focus:ring-offset-slate-200 "
        >
          Check Tweet
        </button>
      </div>
    </div>
  );
}

export default InputTextToCheck;
