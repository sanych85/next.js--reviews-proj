
import Document, { Html, Main,Head, NextScript, DocumentContext, DocumentInitialProps } from "next/document"

class MyDocument extends Document {
    static async getInitialProps(ctx:DocumentContext):Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }
    render() {
        return (
            <Html lang = "ru">
                <Head/>
                <body>
                    <Main></Main>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument 