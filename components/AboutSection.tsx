import React from 'react'
import Image from 'next/image'
import { AboutContainer, Stack, Button } from './Styled'

import airdrop_img from '../media/img/airdrop.png'
import download_metatrust_img from '../media/img/download_meta_trust.png'
import bnb_buy_coin_img from '../media/img/bnb_buy_coin.png'
import pancake_img from '../media/img/pancakeswap_logo.png'
import superheroe_bnb from '../media/img/superheroe_bnb.png'

const AboutSection = (props:any) => {
    return (
        <AboutContainer>
            <Stack flow="column" maxWidth="1920px">
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
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div className='how_to_buy'>
                    <h1>HOW TO BUY <span className="bnbSHName">$BSH</span></h1>
                    <Stack flow="row" maxWidth="1920px" flexWrap="wrap">
                        <div className='htbStep'>
                            <Image src={download_metatrust_img} width={"200px"} height={"200px"} alt=""/>
                            <h3>Download MetaMask or TrustWallet</h3>
                            <p>Add the Binance Smart Chain to your network. You can do that by connecting to PancakeSwap it will automatically add the network.</p>
                        </div>
                        <div className='htbStep'>
                            <Image src={bnb_buy_coin_img} width={"200px"} height={"200px"} alt=""/>
                            <h3>Buy and send BNB to Metamask</h3>
                            <p>You can also convert any other token you own into BNBSuperheroes.</p>
                        </div>
                        <div className='htbStep'>
                            <Image src={pancake_img} width={"200px"} height={"200px"} alt=""/>
                            <h3>Swap for $BSH in Pancakeswap</h3>
                            <p>Buy and send BNB to MetaMask. After that go to PancakeSwap and exchange your BNB for BNBSuperheros. You can directly go to PancakeSwap with this link. Make sure to use above 13% slippage for your purchase.</p>
                        </div>
                        <div className='htbStep'>
                            <Image src={superheroe_bnb} width={"210px"} height={"200px"} alt=""/>
                            <h3>View BNBSuperheroes forever and hold</h3>
                            <p>You can add BNBSuperheros to your MetaMask or Trust Wallet. To view your BNBSuperheros, copy our contract address and click add token. Lastly HODL.</p>
                        </div>
                    </Stack>
                </div>
            </Stack>
        </AboutContainer>
    )
}

export default AboutSection;