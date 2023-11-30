import Topbar from './topbar';

import Home from '../../pages/index';
import About from '../../pages/about';
import Projects from '../../pages/projects';
import StartPage from '../../pages/startpage';

export default function Layout({ children }) {
    const navComponents = {
		"HOME": Home,
		"ABOUT": About,
		"PROJECTS": Projects,
		"STARTPAGE": StartPage
    };

    return (
        <>
            <Topbar sideItems={navComponents} />
            {children}
        </>
    )
}