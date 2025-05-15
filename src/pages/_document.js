import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Basic meta tags */}
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="my site rn yay" />
                <meta name="author" content="BRYAN YEE" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#317EFB" />

                {/* Open Graph tags */}
                {/* <meta property="og:title" content="Your Site Title" />
                <meta property="og:description" content="Your site description here" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourdomain.com" />
                <meta property="og:image" content="https://yourdomain.com/og-image.jpg" /> */}

                {/* Twitter Card tags */}
                {/* <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Your Site Title" />
                <meta name="twitter:description" content="Your site description here" />
                <meta name="twitter:image" content="https://yourdomain.com/twitter-image.jpg" /> */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
