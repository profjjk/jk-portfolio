import { ImageModal, ProjectHeader, TechList } from '../../components';
import projects from '../../data/projects.json';
import { Image } from '../../utils/types';
import uuid from 'react-uuid';
import { useState } from 'react';


export const PriceSpider = () => {
    const [ images ] = useState<Image[]>(projects[0].images);
    const [ photo, setPhoto ] = useState<Image | null>(null);

    return (
        <main id={'pricespider'} className={'project'}>
            <ProjectHeader project={'PriceSpider'} right={'218px'} />

            <section className={'description'}>
                <h3>What is PriceSpider?</h3>

                <p>
                    <a href={'https://www.pricespider.com/where-to-buy/'} target={'_blank'} rel={'noreferrer'}>PriceSpider</a> is
                    a data company that "crawls" the internet to collect product information from online retailers to help
                    individual  brands track the availability and pricing of their products on ecommerce platforms.
                </p>
                <p>
                    My responsibility as a front-end developer was to take that raw data and create a user-friendly
                    interface to display it on a client's website. That product was called a "Where to Buy" widget.
                    Other responsibilities included working with our clients' design teams, ingesting client data into
                    SQL and MongoDB databases, troubleshooting data propogation issues, setting up Google Analytics,
                    and providing ongoing technical support to the client.
                </p>
                <p>
                    Some of the major clients I worked for included <a href={'https://us.pg.com/brands/'} target={'_blank'} rel={'noreferrer'}>Proctor & Gamble</a>, <a href={'https://www.newellbrands.com/our-brands/'} target={'_blank'} rel={'noreferrer'}>Newell Brands</a>, <a href={'https://www.sanofi.us/en/products-and-resources/OTC-products'} target={'_blank'} rel={'noreferrer'}>Sanofi</a>,
                    and <a href={'https://www.tcl.com/us/en'} target={'_blank'} rel={'noreferrer'}>TCL</a>.
                    While at PriceSpider, I also pioneered a new method of prototyping for my team by writing scripts
                    that dramatically decreased the time spent on developing and modifying prototypes.
                </p>

                <a
                    href={'https://cdn.pricespider.com/1/1798/6347ae23449121000e66f365/index.html?ps-country=US&ps-language=en'}
                    target={'_blank'}
                    rel={'noreferrer'}>
                    <em>Check out a working demo &rarr;</em>
                </a>

                <div>
                    <h4>Screenshots</h4>
                    <div className={'screenshots'}>
                        {images.map((image: Image) => (
                            <img src={image.src} alt={image.alt} onClick={() => setPhoto(image)}/>
                        ))}
                    </div>
                </div>
            </section>

            <TechList skills={projects[0].tech} header={'Technologies Used'} />

            {photo &&
                <ImageModal photo={photo} setPhoto={setPhoto} />
            }
        </main>
    )
}