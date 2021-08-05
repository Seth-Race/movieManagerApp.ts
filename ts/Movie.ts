export class Movie {

    id:number;
    title:string;
    year:number;
    rating:string;
    director:string;

    constructor(id: number, title: string, year: number, rating: string, director: string){
        this.id = id;
        this.title = title;
        this.year = year;
        this.rating = rating;
        this.director = director;
    };
};