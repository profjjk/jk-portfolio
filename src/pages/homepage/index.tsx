import skills from '../../data/tech-stack.json';
import projects from '../../data/projects.json';
import schools from '../../data/education.json';
import uuid from 'react-uuid';

export const Homepage = () => {
    return (
        <main id={'homepage'}>
            <section id={'bio'}>
                <div>
                    <h1>Jordan Kelly</h1>
                    <em>I am a full-stack developer with several years of experience in software development.</em>
                </div>

                <div>
                    <p>
                        What sets me apart as a software developer is my ability to leverage my understanding of human
                        behavior and psychology to create user-friendly and intuitive software applications that solve real
                        problems. I have worked on both consumer-facing websites and internal tools, and I have experience
                        working on multi-disciplinary teams using software development frameworks such as Agile and Scrum.
                    </p>
                </div>
            </section>

            <section id={'projects'}>
                <div>
                    <h2>Projects</h2>
                </div>

                <div className={'project-list'}>
                    <em>Select one of the projects below to see more details about it...</em>

                    {projects.map((p) => (
                        <div className={'project'} key={uuid()}>
                            <h3>{p.name}</h3>
                            <p>{p.summary}</p>
                        </div>
                    ))}

                    <a href={'https://www.linkedin.com/in/the-real-jordan-kelly/'} target={'_blank'} rel={'noreferrer'}>
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