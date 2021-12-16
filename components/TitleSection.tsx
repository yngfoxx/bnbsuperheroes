import React, { useRef } from 'react'
import Image from 'next/image'
import { Section, Stack, TitleSectionWordings, ScrollDown, Button } from './Styled'
import { Twitter, Telegram, Instagram } from './icon/filled'

import grand_canyon from '../media/img/grand_canyon.png'
import super_hero from '../media/img/superhero/superhero4.png'

const TitleSection = (props: any) => {
    const rellaxRef = useRef<HTMLDivElement>(null);

    return (
        <Section ref={props?.fRef} id={props?.id} style={{
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
                    <Button 
                        margin="0px 5px"
                        width="300px"
                        padding="18px" 
                        onClick={() => props.scrollBar.current.scrollIntoView(document.querySelector('#about'))}
                    >FLY WITH US!</Button>
                    <br /><br />

                    <div style={{display: 'flex'}}>
                        <Button
                            margin="0px 5px"
                            width="50px"
                            padding="12px 12px 9px 13px"
                            borderRadius="50%"
                            backgroundColor="transparent"
                            onClick={() => window.open('https://twitter.com/bnb_superheroes', '_blank')}
                        ><Twitter/></Button>
                        <Button
                            margin="0px 5px"
                            width="50px"
                            padding="12px 12px 9px 12px"
                            borderRadius="50%"
                            backgroundColor="transparent"
                            onClick={() => window.open('https://t.me/BNBsuperheroes', '_blank')}
                        ><Telegram/></Button>
                        <Button
                            margin="0px 5px"
                            width="50px"
                            padding="12px 11px 10px 14px"
                            borderRadius="50%"
                            backgroundColor="transparent"
                            onClick={() => window.open('https://instagram.com/bnbsuperheroes?utm_medium=copy_link', '_blank')}
                        ><Instagram/></Button>
                    </div>
                </TitleSectionWordings>
                <div ref={rellaxRef} className="heroImage">
                    <div className="super_hero_4">
                        <Image width="550px" height={"900px"} src={super_hero} alt="super_hero_4" />
                    </div>
                </div>
            </Stack>
            <ScrollDown />
        </Section>
    )
}

export default TitleSection;