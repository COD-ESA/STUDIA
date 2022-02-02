(function() {
  const btnSend = document.querySelector(".lead button");//отправить заявку
  const formSend = document.querySelector("#formsend"); // элемент формы
  const aFormSend = document.querySelector(".dropdown-menu").lastElementChild;//тег а ссылка на форму разделе Contact в  хедере

  btnSend.addEventListener( 'click', () => {
    formSend.scrollIntoView({behavior: "smooth"});
  } )

  aFormSend.addEventListener( "click", (event) => {
    if(aFormSend.textContent === "Оставить заявку через форму.") {
      event.preventDefault();
      formSend.scrollIntoView({behavior: "smooth"});
    }
  })

}())
