"url strict";

const result = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generatebtn = document.getElementById("generate");
const clipboardbtn = document.getElementById("clipboard");

// www.net-comber.com/charset.html (site to get codes to generate letters)

const getRandomLower = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomUpper = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomNumber = function () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getRandomSymbol = function () {
  const symbols = "!@#$%^&*(){}=.,";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

//EVENT LISTENERS
clipboardbtn.addEventListener("click", function () {
  const textarea = document.createElement("textarea");
  const password = result.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});

generatebtn.addEventListener("click", function () {
  const length = +lengthEl.value;
  const isLower = lowercase.checked;
  const isUpper = uppercase.checked;
  const isNumber = numbers.checked;
  const isSymbols = symbols.checked;

  result.innerText = generatePassword(
    isLower,
    isUpper,
    isNumber,
    isSymbols,
    length
  );
});

const generatePassword = function (lower, upper, number, symbol, length) {
  // 1. set password var
  let generatedPassword = "";

  // 2. filter out unchecked types
  const typesCount = lower + upper + number + symbol;
  // console.log("typesCount", typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  // console.log("typesArr", typesArr);

  if (typesCount === 0) {
    return "";
  }

  // 3. loop over length
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      // console.log("funcName", funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }
  // 4. add final pw to pw var and return
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
};

// try {
//   console.log("start");
//   throw "something";
// } catch (err) {
//   console.log(err);
// }

// let x = [10, 20, 30, 40];
// let y = [50, 60];
// x.reverse().push(y);
// console.log(x);

// let z = "flowers".slice(2);
// console.log(z);

// let a = 3;
// console.log((a *= a));

// let n = 5 > 2 ? 10 : 20;
// console.log(n);

// let bool = (true && false) || true;
// console.log(bool);

// try {
//   const a = 1;
//   a++;
//   console.log("start");
// } catch (error) {
//   console.log("error");
// } finally {
//   console.log("end");
// }

// function fn(a) {
//   console.log("test");
//   a--;
//   if (a > 2) fn(a);
// }
// fn(6);

// let ani = 3 * 4 > 20 - 15;
// console.log(ani);

// let str = "10";
// let a = (str = 10);
// let b = str == 10;
// let c = str === 10;

// console.log(a, b, c);

// let a = 10;
// if (a > 100) a = 20;
// console.log(a);

// let err = 1;
// let test = 0;
// while (err > 0.001) {
//   err = err / 10;
//   test++;
// }
// console.log(test);

// const b = "hello";
// try {
//   console.log(b.toUpperCase());
// } catch (error) {
//   console.log(b);
// } finally {
//   console.log(b);
// }

// let msg1 = "hello";
// let msg2 = msg1.slice(-1);
// console.log(msg2 ? msg2 : msg2 + msg1);

// let x = 10;

// function tesst(x) {
//   console.log(x);
// }

// tesst(20);

// let numberss = [10, 20, 30];
// let x = 0;
// for (let n of numberss) x = x + n;
// console.log(x);

let x = 20n + 10;
console.log(x);
