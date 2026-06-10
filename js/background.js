// 背景色変える
export function changeBackground(code) {
  if (code === 0) {
    document.body.style.backgroundColor = "#87CEEB";//快晴
  } else if (code <= 3) {
    document.body.style.backgroundColor = "#B0C4DE";//晴れ〜曇り
  } else if (code <= 48) {
    document.body.style.backgroundColor = "#D3D3D3";//霧
  } else if (code <= 67) {
    document.body.style.backgroundColor = "#5F9EA0";//雨
  } else if (code <= 77) {
    document.body.style.backgroundColor = "#F0F8FF";//雪
  } else if (code <= 82) {
    document.body.style.backgroundColor = "#778899";//にわか雨
  } else {
    document.body.style.backgroundColor = "#2F4F4F";//雷雨
  }
}
// http://localhost:8000