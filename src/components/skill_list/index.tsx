export const SkillList = (skills: any, header: string) => {
    return (
        <div className={'skill-area'}>
            <h2>{header}</h2>
            <div className={'skill-list'}>
                {skills.map((skill: any) => (
                    <div className={'tech'} key={skill}>{skill}</div>
                ))}
            </div>
        </div>
    )
}