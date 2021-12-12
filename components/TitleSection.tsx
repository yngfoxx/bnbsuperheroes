import React, { useRef } from 'react'
import Image from 'next/image'
import { Section, Stack } from './Styled'

import screen_1 from '../media/img/screen_1_bg.jpg'
import female_hero from '../media/img/femal-superhero-silhouette.png'

const TitleSection = (props:any) => {
    const rellaxRef = useRef<HTMLDivElement>(null);

    return (
        <Section style={{
            marginTop: '-185px',
            backgroundImage: `linear-gradient(to top, var(--sh-brown) 0%, #ffffff2b 30%), url(${screen_1})`,
            backgroundSize: '1920px',
            backgroundPosition: 'center',
            position: 'relative'
        }}>
            <Stack
                flow="row"
                maxWidth="1920px"
                style={{
                    position: 'absolute',
                    top: '450px',
                    left: '50%',
                    width: '75vw',
                    height: '600px',
                    margin: 'auto',
                    transform: 'translate(-50%, -50%)',
                    color: 'var(--white)',
                    zIndex: '999'
                }}
            >
                <div>
                    ACTION FILLED PLAY TO EARN SUPERHEROES CRYPTO GAMING
                </div>
                <div ref={rellaxRef}>
                    <Image 
                        className='fhero'
                        width="550px"
                        height={"900px"}
                        src={female_hero}
                        alt="female hero"
                    />
                </div>
            </Stack>
        </Section>
    )
}

export default TitleSection;