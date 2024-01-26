
window.onload = function () {

    // Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();








    var hour = 3;
    var minute = 60;
    var second = 60;
    var millisecond = 10;
    setInterval(function () {
        if (hour >= 10) {
            document.getElementById("timer").innerHTML = hour + " h : " + minute + " m : " + second + "." + millisecond + " s";
            countDown();
        } else if (millisecond === 10) {
            document.getElementById("timer").innerHTML = "0" + hour + " h : " + minute + " m : " + second + "." + "0 s";
            countDown();
        } else {
            document.getElementById("timer").innerHTML = "0" + hour + " h : " + minute + " m : " + second + "." + millisecond + " s";
            countDown();
        }
    }, 100);

    function countDown() {
        millisecond--;
        if (millisecond == 0) {
            second--;
            millisecond = 10;
            if (second == 0) {
                minute--;
                second = 60;
                if (minute == 0) {
                    hour--;
                    minute = 60;
                    if (hour == 0) {
                        hour = 4;
                    }
                }
            }
        }
    }
}

