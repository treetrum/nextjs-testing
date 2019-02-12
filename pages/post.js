import GetPrismicAPI from '../PrismicAPI'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom';

const BlogPost = ({response}) => {
	return (
		<div>
			<h1>{response.data.title}</h1>
			<div dangerouslySetInnerHTML={{__html: PrismicDOM.RichText.asHtml(response.data.content)}}></div>
		</div>
	)
}

BlogPost.getInitialProps = async (context) => {
	const { uid } = context.query;
	const api = await GetPrismicAPI();
	const response = await api.getByUID('post', uid)
	return {response};
}

export default BlogPost;