import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-slate-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
