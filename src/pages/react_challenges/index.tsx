import { ProjectHeader } from '../../components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import projects from '../../data/projects.json';
import uuid from 'react-uuid';

type Image = {
    src: string,
    alt: string
}

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

            <section className={'technologies'}>
                <h3>Technologies Used</h3>
                <div className={'tech-list'}>
                    {projects[3].tech.map((skill) => (
                        <div className={'tech'} key={uuid()}>{skill}</div>
                    ))}
                </div>
            </section>

            {photo &&
                <div className={'image-modal'}>
                    <div className={'modal-content'}>
                        <div className={'close'} onClick={() => setPhoto(null)}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                        <img src={photo.src} alt={photo.alt} />
                    </div>
                </div>
            }
        </main>
    )
}