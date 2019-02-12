const Prismic = require('prismic-javascript');
const API_URL = 'https://mutable-constant-prismic.cdn.prismic.io/api/v2';

const api = async () => {
	const api = await Prismic.getApi(API_URL);
	return api;
}

export default api;