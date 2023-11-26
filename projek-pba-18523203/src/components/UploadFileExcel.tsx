import axios from "axios";
import { useState } from "react";
import { AxiosResponse } from "axios";
import { AxiosError } from "axios";

function UploadFileExcel() {
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

      console.log("Response:", response.data);
      alert(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Upload Excel</h1>
      <input type="file" onChange={handleFileChange} accept=".xlsx, .xls" />
      <button onClick={uploadFile}>Upload</button>
      {result && <div>{result}</div>}
    </div>
  );
}

export default UploadFileExcel;
