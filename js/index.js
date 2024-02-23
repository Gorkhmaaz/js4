//////Task 1
let lower = parseInt(prompt('Введите нижний диапозон'))
let upper = parseInt(prompt('Введите верхний диапозон'))
let sum = 0
for (let i = lower; i <= upper; i = i + 1) {
  sum = sum + i
}
alert(sum)


/////Task 2

let num1 = parseInt(prompt("Введите первое число: "));
let num2 = parseInt(prompt("Введите второе число: "));
let res = 0;

for (let i = 1; i <= Math.min(num1, num2); i = i + 1) {
  if (num1 % i === 0 && num2 % i === 0) {
    res = i;
  }
  
}
alert(res)




/////Task 3 
let numb = parseInt(prompt('Введите число '))
let end = '';

for (let i = 1; i <= numb; i = i + 1) {
  if (numb % i === 0) {
    end += i  
  }
  
}
alert(end)





////Task 4
let x = parseInt(prompt("Введите число: "));
let numberString = x.toString();
let summary = 0;

for (let i = 0; i < numberString.length; i = i + 1) {
  if (!isNaN(parseInt(numberString[i]))) {
    summary = summary + 1;
  }
}
alert(summary)





///Task 5
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < 10; i++) {
    let num = parseFloat(prompt("Введите число " + (i + 1) + ":"))

    if (num > 0) {
        positiveCount++;
    } else if (num < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }

    if (num % 2 === 0) {
        evenCount++;
    } else if (num !== 0) {
        oddCount++;
    }
}

alert("Положительных чисел: " + positiveCount + " Отрицательных чисел: " + negativeCount + " Нулей: " + zeroCount + " Четных чисел: " + evenCount + " Нечетных чисел: " + oddCount);














/////Task 6
while (true) {
  let number1 = parseInt(prompt("Введите первое число: "));
  let number2 = parseInt(prompt("Введите второе число: "));
  let operator = prompt("Введите оператор (+, -, *, /): ");
  let result;

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = number1 / number2;
      break;
    default:
      alert("Некорректный оператор");
  }
  alert(result)



  let answer = prompt("Хотите решить еще один пример? (да/нет)").toLowerCase();
  if (answer === 'нет') {
    break;
  }
}



