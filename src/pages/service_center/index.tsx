import { useState } from 'react';
import { ProjectHeader } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import projects from '../../data/projects.json';
import uuid from 'react-uuid';

type Image = {
    src: string,
    alt: string
}

export const ServiceCenter = () => {
    const [ images ] = useState<Image[]>(projects[1].images);
    const [ photo, setPhoto ] = useState<Image | null>(null);

    return (
        <main id={'service-center'} className={'project'}>
            <ProjectHeader project={'Service Center'} right={'274px'} />

            <section className={'description'}>
                <h3>What is Service Center?</h3>
                <p>
                    Service Center is a <a href={'https://www.salesforce.com/crm/what-is-crm/'} target={'_blank'} rel={'noreferrer'}>Customer Relationship Manager (CRM)</a> that
                    I designed and developed to help small, service-oriented businesses maintain digital records of
                    customers, job invoices, and product inventory.
                </p>
                <p>
                    I worked for many years for a very small company that serviced large equipment for automotive repair shops
                    and saw first-hand that there was a strong need for this kind of software. Most of the existing CRMs
                    out there were too complex and too expensive to properly serve this small market, so I decided
                    to build one that focused on simplicity and affordability.
                </p>
                <div>
                    <a href={'https://metronics-webapp.netlify.app/'} target={'_blank'} rel={'noreferrer'}><em>Demo the application &rarr;</em></a>
                    <br/>
                    <a href={'https://github.com/profjjk/service-center'} target={'_blank'} rel={'noreferrer'}><em>View the code on GitHub &rarr;</em></a>
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
                    {projects[1].tech.map((skill) => (
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