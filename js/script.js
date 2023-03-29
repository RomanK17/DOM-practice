/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки (str.length)

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм" (value:true)

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const add = document.querySelector(".promo__adv"),
        backgroundPromo = document.querySelector(".promo__bg"),
        genre = backgroundPromo.querySelector(".promo__genre"),
        filmsList = document.querySelector(".promo__interactive-list"),
        form = document.querySelector('.add'),
        checkbox = form.querySelector('[type="checkbox"]'),
        // btn = document.querySelector('button'),
        input = document.querySelector('.adding__input'),
        dlt = document.querySelector('.delete');


    add.remove();

    genre.textContent = "ДРАМА";

    backgroundPromo.style.backgroundImage = "url('img/bg.jpg')";
    const sortArr = (arr) => {
        arr.sort();
    }
    sortArr(movieDB.movies);


    function createMoviesList(films, parent) {
        parent.innerHTML = "";
        films.forEach((film, i) => {
            filmsList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
    <div class="delete"></div></li>`;
        });
    }
    createMoviesList(movieDB.movies, filmsList)


    form.addEventListener('submit', (event) => {
        let filmName = input.value.slice(0, 21);
        let addToFavorite = checkbox.checked;
        event.preventDefault();
        if (filmName) {
            if (filmName.length == 21) {
                filmName += "...";
            }
            movieDB.movies.push(filmName);
            console.log(movieDB.movies)
            sortArr(movieDB.movies);
            createMoviesList(movieDB.movies, filmsList);
        }
        event.target.reset();
    });

    // btn.addEventListener('click', (event) => {
    //     let a = input.value.slice(0, 21);
    //     event.preventDefault();
    //     if (a.length == 21) {
    //         a += "...";
    //     }
    //     movieDB.movies.push(a);
    //     console.log(movieDB.movies)
    // });

    dlt.addEventListener('click', () => {
        dlt.parentElement.remove();
    });
});