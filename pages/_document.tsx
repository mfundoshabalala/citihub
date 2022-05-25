import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static override async getInitialProps(context: DocumentContext) {
		return await Document.getInitialProps(context);
	}

	override render(): JSX.Element {
		return (
			<Html lang="en" className="scroll-smooth">
				<Head>
					<link rel="icon" href="/images/citi-logo.svg" />
				</Head>
				<body className="antialiased leading-normal text-zinc-700 caret-transparent">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
