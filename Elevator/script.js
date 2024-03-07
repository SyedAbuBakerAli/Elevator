let currentFloor = "ground";

function moveLift() {
  const lift = document.querySelector(".lift");
  const groundFloor = document.getElementById("groundFloor");
  const firstFloor = document.getElementById("firstFloor");
  const secondFloor = document.getElementById("secondFloor");

  if (currentFloor === "ground") {
    lift.style.animation = "moveUp 5s forwards";

    currentFloor = "first";
  } else if (currentFloor === "first") {
    lift.style.animation = " moveAgainUp  5s forwards";
    currentFloor = "second";
  }
}

function moveLiftDown() {
  const lift = document.querySelector(".lift");
  const groundFloor = document.getElementById("groundFloor");
  const firstFloor = document.getElementById("firstFloor");
  const secondFloor = document.getElementById("secondFloor");

  if (currentFloor === "second") {
    lift.style.animation = "moveDownAgain 5s forwards";

    currentFloor = "first";
  } else if (currentFloor === "first") {
    lift.style.animation = " moveDown  5s forwards";
    currentFloor = "ground";
  }
}
