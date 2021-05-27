var iconMenu = document.querySelectorAll('.btnAcao')

iconMenu[0].addEventListener('click', () => {
    let menu = document.getElementById('menu')
    let lateral1 = document.getElementById('lateral1')
    let numb = document.getElementById('numb')
    let titleLate = document.getElementById('titleLate')
    let item = document.getElementById('item')
    let grid = document.getElementById('grid')
    let laateral2 = document.getElementById('lateral2')

    if (menu.classList.contains('hide')) {
        menu.classList.add('show')
        menu.classList.remove('hide')

        item.classList.add('hide')
        item.classList.remove('show')



        lateral1.classList.add('hide')
        lateral1.classList.remove('show')

        numb.classList.add('hide')
        numb.classList.remove('show')

        titleLate.classList.add('hide')
        titleLate.classList.remove('show')

        grid.classList.add('hide')
        grid.classList.remove('show')

        lateral2.classList.add('hide')
        lateral2.classList.remove('show')

    } else {
        menu.classList.add('hide')
        menu.classList.remove('show')

        lateral1.classList.add('show')
        lateral1.classList.remove('hide')

        numb.classList.add('show')
        numb.classList.remove('hide')

        titleLate.classList.add('show')
        titleLate.classList.remove('hide')

        item.classList.add('show')
        item.classList.remove('hide')

        grid.classList.add('show')
        grid.classList.remove('hide')

        lateral2.classList.add('show')
        lateral2.classList.remove('hide')
    }
})


var slides = document.querySelector('.slider-items').children;
var nextSlide = document.querySelector(".right");
var prevSlide = document.querySelector(".left");
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick = function() {
    next("next");
}
prevSlide.onclick = function() {
    next("prev");
}

function next(direction) {

    if (direction == "next") {
        index++;
        if (index == totalSlides) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalSlides - 1;
        } else {
            index--;
        }
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");

}


var slidess = document.querySelector('.games').children;
var nextSlides = document.querySelector(".right1");
var prevSlides = document.querySelector(".left1");
var totalSlidess = slidess.length;
var indexx = 0;

nextSlides.onclick = function() {
    nexts("nexts");
}
prevSlides.onclick = function() {
    nexts("prevs");
}

function nexts(direction) {
    if (direction == "nexts") {
        indexx++;
        if (indexx == totalSlidess) {
            indexx = 0;
        }
    } else {
        if (indexx == 0) {
            indexx = totalSlidess - 1;
        } else {
            indexx--;
        }
    }

    for (i = 0; i < slidess.length; i++) {
        slidess[i].classList.remove("actived");
    }
    slidess[indexx].classList.add("actived");

}