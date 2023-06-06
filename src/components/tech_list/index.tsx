import uuid from 'react-uuid';

export const TechList = ({ skills, header }: {
    skills: string[],
    header: string
}) => {
    return (
        <section className={'technologies'}>
            <h3>{header}</h3>
            <div className={'tech-list'}>
                {skills.map((skill: any) => (
                    <div className={'tech'} key={uuid()}>{skill}</div>
                ))}
            </div>
        </section>
    )
}