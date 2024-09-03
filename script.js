// Life In Weeks Calculator

function calculateLifeInWeeks() {
  let age = document.getElementById("age").value;
  if (age) {
    lifeInWeeks(age);
  } else {
    document.getElementById("result").innerText = "Please enter your age.";
  }
}

function lifeInWeeks(age) {
  const maxAge = 90;
  const daysInYear = 365;
  const weeksInYear = 52;
  const monthsInYear = 12;

  let yearsLeft = maxAge - age;

  let daysLeft = yearsLeft * daysInYear;
  let weeksLeft = yearsLeft * weeksInYear;
  let monthsLeft = yearsLeft * monthsInYear;

  document.getElementById(
    "result"
  ).innerText = `You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`;
}
