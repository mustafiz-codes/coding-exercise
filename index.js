let parent = document.querySelector("#box-items"); // parent of numbers
let colors = ["#bfbfbf", "#2b8ead", "#72c3dc", "#2f454e"]; // specific color codes for number boxes
let previousColorCode = "#000"; // checker variable so that the nearest box don't have exact same color

//  on loading, it need to generate the numbers in sorted way
document.addEventListener(
  "DOMContentLoaded",
  function () {
    generateNumber("sort");
  },
  false
);

// generate numbers for according to its type
const generateNumber = (type) => {
  parent.innerHTML = "";
  let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // this array for random number selection process
  for (let i = 1; i <= 9; i++) {
    let item = document.createElement("li");
    let randomColor = chooseRandomColor(0, colors.length - 1); // random color picker from colors array

    if (type === "shuffle") {
      let randomNumber = chooseRandomNumber(0, numbersArray.length); // pick remaining numbers from the numbersArray
      let numberValue = numbersArray.splice(randomNumber - 1, 1); // remove the picked number from numbersArray
      item.textContent = numberValue + "";
    } else {
      item.textContent = i + "";
    }
    item.setAttribute("class", "box-item border-color bg-color text"); // add design in dynamic way
    item.style.backgroundColor = randomColor;
    item.style.borderLeft = "10px solid " + randomColor;

    parent.appendChild(item);
  }
};

// a random color background generator function
const chooseRandomColor = (min, max) => {
  let colorCode = Math.floor(Math.random() * (max - min + 1) + min);
  let newColorCode = colors[colorCode];

  // checking if matching with previous boxed color
  if (newColorCode !== previousColorCode) {
    previousColorCode = newColorCode;
    return newColorCode;
  } else {
    return chooseRandomColor(min, max);
  }
};

// a random number picking from  function
const chooseRandomNumber = (min, max) => {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
};
