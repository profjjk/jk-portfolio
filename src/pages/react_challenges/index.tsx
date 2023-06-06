import { ImageModal, ProjectHeader, TechList } from '../../components';
import { useState } from 'react';
import { Image } from '../../utils/types';
import projects from '../../data/projects.json';

export const ReactChallenges = () => {
    const [ images ] = useState<Image[]>(projects[3].images);
    const [ photo, setPhoto ] = useState<Image | null>(null);

    return (
        <main id={'react-challenges'} className={'project'}>
            <ProjectHeader project={'React Challenges'} right={'310px'} />

            <section className={'description'}>
                <h3>What are the React Coding Challenges?</h3>
                <p>
                    The React Coding Challenges are a series of small apps that showcase my knowledge and various skills
                    while solving various coding challenges within the React ecosystem.
                </p>

                <div>
                    <a href={'https://react-challenges.netlify.app/'} target={'_blank'} rel={'noreferrer'}><em>Check out the challenges &rarr;</em></a>
                    <br/>
                    <a href={'https://github.com/profjjk/react-challenges'} target={'_blank'} rel={'noreferrer'}><em>View the code on GitHub &rarr;</em></a>
                </div>
                <div>
                    <h4>Screenshots</h4>
                    <div className={'screenshots'}>
                        {images.map((image: Image) => (
                            <img src={image.src} alt={image.alt} onClick={() => setPhoto(image)}/>
                        ))}
                    </div>
                </div>
            </section>

            <TechList skills={projects[3].tech} header={'Technologies Used'} />

            {photo &&
                <ImageModal photo={photo} setPhoto={setPhoto} />
            }
        </main>
    )
}