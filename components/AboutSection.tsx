import React from 'react'
import Image from 'next/image'
import { AboutContainer, Stack } from './Styled'

import airdrop_img from '../media/img/airdrop.png'

const AboutSection = (props:any) => {
    return (
        <AboutContainer>
            <Stack flow="row" maxWidth="1920px" flexWrap="wrap">
                <div className='airdrop_img'>
                    <Image width={"400px"} height={"400px"} src={airdrop_img} alt="airdrop" />
                </div>
                <p>
                    <span className="bnbSHName">BNB Superheroes</span> is a play to earn game built on the binance network kicking off as a 2D endless runner game that offers basic yet 
                    addictive in-game experience and an engaging scoreboard that pushes competitve gameplay at all skill level by additionally improving 
                    the players chances at obtaining BSH platform tokens through pre-scheduled periodic airdrops.
                </p>
            </Stack>
        </AboutContainer>
    )
}

export default AboutSection;