
console.log("I connected");
/*
(function() {
  const count = 6; //количество картинок
  const width = 300; // ширина картинок
  let position = 0; //положение ленты прокрутки
  const next = document.querySelector(".next")
  const prev = document.querySelector(".prev")
  const ulCarusel = document.querySelector(".carusel ul")
  const li = ulCarusel.querySelectorAll("li")
  console.log(ulCarusel)
  console.log(li)
  next.addEventListener("click", () => {console.log("I ping click next");
    position += width * count;
    position = Math.min(position, 0)
    ulCarusel.style.marginLeft = position + 'px'
  })
  prev.addEventListener("click", () => {console.log("I ping click prev");
    ulCarusel.style.transform = "translateX('-300' + 'px')"
  })
}())
*/

(function() {
  const next = document.querySelector(".next")
  const prev = document.querySelector(".prev")
  const carusel = document.querySelector(".carusel")
  const caruselLine = document.querySelector(".carusel-line")
  const caruselLineItem = document.querySelector(".carusel-line-item")
  let caruselLineItemsAll = document.querySelectorAll(".carusel-line-item")

  // узнаю общую ширину элементов, делю ее на пополам и инвертирую в отрицательноеяисло
  caruselLineItemsAll = Array.from(caruselLineItemsAll)
  const count = caruselLineItemsAll.length;

  let stop = 3;
  let offset = 0;
  next.addEventListener("click", () => {

    console.log("stop: ", stop)
    console.log("count: ", count)
    if(stop !== count) {

      offset -= caruselLineItem.clientWidth;
      caruselLine.style.left = `${offset}px`;
      stop++;
    }

})
  prev.addEventListener("click", () => {
    console.log("stop: ", stop)
    console.log("count: ", count)
    if( stop !== 3 ){

      offset += caruselLineItem.clientWidth;
      caruselLine.style.left = `${offset}px`;
      stop--;
    }

})

}())
