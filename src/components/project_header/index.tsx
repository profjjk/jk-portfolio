import { useNavigate } from 'react-router';

export const ProjectHeader = ({ project, right } : { project: string, right: string}) => {
    const navigate = useNavigate();

    return (
        <section className={'header'}>
            <h1 onClick={() => navigate('/')}>
                Jordan Kelly
            </h1>
            <h2>{project}</h2>
            <div className={'tab'} style={{ right: right }} />
        </section>
    )
}