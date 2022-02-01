
(function() {

  const aPrev = document.querySelector(".left")
  const aNext = document.querySelector(".right")
  const caruselLine = document.querySelector(".carusel-line")
  const caruselLineItem = document.querySelector(".carusel-line-item")
  const caruselLineItemsAll = document.querySelectorAll(".carusel-line-item")

  // узнаю общую ширину элементов
  const countSlide = caruselLineItemsAll.length;

  let stop = 1; //количество отображаемых слайдов за раз
  let offset = 0;

  aNext.addEventListener( 'click', (event) => {

    event.preventDefault();
    if(stop !== countSlide) {

      offset -= caruselLineItem.clientWidth;
      caruselLine.style.left = `${offset}px`;
      stop++;
    }

  })
  aPrev.addEventListener( 'click', (event) => {

    event.preventDefault();
    if( stop !== 1 ){

      offset += caruselLineItem.clientWidth;
      caruselLine.style.left = `${offset}px`;
      stop--;
    }
  })

}())
