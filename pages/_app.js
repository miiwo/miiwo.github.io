import '../src/stylesheets/index.css'
import '../src/App.css';
import '../src/stylesheets/about.css'
import '../src/stylesheets/home.css'
import '../src/stylesheets/projects.css'
import '../src/stylesheets/startpage.css'

export default function MyApp({ Component, pageProps}) {
    return <Component {...pageProps} />
}