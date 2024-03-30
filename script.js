const display = document.getElementById("display");

const appendOnDisplay = (input) => {
  display.value += input;
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
    setTimeout(() => {
      display.value = "";
    }, 1000);
  }
};
const deleteDisplay = () => {
  display.value = display.value.slice(0, -1);
};

const clearDisplay = () => {
  display.value = "";
};
