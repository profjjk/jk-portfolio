import { useNavigate } from 'react-router';
import skills from '../../data/tech-stack.json';
import projects from '../../data/projects.json';
import uuid from 'react-uuid';

export const Homepage = () => {
    const navigate = useNavigate();

    return (
        <main id={'homepage'}>
            <section id={'bio'}>
                <div>
                    <h1>Jordan Kelly</h1>
                    <strong>Software Developer</strong>
                </div>

                <div>
                    <p>
                        I am a full-stack developer with several years of experience in software development.
                        I leverage an advanced degree in psychology and a diverse professional background to build web
                        applications focused on excellent user experience.
                    </p>
                    <a className={'link'} href={'assets/jordankelly-cv.pdf'} download={'jordankelly'}>
                        Download my résumé &rarr;
                    </a>
                </div>
            </section>

            <section id={'projects'}>
                <div>
                    <h2>Projects</h2>
                </div>

                <div className={'project-list'}>
                    <em>Select one of the projects below to see more details about it...</em>

                    {projects.map((p) => (
                        <div className={'project-link'} key={uuid()} onClick={() => navigate( p.page as string )}>
                            <h3>{p.name}</h3>
                            <p>{p.summary}</p>
                        </div>
                    ))}

                    <a className={'link'} href={'https://www.linkedin.com/in/the-real-jordan-kelly/'} target={'_blank'} rel={'noreferrer'}>
                        View my work history on LinkedIn &rarr;
                    </a>

                </div>
            </section>

            <section id={'technologies'}>
                <div>
                    <h2>Technologies</h2>
                </div>

                <div>
                    {skills.map((category) => (
                        <div className={'tech-stack'} key={uuid()}>
                            <h3>{category.name}</h3>
                            <div className={'tech-list'}>
                                {category.skills.map((skill) => (
                                    <div className={'tech'} key={uuid()}>{skill}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}