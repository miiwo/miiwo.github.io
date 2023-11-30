import React from 'react'
import Image from 'next/image'
import info from '../src/information.json'
import koi_yinyang from '../public/res/koibg.png'

function ProjectHeader(props) {
    return (
	<div>
	    <span>Projects</span>
	    <h2>All Sideprojects</h2>
	</div>
    );
}


function ProjectList(props) {
    const sideprojectItems = info.project_list.map((item, i) =>
		<article className="entry" key={i}>
			<div className="inner-entry">
				<div id="icon"><i></i></div>
				<h2 className="proj-title"><a href={item.link}>{item.name}</a> {/*<span>{item.dev_cycle}</span> */}</h2>
				<p className="desc">{item.desc}</p>
				<div>
					
				</div>
			</div>
		</article>
    );

    return (
	<div>
	    <div className="projects-centered">
			{sideprojectItems}
	    </div>
	</div>
    );
}

function Projects(props) {
    return (
	<div className="projects">
	    <h1 className='display-4 projHeader'>Projects</h1>
	    <ProjectList />
		<Image src={koi_yinyang} width="10%" className='project-koi' />
	</div>
	
    );
}

export default Projects;
