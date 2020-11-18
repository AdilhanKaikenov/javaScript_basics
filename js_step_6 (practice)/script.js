/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// 1
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        this.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    
        /* While a user submits an empty string or сlicks cancel or enters a non-number */
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = prompt("Сколько фильмов вы уже посмотрели?", ""); 
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const   title = prompt("Один из последних просмотренных фильмов?", ""),
                    rating = prompt("На сколько оцените его?", ""); 
        
            // 2
            if (title != null && rating != null && title != '' && rating != '' && title.length < 50) {
                this.movies[title] = rating;
                console.log("Done!");
            } else {
                console.log("Error");
                i--;
            }
        }
    },

    detectPersonalLevel: function() {
        if (this.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count < 30) {
            console.log("Вы классический зритель");
        } else if (this.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            const genre = prompt("Введите Ваши любимые жанче через запятую");

            if (genre !== '' && genre != null) {
                this.genres = genre.split(', ');
            } else {
                console.log("Вы ввели неккоректные данные или не ввели ничего вовсе.");
                i--;
            }
        }

        // 3
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    // 2
    toggleVisibleMyDB: function() {
        this.privat = (this.privat) ? false : true;
        console.log("Toggled Visiblity MyDB: " + this.privat);
    }

};