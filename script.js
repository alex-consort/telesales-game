let points = 0;

function addPoints() {
  points += 100;
  document.getElementById("points").innerText = points;
  alert("You earned 100 points! Total Points: " + points);
}
