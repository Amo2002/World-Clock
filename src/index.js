//Paris
let parisElement = document.querySelector("#paris");
let parisTime = document.querySelector(".time");
let parisDate = document.querySelector(".date");
let parisDateAndTime = moment().tz("Europe/Paris");
parisTime.innerHTML = parisDateAndTime.format("h:mm:ss [<small>]A[</small>]");
parisDate.innerHTML = parisDateAndTime.format("MMMM Do YYYY");

//Johannesburg
let johannesburgElement = document.querySelector("#johannesburg");
let johannesburgTime = document.querySelector(".time");
let johannesburgDate = document.querySelector(".date");
let johannesburgDateAndTime = moment().tz("Africa/Johannesburg");
johannesburgTime.innerHTML = johannesburgDateAndTime.format(
  "h:mm:ss [<small>]A[</small>]"
);
johannesburgDate.innerHTML = johannesburgDateAndTime.format("MMMM Do YYYY");

//Singapore
let singaporeElement = document.querySelector("#singapore");
let singaporeTime = document.querySelector(".time");
let singaporeDate = document.querySelector(".date");
let singaporeDateAndTime = moment().tz("Asia/Singapore");
singaporeTime.innerHTML = singaporeDateAndTime.format(
  "h:mm:ss [<small>]A[</small>]"
);
singaporeDate.innerHTML = singaporeDateAndTime.format("MMMM Do YYYY");
