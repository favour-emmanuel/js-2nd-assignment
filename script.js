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

// Love Calculator

function calculateLove() {
  let name1 = document.getElementById("name1").value;
  let name2 = document.getElementById("name2").value;

  if (name1 && name2) {
    let loveScore = Math.floor(Math.random() * 101);
    document.getElementById(
      "result2"
    ).innerText = `${name1} and ${name2} are ${loveScore}% match!!`;
  } else {
    document.getElementById("result2").innerText =
      "Please enter both names to calculate the love score.";
  }
}
