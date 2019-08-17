var witchLesson = prompt(
  "Введите номер задания:1 - теги; 2 - картинка; 3 - калькулятор; 4 - калькулятор с HTML"
);
if (witchLesson == 1) {
  var a = prompt("Введите название тега: ");
  if (
    a == "p" ||
    a == "div" ||
    a == "h1" ||
    a == "h2" ||
    a == "h3" ||
    a == "h4" ||
    a == "h5" ||
    a == "h6"
  ) {
    var b = prompt("Введите слово, которое обернуть в тег:");
  } else {
    alert("Вы ввели не правильный тег");
  }
} else if (witchLesson == 2) {
  var a = prompt("Введите ссылку на картинку:");
} else if (witchLesson == 3) {
  var a = +prompt("Первое число");
  var deystv = prompt("Введите математическое действие");
  var b = +prompt("Второе число");
  switch (deystv) {
    case "+":
      alert("Ответ: " + (a + b));
      break;
    case "-":
      alert("Ответ: " + (a - b));
      break;
    case "*":
      alert("Ответ: " + a * b);
      break;
    case "/":
      alert("Ответ: " + a / b);
      break;
    case "%":
      alert("Ответ: " + (a % b));
      break;
    case "^":
      alert("Ответ: " + a ** b);
      break;
    default:
      alert("Попробуйте заново!");
      break;
  }
} else if (witchLesson == 4) {
  var a = +prompt("Первое число");
  var deystv = prompt("Введите математическое действие");
  var b = +prompt("Второе число");
  switch (deystv) {
    case "+":
      answer = a + b;
      break;
    case "-":
      aanswer = a - b;
      break;
    case "*":
      answer = a * b;
      break;
    case "/":
      answer = a / b;
      break;
    case "%":
      answer = a % b;
      break;
    case "^":
      answer = a ** b;
      break;
    default:
      alert("Попробуйте заново!");
      break;
  }
}
