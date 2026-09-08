document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("businessCount").textContent = "13+";
  document.getElementById("categoryCount").textContent = "4";
  document.getElementById("locationCount").textContent = "3";

  document.getElementById("featuredGrid").innerHTML = `
    <div style="
      padding:30px;
      background:#e9f7ef;
      border-radius:18px;
      text-align:center;
      font-size:20px;
      font-weight:700;
      color:#087f3f;
    ">
      JavaScript is working ✅
    </div>
  `;

  document.getElementById("businessGrid").innerHTML = `
    <div style="
      padding:30px;
      background:#f6f8f7;
      border-radius:18px;
      text-align:center;
      font-size:20px;
    ">
      Business directory is working ✅
    </div>
  `;

});
