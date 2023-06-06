import { ProjectHeader, ImageModal, TechList } from '../../components';
import { useState } from 'react';
import projects from '../../data/projects.json';
import { Image } from '../../utils/types';

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
                    <a href={'https://www.metronics-inc.com/'} target={'_blank'} rel={'noreferrer'}><em>Visit the website &rarr;</em></a>
                    <br/>
                    <a href={'https://github.com/profjjk/metronics-inc'} target={'_blank'} rel={'noreferrer'}><em>View the code on GitHub &rarr;</em></a>
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

            <TechList skills={projects[2].tech} header={'Technologies Used'} />

            {photo &&
                <ImageModal photo={photo} setPhoto={setPhoto} />
            }
        </main>
    )
}