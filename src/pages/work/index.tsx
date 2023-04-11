import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import workList from '../../data/work.json';

type Image = {
    src: string,
    alt: string
}

export const Work = () => {
    const [ photo, setPhoto ] = useState<Image | null>(null);

    return (
        <main id={'work'}>
            <h1>Work_Experience</h1>

            {workList.map((job) => (
                <div className={'job'}>
                    <h2>{job.name}</h2>
                    <p>{job.description}</p>
                    <ul className={'screenshots'}>
                        {job.images.map((img) => (
                            <li>
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    onClick={() => setPhoto({ src: img.src, alt: img.alt })}/>
                            </li>
                        ))}
                    </ul>

                    <div className={'tech-list'}>
                        {job.tech.map((skill: string) => (
                            <div key={skill}>{skill}</div>
                        ))}
                    </div>
                </div>
            ))}

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