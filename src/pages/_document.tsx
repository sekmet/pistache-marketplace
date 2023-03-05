import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '@/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale} className="h-full">
        <Head />
        <body className="h-full bg-white dark:bg-navy-900">
          <div
            className="fixed top-0 left-0 h-full w-1/2 bg-white"
            aria-hidden="true"
          />
          <div
            className="fixed top-0 right-0 h-full w-1/2 bg-gray-50"
            aria-hidden="true"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
