import categoriesData from '@/data/categories.json';
import newsData from '@/data/news.json';

const getCategoriesData = () => {
    return categoriesData;
}

const getNewsData = () => {
    return newsData;
}

export { getCategoriesData, getNewsData };