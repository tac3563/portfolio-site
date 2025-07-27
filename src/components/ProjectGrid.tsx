import {projects} from './../data/data.ts';
import ProjectGridItem from './ProjectGridItem.tsx';

export default function ProjectGrid() {

    return (
        <main className="project-grid-section">
            <ul className="project-grid">
                {projects.map((project) => (
                    <ProjectGridItem key={project.name} img={project.imagePath} url={project.url}/>
                ))}
            </ul>
        </main>
    )
}