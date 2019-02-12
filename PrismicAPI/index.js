const Prismic = require('prismic-javascript');

const API_URL = 'https://mutable-constant-prismic.cdn.prismic.io/api/v2';

export const getApi = async () => {
	const api = await Prismic.getApi(API_URL);
	return api;
}

export const getPosts = async () => {
	const api = await getApi();
	const response = await api.query(Prismic.Predicates.at('document.type', 'post'));
	return response;
}

export const getPostByUID = async (uid) => {
	const api = await getApi();
	const response = await api.getByUID('post', uid);
	return response;
}

export default {
	getApi,
	getPosts,
	getPostByUID
}