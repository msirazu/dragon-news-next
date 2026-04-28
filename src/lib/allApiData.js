import newsData from '@/data/news.json';

const getNewsData = () => {
    return newsData;
}

const getCategoriesData = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories', {cache: 'no-store'});
    const data = await res.json();
    return data.data.news_category;
}

const getCategoryNewsById = async(id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`, {cache: 'no-store'});
    const data = await res.json();
    return data.data;
}

const getCategoryNewsDetailById = async(id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`, {cache: 'no-store'});
    const data = await res.json();
    return data.data;
}

export { getNewsData, getCategoriesData, getCategoryNewsById, getCategoryNewsDetailById };