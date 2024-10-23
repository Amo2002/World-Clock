function updateTime() {
  //Johannesburg
  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgTime = johannesburgElement.querySelector(".time");
  let johannesburgDate = johannesburgElement.querySelector(".date");
  let johannesburgDateAndTime = moment().tz("Africa/Johannesburg");
  johannesburgTime.innerHTML = johannesburgDateAndTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  johannesburgDate.innerHTML = johannesburgDateAndTime.format("MMMM Do YYYY");
  //Paris
  let parisElement = document.querySelector("#paris");
  let parisTime = parisElement.querySelector(".time");
  let parisDate = parisElement.querySelector(".date");
  let parisDateAndTime = moment().tz("Europe/Paris");
  parisTime.innerHTML = parisDateAndTime.format("h:mm:ss [<small>]A[</small>]");
  parisDate.innerHTML = parisDateAndTime.format("MMMM Do YYYY");

  //Singapore
  let singaporeElement = document.querySelector("#singapore");
  let singaporeTime = singaporeElement.querySelector(".time");
  let singaporeDate = singaporeElement.querySelector(".date");
  let singaporeDateAndTime = moment().tz("Asia/Singapore");
  singaporeTime.innerHTML = singaporeDateAndTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  singaporeDate.innerHTML = singaporeDateAndTime.format("MMMM Do YYYY");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="index.html">Refresh</a>
  `;
}
updateTime();
setInterval(updateTime, 1000);

let selectCity = document.querySelector("#city");
selectCity.addEventListener("change", updateCity);
