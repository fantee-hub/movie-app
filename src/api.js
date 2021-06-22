const base_url = 'https://api.themoviedb.org/3/';
const api_key = '8bb37e5168954fe65a7f4116d02971d1';

const getMonth = () =>{
   const month = new Date().getMonth() + 1;
   if (month < 10){
       return `0${month}`
   }else{
       return month
   }

}
const getDate = () => {
    const date = new Date().getDate();
    if (date < 10){
        return `0${date}`
    }else{
        return date
    }

}
const getYear = ()=>{
    const year = new Date().getUTCFullYear();
    return year
}


const month = getMonth();
const nextMonth = Number(month) + 1 < 10 ? `0${Number(month) + 1}`: Number(month)+ 1;
const date = getDate();
const year = getYear();
const fullDate = `${year}-${month}-${date}`;
const nextMonthDate = `${year}-${nextMonth}-${date}`


export const movieInTheatreUrl = ()=> `${base_url}discover/movie?primary_release_date.gte=${fullDate}&primary_release_date.lte=${nextMonthDate}&api_key=${api_key}`;
export const popularMoviesUrl = () => `${base_url}discover/movie?sort_by=popularity.desc&api_key=${api_key}`;
export const imageUrl = (image) => `https://image.tmdb.org/t/p/w500${image}`;








