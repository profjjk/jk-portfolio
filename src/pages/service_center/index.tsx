import { useState } from 'react';
import { ImageModal, ProjectHeader, TechList } from '../../components';
import { Image } from '../../utils/types';
import projects from '../../data/projects.json';

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
                    <a href={'https://service-center-crm.netlify.app/dashboard'} target={'_blank'} rel={'noreferrer'}><em>Demo the application &rarr;</em></a>
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

            <TechList skills={projects[1].tech} header={'Technologies Used'} />

            {photo &&
                <ImageModal photo={photo} setPhoto={setPhoto} />
            }
        </main>
    )
}