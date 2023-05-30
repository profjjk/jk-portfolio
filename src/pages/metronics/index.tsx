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

export const Metronics = () => {
    const [ images ] = useState<Image[]>(projects[2].images);
    const [ photo, setPhoto ] = useState<Image | null>(null);

    return (
        <main id={'metronics'} className={'project'}>
            <ProjectHeader project={'Metronics'} right={'182px'} />

            <section className={'description'}>
                <h3>What is Metronics?</h3>
                <p>
                    Metronics is a small business that provides sales and service of heavy equipment
                    (A/C recycling machines, car lifts, brake lathes, etc.) to auto repair facilities across
                    Central California and the San Francisco Bay Area.
                </p>
                <p>
                    I designed and built their first website to allow their customers to submit service requests online and browse an
                    online catalogue of equipment that the company has available for sale. Since the creation of the website,
                    they have seen a surge in equipment sales and customer satisfaction when scheduling service.
                </p>

                <div>
                    <a href={'https://metronics-website.herokuapp.com/'} target={'_blank'} rel={'noreferrer'}><em>Visit the website &rarr;</em></a>
                    <br/>
                    <a href={'https://github.com/profjjk/metronics-official-website'} target={'_blank'} rel={'noreferrer'}><em>View the code on GitHub &rarr;</em></a>
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
                    {projects[2].tech.map((skill) => (
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