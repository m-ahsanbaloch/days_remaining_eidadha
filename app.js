var months = document.getElementById("month");
var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
// ================= Calculations-Started ===============/
function calculation() {
  var date = new Date().getTime();
  var eid = new Date("17 june 2024").getTime();
  var conversion = eid - date;
  months.value = Math.floor(conversion / (1000 * 60 * 60 * 24 * 31));
  days.value = Math.floor((conversion / (1000 * 60 * 60 * 24)) % 31).toString();
  if (days.value == -1) {
    days.value = "0";
  }
  hours.value = Math.floor((conversion / (1000 * 60 * 60)) % 24);
  minutes.value = Math.floor((conversion / (1000 * 60)) % 60);
  seconds.value = Math.floor(conversion / 1000) % 60;
}
// ================= Calculations-End ===============/
setInterval(calculation, 1000);
// console.log();
 