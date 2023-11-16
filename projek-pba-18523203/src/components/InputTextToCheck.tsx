import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
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
          output = "Predicted as fake news";
        } else {
          output = "Predicted as not fake news";
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
    <div className="w-[700px]">
      <div className="flex flex-col">
        <p className=" text-left ml-2 font-semibold text-lg">
          CEK APAKAH TWEET MENGANDUNG PROMOSI JUDI{" "}
        </p>
        <textarea
          className="w-full px-4 
          py-2 text-base text-gray-700 placeholder-gray-400
           bg-white border border-gray-300 rounded-sm shadow-md
           appearance-none focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-transparent"
          id="comment"
          placeholder="Masukan teks tweet"
          name="comment"
          rows={15}
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => checkTextPrediction()}
          type="button"
          className="py-2 px-9 bg-slate-700
           hover:bg-slate-900 focus:ring-slate-500
            focus:ring-offset-slate-200 text-white 
             transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Check
        </button>
      </div>
    </div>
  );
}

export default InputTextToCheck;
