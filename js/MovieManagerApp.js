"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Movie_1 = require("./Movie");
var movie1 = new Movie_1.Movie(1, "   Jay and Silent Bob Strike Back ", 2001, "R", "Kevin Smith");
var movie2 = new Movie_1.Movie(2, "   Mallrats                       ", 1995, "R", "Kevin Smith");
var movie3 = new Movie_1.Movie(3, "   Clerks                         ", 1994, "R", "Kevin Smith");
var movies = [movie1, movie2, movie3];
function display() {
    console.log("");
    console.log("List of Movies...");
    console.log("|ID|        |TITLE|                |YEAR|RATING|DIRECTOR|");
    movies.forEach(function (m) {
        console.log(m.id, m.title, m.year, m.rating, m.director);
    });
}
display();
var movie4 = new Movie_1.Movie(4, "   Clerks 2                       ", 2006, "R", "Kevin Smith");
movies.push(movie4);
display();
