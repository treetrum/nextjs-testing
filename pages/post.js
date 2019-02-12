import PrismicDOM from 'prismic-dom';
import PrismicAPI from '../PrismicAPI'

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
	const response = await PrismicAPI.getPostByUID(uid);
	return {response};
}

export default BlogPost;