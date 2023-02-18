import '../src/stylesheets/index.css'
import '../src/App.css';
import '../src/stylesheets/about.css'
import '../src/stylesheets/home.css'
import '../src/stylesheets/projects.css'
import '../src/stylesheets/startpage.css'

import Home from './index';
import About from './about';
import Projects from './projects';
import StartPage from './startpage';


import { Helmet } from "react-helmet";
import Topbar from '../src/components/topbar';

export default function MyApp({ Component, pageProps}) {
    const navComponents = {
		"HOME": Home,
		"ABOUT": About,
		"PROJECTS": Projects,
		"STARTPAGE": StartPage
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Michelle Wong</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossorigin="anonymous" />
            </Helmet>
            <Topbar sideItems={navComponents} />
            <Component {...pageProps} />
        </>
    )
}