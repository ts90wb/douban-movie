import { wxRequest } from '../utils/wxRequest';
const commonUrl = 'https://douban.uieee.com/v2/movie/';
//综合类名
const totalBoard = (params, type) => wxRequest(params, commonUrl + type);
//正在上映
const inTheaters = params => wxRequest(params, commonUrl + 'in_theaters');
//即将上映
const comingSoon = params => wxRequest(params, commonUrl + 'coming_soon');

//Top250
const top250 = params => wxRequest(params, commonUrl + 'top250');

//口碑榜
const publicPraise = params => wxRequest(params, commonUrl + 'weekly');

//北美票房榜
const usBox = params => wxRequest(params, commonUrl + 'us_box');

//新片榜
const newMovies = params => wxRequest(params, commonUrl + 'new_movies');
//取一条电影信息
const findOne = itemId => wxRequest({}, commonUrl + 'subject/' + itemId);

module.exports = {
    inTheaters,
    comingSoon,
    top250,
    publicPraise,
    usBox,
    newMovies,
    totalBoard,
    findOne,
}