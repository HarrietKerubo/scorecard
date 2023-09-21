let addBtn1El = document.querySelector("#home-one");
let addBtn2El = document.querySelector("#home-two");
let addBtn3El = document.querySelector("#home-three");
let addBtnGuest1El = document.querySelector("#guest-one");
let addBtnGuest2El = document.querySelector("#guest-two");
let addBtnGuest3El = document.querySelector("#guest-three");
let homeScoreEl = document.querySelector("#homeScore");
let guestScoreEl = document.querySelector("#guestScore");

addBtn1El.addEventListener("click", function () {
  let currentScore = parseInt(homeScoreEl.textContent);
  currentScore += 1;
  homeScoreEl.innerHTML = currentScore;
});

addBtn2El.addEventListener("click", function () {
  let currentScore = parseInt(homeScoreEl.textContent);
  currentScore += 2;
  homeScoreEl.innerHTML = currentScore;
});

addBtn3El.addEventListener("click", function () {
  let currentScore = parseInt(homeScoreEl.textContent);
  currentScore += 3;
  homeScoreEl.innerHTML = currentScore;
});

addBtnGuest1El.addEventListener("click", function () {
  let currentScore = parseInt(guestScoreEl.textContent);
  currentScore += 1;
  guestScoreEl.innerHTML = currentScore;
});

addBtnGuest2El.addEventListener("click", function () {
  let currentScore = parseInt(guestScoreEl.textContent);
  currentScore += 2;
  guestScoreEl.innerHTML = currentScore;
});

addBtnGuest3El.addEventListener("click", function () {
  let currentScore = parseInt(guestScoreEl.textContent);
  currentScore += 3;
  guestScoreEl.innerHTML = currentScore;
});
