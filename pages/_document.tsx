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
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Macondo&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap"
						rel="stylesheet"
					></link>
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
