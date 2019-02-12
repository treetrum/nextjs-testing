import Link from 'next/link';
import GetPrismicAPI from '../PrismicAPI'
import Prismic from 'prismic-javascript'

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
	const api = await GetPrismicAPI();
	const response = await api.query(Prismic.Predicates.at('document.type', 'post'))
	return { response };
}

export default IndexPage; 