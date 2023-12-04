import App, { AppProps } from 'next/app';
import { AppContext } from 'next/dist/pages/_app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            My app
            <Component {...pageProps} />
        </>
    );
}
MyApp.getInitialProps = async (ctx: AppContext) => {
    const appProps = await App.getInitialProps(ctx);

    return appProps;
};

export default MyApp;
