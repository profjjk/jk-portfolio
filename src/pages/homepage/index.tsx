import skills from '../../utils/tech-stack.json';
import uuid from 'react-uuid';

export const Homepage = () => {
    return (
        <main id={'homepage'}>
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