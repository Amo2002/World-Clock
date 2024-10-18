let parisElement = document.querySelector("#paris");
let parisTime = document.querySelector(".time");
let parisDate = document.querySelector(".date");
let parisDateAndTime = moment().tz("Europe/Paris");
parisDate.innerHTML = parisDateAndTime.format("MMMM Do YYYY");
parisTime.innerHTML = parisDateAndTime.format("h:mm:ss [<small>]A[</small>]");

let singaporeElement = document.querySelector("#singapore");
let singaporeTime = document.querySelector(".time");
let singaporeDate = document.querySelector(".date");
let singaporeDateAndTime = moment().tz("Asia/Singapore");
singaporeDate.innerHTML = singaporeDateAndTime.format("MMMM Do YYYY");
singaporeTime.innerHTML = singaporeDateAndTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

let johannesburgElement = document.querySelector("#Johannesburg");
let johannesburgTime = document.querySelector(".time");
let johannesburgDate = document.querySelector(".date");
let johannesburgDateAndTime = moment().tz("Africa/Johannesburg");
johannesburgDate.innerHTML = johannesburgDateAndTime.format("MMMM Do YYYY");
johannesburgTime.innerHTML = johannesburgDateAndTime.format(
  "h:mm:ss [<small>]A[</small>]"
);
