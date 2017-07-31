var pictures = ["seattle.jpg", "vancouver.jpg", "losangeles.jpg", "portland.jpg"];
var i = 0

function next() {
  document.getElementById("switch").src = pictures[i];
  i = i + 1;
  if (i > 3) {
    i = 0;
  }
}

function back() {
  document.getElementById("switch").src = pictures[i];
  i = i - 1;
  if (i < -3) {
    i = 0;
  }

}
