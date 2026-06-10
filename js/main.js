import { codeToText } from "./weatherText.js";
import { changeBackground } from "./background.js";

// ボタンを押したら天気を取りに行く
document.getElementById("getBtn").addEventListener("click", getWeather);

// 天気を取得して表示する非同期関数
async function getWeather() {
  try {
    // 名古屋の現在の天気を取得するURL
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=35.18&longitude=136.91&current_weather=true";

    // ① URLにデータをお願いする（返事を待つ）
    const response = await fetch(url);
    // ② 返ってきたデータをJSONとして取り出す（これも待つ）
    const data = await response.json();

    // ③ 必要な値を取り出す（オブジェクトのプロパティアクセス！）
    const temp = data.current_weather.temperature;
    const code = data.current_weather.weathercode;

    // 自作ライブラリで数字→日本語に変換
    const weather = codeToText(code);
    changeBackground(code);

    // ④ DOMに表示する
    document.getElementById("temp").textContent =
      `${weather} / 気温 ${temp}℃`;

    console.log(data);

  } catch (error) {
    console.error(error);
      // 通信に失敗したらここに来る
    console.error("取得に失敗しました:", error);
    document.getElementById("temp").textContent = "取得に失敗しました";
  }
}