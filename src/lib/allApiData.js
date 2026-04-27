import categoriesData from '@/data/categories.json';
import newsData from '@/data/news.json';

const getCategoriesData = () => {
    return categoriesData;
}

const getNewsData = () => {
    return newsData;
}

const getCategoriesData2 = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories', {cache: 'no-store'});
    const data = await res.json();
    return data;
}

export { getCategoriesData, getNewsData, getCategoriesData2 };