import Link from 'next/link';
import PrismicAPI from '../PrismicAPI'

const IndexPage = ({response}) => {
	return (
		<div>
			<h1>Index</h1>
			<ul>
				{response && response.results && response.results.map(result => (
					<li>
						<Link as={`/post/${result.uid}`} href={`/post?uid=${result.uid}`}>
							<a>{result.data.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

IndexPage.getInitialProps = async () => {
	const response = await PrismicAPI.getPosts();
	return { response };
}

export default IndexPage; 