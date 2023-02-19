//import '../src/stylesheets/index.css'
//import '../src/stylesheets/about.css'
//import '../src/stylesheets/projects.css'
//import '../src/stylesheets/startpage.css'
import '../src/stylesheets/mycustomcss.css'
import '../src/stylesheets/general.css'
import '../src/stylesheets/home.css'

import { Helmet } from "react-helmet";
import Layout from '../src/components/layout';

export default function MyApp({ Component, pageProps}) {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Michelle Wong</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossorigin="anonymous" />
            </Helmet>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            
        </>
    )
}