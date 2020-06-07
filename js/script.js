//Clock
const clock = () => {
const time = new Date();
  const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
  const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();

  document.querySelector('.clock span').textContent = `${hours} : ${minutes} : ${seconds}`;
}

setInterval(clock, 1000);


//Counter
const nowTime = new Date().getTime();
const endTime = new Date('2020-09-15 22:34:00').getTime();
const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');

setInterval (() => {
  const nowTime = new Date().getTime();

  const time = endTime - nowTime;
  const days = Math.floor((endTime / (1000*60*60*24)) - (nowTime / (1000*60*60*24)));
  let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
  hours = hours < 10 ? `0${hours}` : hours;
  const minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
  const secs = Math.floor((endTime / 1000 - nowTime / 1000) % 60);

  spanD.textContent = days;
  spanH.textContent = hours;
  spanM.textContent = minutes;
  spanS.textContent = secs
}, 1000)
