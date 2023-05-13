const hourDiv = document.getElementById("hour");
const minutesDiv = document.getElementById("minutes");
const secondsDiv = document.getElementById("seconds");

function clock() {
  const dateObject = new Date();
  const hour =
    dateObject.getHours() < 10
      ? "0" + dateObject.getHours()
      : dateObject.getHours();

  const minutes =
    dateObject.getMinutes() < 10
      ? "0" + dateObject.getMinutes()
      : dateObject.getMinutes();

  const seconds =
    dateObject.getSeconds() < 10
      ? "0" + dateObject.getSeconds()
      : dateObject.getSeconds();

  hourDiv.innerHTML = hour + ":";
  minutesDiv.innerHTML = minutes + ":";
  secondsDiv.innerHTML = seconds;
}

setInterval(clock, 1000);
