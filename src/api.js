import axios from 'axios';

/**
 * Create an Axios instance with the base URL determined by the environment.
 */
const baseURL =
    import.meta.env.MODE === 'production'
        ? import.meta.env.VITE_API_BASE_URL_PROD
        : import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
    baseURL,
});

/**
 * Fetch a list of categories.
 * Accepts optional query parameters (e.g., { name: 'something' }) for filtering.
 * @param {Object} [queryParams={}] - Optional query params (e.g. { name: 'searchTerm' }).
 * @returns {Promise<Object>} The response data containing the categories.
 */
export async function fetchCategories(queryParams = {}) {
    try {
        const response = await apiClient.get('/categories/', { params: queryParams });
        return response.data;
    } catch (error) {
        throw error;
    }
}

/**
 * Fetch a single category by its slug.
 * @param {string} slug - The slug of the category.
 * @returns {Promise<Object>} The response data for the given category.
 */
export async function fetchSingleCategory(slug) {
    try {
        const response = await apiClient.get(`/category/${slug}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
}