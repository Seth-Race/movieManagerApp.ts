import { Movie } from "./Movie";

let movie1: Movie = new Movie(1, "   Jay and Silent Bob Strike Back ", 2001, "R", "Kevin Smith");
let movie2: Movie = new Movie(2, "   Mallrats                       ", 1995, "R", "Kevin Smith");
let movie3: Movie = new Movie(3, "   Clerks                         ", 1994, "R", "Kevin Smith");

let movies:Movie[] = [movie1, movie2, movie3];

function display(){
    console.log("");
    console.log("List of Movies...");
    console.log("|ID|        |TITLE|                |YEAR|RATING|DIRECTOR|");
    movies.forEach(m => {
    console.log(m.id, m.title, m.year, m.rating, m.director);
});
}
display();

let movie4: Movie = new Movie(4, "   Clerks 2                       ", 2006, "R", "Kevin Smith");
movies.push(movie4);

display();