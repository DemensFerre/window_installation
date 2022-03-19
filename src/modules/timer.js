export const timer = (deadline) => {
  const timerDays = document.querySelectorAll(".count_1 span");
  const timerHours = document.querySelectorAll(".count_2 span");
  const timerMinutes = document.querySelectorAll(".count_3 span");
  const timerSeconds = document.querySelectorAll(".count_4 span");

  const getTimeRemaning = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaning = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaning / 60 / 60 / 24);
    let hours = Math.floor((timeRemaning / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaning / 60) & 60);
    let seconds = Math.floor(timeRemaning % 60);

    return { dateStop, dateNow, timeRemaning, days, hours, minutes, seconds };
  };

  const checkTime = (num) => {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  };

  const viewTime = (element, time) => {
    element.forEach((elem) => {
      elem.textContent = checkTime(time);
    });
  };

  const updateTimer = () => {
    let getTime = getTimeRemaning();

    if (getTime.dateStop > getTime.dateNow) {
      viewTime(timerDays, getTime.days);
      viewTime(timerHours, getTime.hours);
      viewTime(timerMinutes, getTime.minutes);
      viewTime(timerSeconds, getTime.seconds);
    } else {
      timerDays.textContent = "00";
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }

    if (getTime.timeRemaning > 0) {
      return true;
    }
  };

  if (updateTimer() === true) {
    setInterval(updateTimer, 1000);
  }
};
