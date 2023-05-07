//input elements
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
//submit
const submit = document.querySelector("img");

//label elemnts
const dayLabel = document.querySelector(".day");
const monthLabel = document.querySelector(".month");
const yearLabel = document.querySelector(".year");

//dislpay elements
const dayDisplay = document.querySelector("#dayDisplay");
const monthDisplay = document.querySelector("#monthDisplay");
const yearDisplay = document.querySelector("#yearDisplay");

const RESEST = {
  years: "--",
  months: "--",
  days: "--",
};

day.addEventListener("input", (e) => {
  changeLabelColor(day, dayLabel);
});
month.addEventListener("input", (e) => {
  changeLabelColor(month, monthLabel);
});

year.addEventListener("input", (e) => {
  changeLabelColor(year, yearLabel);
});

function changeLabelColor(date, label) {
  if (date.checkValidity()) {
    label.setAttribute("style", "color: var(--Smokey-grey);");
  } else label.setAttribute("style", "color: var(--Light-red);");
}

submit.addEventListener("click", (e) => {
  if (day.checkValidity() && month.checkValidity() && year.checkValidity()) {
    age = getAge(fetchDate());

    dislpay(age);
  } else dislpay(RESEST);
});
function fetchDate() {
  return `${month.value}.${day.value}/${year.value}`;
}

function dislpay(age) {
  console.log(age);
  yearDisplay.textContent = age.years;
  monthDisplay.textContent = age.months;
  dayDisplay.textContent = age.days;
}

function getAge(d) {
  var birthDate = new Date(d);
  var now = new Date();
  var years = now.getFullYear() - birthDate.getFullYear();
  var months = now.getMonth() - birthDate.getMonth();
  var days = now.getDate() - birthDate.getDate();
  // Adjust for months and days that have passed this year
  if (months < 0 || (months === 0 && now.getDate() < birthDate.getDate())) {
    years--;
    months += 12;
  }
  if (days < 0) {
    var monthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += monthDays;
    months--;
  }
  if (years < 0 || days < 0 || months < 0) {
    return RESEST;
  }
  return {
    years: years,
    months: months,
    days: days,
  };
}

console.log("");
