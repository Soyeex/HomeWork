// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
document.addEventListener("DOMContentLoaded", () => {
    console.log("Все теги прогрузились")
})

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.addEventListener("load", () => {
    console.log("Страница загрузилась")
})

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// Класс "super_element" присутствует в элементе "div".
// Сообщение должно определять присутствует или отсутствует класс "super_element" у элемента, а также выводить в нижнем регистре верный тег в данной строке, по которому был совершен клик.
// Необходимо использовать делегирование.
document.body.addEventListener("click", function(event) {
  const element = event.target;
  if (element.matches("*")) {
      const tagName = element.tagName.toLowerCase();
      const hasClass = element.classList.contains("super_element") ? "присутствует" : "отсутствует";
      console.log(`Класс "super_element" ${hasClass} в элементе "${tagName}".`);
  }
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const textarea = document.querySelector("textarea");
  textarea.addEventListener("mouseenter", () => {
      console.log("Вы навели на textarea.");
  });

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
const ul = document.querySelector("ul");
  ul.addEventListener("click", function(event) {
      if (event.target.tagName === "BUTTON") {
          console.log(event.target.textContent);
      }
  });

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
// ОТВЕТ: Потому что мы кликаем по кнопкам в ul, а не по li.
// Для того, чтобы сначала выводился текст из 5 задания, можно использовать код:
// -----------------------------------------------------------------------------
// document.body.addEventListener("click", function(event) {
//   const element = event.target;
//   if (element.matches("button")) {
//       const text = element.textContent;
//       console.log(text);
//   }
// })
// -----------------------------------------------------------------------------

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li
const listItems = document.querySelectorAll("li");
  listItems.forEach((li, index) => {
      if ((index + 1) % 2 === 0) {
          li.style.backgroundColor = "lightgreen";
      }
  });
