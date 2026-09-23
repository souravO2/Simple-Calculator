const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
  display.scrollLeft = display.scrollWidth;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "error";
  }
}

function deleteLast() {
  const temp = display.value;
  display.value = temp.slice(0, -1);
}
