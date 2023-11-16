from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)

CORS(app)

# Memuat model dari file
loaded_model = joblib.load("model_prediksi_berita_palsu.joblib")


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/check")
def check():
    result = {"prediction": "OK"}
    return jsonify(result), 200


@app.route("/predict", methods=["POST"])
def predict():
    if request.method == "POST":
        text = request.json["text"]
        predicted_category = loaded_model.predict([text])[0]
        result = {"prediction": int(predicted_category)}
        return jsonify(result), 200


if __name__ == "__main__":
    app.run(debug=True)
