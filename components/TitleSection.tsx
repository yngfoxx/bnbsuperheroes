import React, { useRef } from 'react'
import Image from 'next/image'
import { Section, Stack, TitleSectionWordings, ScrollDown, Button } from './Styled'

import grand_canyon from '../media/img/grand_canyon.png'
import female_hero from '../media/img/femal-superhero-silhouette.png'
import super_hero from '../media/img/superhero/superhero4.png'

const TitleSection = (props: any) => {
    const rellaxRef = useRef<HTMLDivElement>(null);

    return (
        <Section ref={props?.fRef} style={{
            marginTop: '20px',
            backgroundImage: `linear-gradient(to top, var(--sh-brown) 0%, #0000002b 30%), url(${grand_canyon})`,
            backgroundSize: '1920px',
            backgroundPosition: 'center',
            position: 'relative'
        }}>
            <Stack
                flow="row"
                maxWidth="1920px"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '75vw',
                    paddingTop: '110px',
                    margin: 'auto',
                    transform: 'translate(-50%, -50%)',
                    color: 'var(--white)',
                    zIndex: '999'
                }}
            >
               <TitleSectionWordings 
                    title="PLAY-TO-EARN"
                    body="Introducing play to earn in an action filled superheroes endless runner game."
                >
                    <br />
                    <Button width="300px" padding="18px">Join the hype</Button>
                </TitleSectionWordings>
                <div ref={rellaxRef} className="fhero">
                    <div className="female_hero">
                        <Image width="550px" height={"900px"} src={super_hero} alt="female_hero" />
                        {/* <Image width="550px" height={"900px"} src={female_hero} alt="female_hero" /> */}
                    </div>
                </div>
            </Stack>
            <ScrollDown />
        </Section>
    )
}

export default TitleSection;