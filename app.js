var months = document.getElementById("month");
var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
// ================= Calculations-Started ===============/
var date = new Date().getTime();
var eid = new Date("16 june 2024").getTime();
var conversion = eid - date;
months.value = Math.floor(conversion / (1000 * 60 * 60 * 24 * 31));
days.value = Math.floor(conversion / (1000 * 60 * 60 * 24));
hours.value = Math.floor(conversion / (1000 * 60 * 60));
minutes.value = Math.floor(conversion / (1000 * 60));
seconds.value = Math.floor(conversion / 1000);
// ================= Calculations-End ===============/
// console.log();
