import axios from "axios";
import { useState } from "react";
import { AxiosResponse } from "axios";
import { AxiosError } from "axios";

function InputTextToCheck() {
  const [text, setText] = useState("");
  const apiUrl: string = "http://127.0.0.1:5000/predict";

  const checkTextPrediction = async () => {
    if (text.trim().length <= 20) {
      alert("Input text must be more than 20 characters");
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
        // Tanggapan berhasil
        console.log("Response:", response.data);
        let output = "";
        if (response.data.prediction === 1) {
          output = "Prediksi tweet mengandung promosi judi";
        } else {
          output = "Prediksi tweet tidak mengandung promosi judi";
        }
        alert(output);
      })
      .catch((error: AxiosError) => {
        // Tanggapan gagal
        if (error.response) {
          // Tanggapan diterima dengan kode status selain 2xx
          console.error("Error Response:", error.response.data);
        } else if (error.request) {
          // Tidak dapat membuat permintaan
          console.error("No Response Received:", error.message);
        } else {
          // Kesalahan lainnya
          console.error("Error:", error.message);
        }
      });
  };
  return (
    <div className="mx-32 w-full">
      <div className="flex flex-col">
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
      </div>
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => checkTextPrediction()}
          type="button"
          className="rounded-lg bg-slate-700 px-9 py-2 text-center text-base font-semibold 
          text-white shadow-md transition duration-200 ease-in hover:bg-slate-900 
          focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2  focus:ring-offset-slate-200 "
        >
          Check
        </button>
      </div>
    </div>
  );
}

export default InputTextToCheck;
