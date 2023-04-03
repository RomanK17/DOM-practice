/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки 

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм" 

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            'Логан',
            'Лига справедливости',
            'Ла-ла лэнд',
            'Одержимость',
            'Скотт Пилигрим против...'
        ]
    };

    const add = document.querySelector('.promo__adv'),
        backgroundPromo = document.querySelector('.promo__bg'),
        genre = backgroundPromo.querySelector('.promo__genre'),
        filmsList = document.querySelector('.promo__interactive-list'),
        form = document.querySelector('.add'),
        checkbox = form.querySelector('[type="checkbox"]'),
        input = document.querySelector('.adding__input');

    const someChanges = () => {
        add.remove();

        genre.textContent = 'ДРАМА';

        backgroundPromo.style.backgroundImage = "url('img/bg.jpg')";
    };

    const sortArr = (arr) => {
        arr.sort();
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let filmName = input.value.slice(0, 21);
        const addToFavorite = checkbox.checked;
        if (addToFavorite) {
            console.log('Your favorite film have been added')
        }

        if (filmName) {

            if (filmName.length == 21) {
                filmName += '...';
            }

            movieDB.movies.push(filmName);
            console.log(movieDB.movies)

            sortArr(movieDB.movies);
            createMoviesList(movieDB.movies, filmsList);
        }
        event.target.reset();
    });

    // another method
    // btn.addEventListener('click', (event) => {
    //     let a = input.value.slice(0, 21);
    //     event.preventDefault();
    //     if (a.length == 21) {
    //         a += "...";
    //     }
    //     movieDB.movies.push(a);
    //     console.log(movieDB.movies)
    // });


    function createMoviesList(films, parent) {
        parent.innerHTML = '';

        films.forEach((film, filmNumber) => {
            parent.innerHTML += `<li class="promo__interactive-item">${filmNumber + 1} ${film}
    <div class="delete"></div>
    </li>`;
        });

        const dlt = document.querySelectorAll('.delete');
        dlt.forEach((btn, btnNumber) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(btnNumber, 1);

                createMoviesList(films, parent)
                sortArr(movieDB.movies);
                console.log(movieDB.movies)

            });
        });
    }

    someChanges();
    sortArr(movieDB.movies);
    createMoviesList(movieDB.movies, filmsList)

});

