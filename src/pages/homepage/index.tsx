import skills from '../../data/tech-stack.json';
import uuid from 'react-uuid';

export const Homepage = () => {
    return (
        <main id={'homepage'}>
            <section id={'bio'}>
                <p>
                    I am a full-stack developer with several years of experience in software development.
                </p>
                <p>
                    What sets me apart as a software developer is my ability to leverage my understanding of human
                    behavior and psychology to create user-friendly and intuitive software applications that solve real
                    problems. I have worked on both consumer-facing websites and internal tools, and I have experience
                    working on multi-disciplinary teams using software development frameworks such as Agile and Scrum.
                </p>
            </section>
            <section id={'tech-stack'}>
                <div className={'skill-area'} key={uuid()}>
                    <h2>Tech_Stack</h2>
                    {skills.map((category) => (
                        <div className={'skill-row'}>
                            <h3>{category.name}</h3>
                            <div className={'tech-list'}>
                                {category.skills.map((skill: string) => (
                                    <div key={skill}>{skill}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}