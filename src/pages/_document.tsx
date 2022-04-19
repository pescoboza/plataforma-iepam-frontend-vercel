import Document, { Html, Head, Main, NextScript } from "next/document";
import Favicons from "@/components/Favicons";

class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //   const initialProps = await Document.getInitialProps(ctx);
    //   return { ...initialProps };
    // }

    render() {
        return (
            <Html lang="es">
                <Head>
                    <Favicons />
                    <meta name="author" content="Tec de Monterrey" />
                </Head>
                <body className="bg-gray-50">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
