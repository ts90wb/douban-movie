import { wxRequest } from '../utils/wxRequest';
const commonUrl = 'http://t.yushu.im';
//正在上映
const inTheaters = params => wxRequest(params, commonUrl + '/v2/movie/in_theaters');
//即将上映
const comingSoon = params => wxRequest(params, commonUrl + '/v2/movie/coming_soon');

//Top250
const top250 = params => wxRequest(params, commonUrl + '/v2/movie/top250');

//口碑榜
const publicPraise = params => wxRequest(params, commonUrl + '/v2/movie/weekly');

//北美票房榜
const usBox = params => wxRequest(params, commonUrl + '/v2/movie/us_box');

//新片榜
const newMovies = params => wxRequest(params, commonUrl + '/v2/movie/new_movies');
module.exports = {
    inTheaters,
    comingSoon,
    top250,
    publicPraise,
    usBox,
    newMovies
}