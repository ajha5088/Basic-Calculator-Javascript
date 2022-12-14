let currentResult = 0;
let logEntries = [];

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

//Gets input from the input field
function getUserNumberInput() {
  try {
    if (typeof (userInput.value === Number)) {
      return parseInt(userInput.value);
    }
  } catch (err) {
    const error = new Error(`Unable to get user input because of`, { err });
    console.log(error);
  }
}

function writeLog(opn, des, num, res) {
  try {
    const logEntry = {
      operation: opn,
      description: des,
      number: num,
      currentResult: res,
    };
    logEntries.push(logEntry); // adds/pushes the elements here pushing object onto the given array in the last.
  } catch (err) {
    const error = new Error(`Unable to write logs because of`, { err });
    console.log(error);
  }
  console.log(logEntries);
  console.log(logEntries[0]);
  //   console.log(logEntry.description);
}

// function createAndWriteOutput(operator, resultBeforeCalculation , calcNumber) {
//     const calDescription = `${resultBeforeCalculation} ${operator} ${calcNumber}`;
//     outputResult(currentResult,calDescription);
// }

async function add() {
  try {
    const enteredNumber = parseInt(userInput.value);
    const calDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    await outputResult(currentResult, calDescription);
    await writeLog("ADD", calDescription, enteredNumber, currentResult);
  } catch (err) {
    const error = new Error(`Unable to add because of`, { err });
    console.log(error);
  }
}
async function subtract() {
  try {
    const enteredNumber = await getUserNumberInput();
    const calDescription = `${currentResult} - ${enteredNumber}`;
    currentResult = currentResult - enteredNumber;
    await outputResult(currentResult, calDescription);
    await writeLog("SUBTRACT", calDescription, enteredNumber, currentResult);
  } catch (err) {
    const error = new Error(`Unable to subtract because of`, { err });
    console.log(error);
  }
}
async function multiply() {
  try {
    const enteredNumber = await getUserNumberInput();
    const calDescription = `${currentResult} * ${enteredNumber}`;
    currentResult = currentResult * enteredNumber;
    await outputResult(currentResult, calDescription);
    await writeLog("MULTIPLY", calDescription, enteredNumber, currentResult);
  } catch (err) {
    const error = new Error(`Unable to multiply because of`, { err });
    console.log(error);
  }
}
async function divide() {
  try {
    const enteredNumber = await getUserNumberInput();
    const calDescription = `${currentResult} / ${enteredNumber}`;
    currentResult = currentResult / enteredNumber;
    await outputResult(currentResult, calDescription);
    await writeLog("DIVIDE", calDescription, enteredNumber, currentResult);
  } catch (err) {
    const error = new Error(`Unable to subtract because of`, { err });
    console.log(error);
  }
}

//Functions = Code on demand . Define a function and use that later and anywhere you want
// If we have a number inside a string to convert it to number we can use "+" infront of the string it will convert it to a number
// let num = "123"
// +num will be 123
// to convert any number/anything to string string we use toString()

// undefined and null are data types
// undefined , i.e there is nothing= Default values of uninitialized variables.
// Create a value and dont assign a value at the beginning of equal sign

//null , i.e there is something , But never assumed by default,
// We can assign this a value if we want to "reset"/"clear" a variable 

// NaN = Technically its not a type number and can therefore be used for 
// calculations. If we run a calculation that does not
// include a number . 3 + "hi"

//keyword = typeof 

// .push (when we want to edit the existing one add data in the array). ArrayName.push("the field element we want to push in the array.")

