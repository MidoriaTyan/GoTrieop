document.addEventListener('DOMContentLoaded', function() { //фунция чтобы с начало загрузиля дом 

const slider = document.querySelector('.destinations__img') //находим контейнер
const sliders = Array.from(slider.querySelectorAll('img')) // находим картинки и преобразовываем их в массив
const btn = document.querySelector('.prev').addEventListener('click', prevSlider)

const slideCount = sliders.length
let slideIndex = 0


function prevSlider(){
  slideIndex = (slideIndex - 1 + slideCount) % slideCount

updateSlider()

}

// обновление отображение слайдера
function updateSlider(){
  sliders.forEach((slider, index) => {
      if (index === slideIndex) {
        slider.style.width = '380px'
        slider.style.transition = '0.5s'
        
      } else {
        slider.style.width = '335px'
      }
  })
}

updateSlider()

})