'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
				b = prompt('На сколько оцените его?', '');
		
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('Error');
			i--;
		}
	}
}
rememberMyFilms();

// function lastFilm() {
// 	let i = 0;
// 	const a = prompt('Один из последних просмотренных фильмов?', '');
// 	const b = prompt('На сколько оцените его?', '');
// 	while (i < 2) {
// 		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 			personalMovieDB.movies[a] = b;
// 			continue;
// 		} else {
// 			console.log('Error');
// 			i--;
// 		}
// 	}
// }

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB.count >= 30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
}
detectPersonalLevel();

function showMyDB() {
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB);
	} else {
		console.log("DB is hidden");
	}
}
showMyDB();

function writeYourGenres() {
	for (let i = 1; i < 4; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
		// Другой вариант записи с созданием переменной. В 1-м варианте код работает быстрее
		// const genre = prompt(`Ваш любимый жанр под номером ${i}`);
		// personalMovieDB.genres[i - 1] = genre;
	}
}
writeYourGenres();

console.log(personalMovieDB);