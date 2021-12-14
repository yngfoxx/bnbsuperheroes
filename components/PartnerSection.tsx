import React, { useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

import { PartnerContainer } from './Styled'

import bscImg from '../media/img/1/bsc.png'
import bscScanImg from '../media/img/1/bscscan.png'
import coinGeckoImg from '../media/img/1/coingecko.png'
import coinMarkCapImg from '../media/img/1/coinmarketcap.png'
import dexToolsImg from '../media/img/1/dextools.png'
import panCakeSImg from '../media/img/1/pancakeswap.png'
import pooCoin from '../media/img/1/poocoin.png'
import certik from '../media/img/1/certik.png'

const PartnerSection = (props: any) => {
    const swiperStyle = {
        minWidth: '300px',
        maxWidth: '300px',
        margin: 'auto'
    }
    return (
        <PartnerContainer>
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                freeMode={true}
            >
                <SwiperSlide style={swiperStyle}>
                    <Image className="psSlideImageContainer" src={bscImg} width="200px" height="50px" alt=""/>
                </SwiperSlide>

                <SwiperSlide style={swiperStyle}>
                    <Image className="psSlideImageContainer" src={bscScanImg} width="200px" height="50px" alt=""/>
                </SwiperSlide>

                <SwiperSlide style={swiperStyle}>
                    <Image className="psSlideImageContainer" src={coinGeckoImg} width="200px" height="50px" alt=""/>
                </SwiperSlide>

                <SwiperSlide style={swiperStyle}>
                    <Image className="psSlideImageContainer" src={coinMarkCapImg} width="200px" height="35px" alt=""/>
                </SwiperSlide>

                <SwiperSlide style={swiperStyle}>
                    <Image className="psSlideImageContainer" src={dexToolsImg} width="200px" height="50px" alt=""/>
                </SwiperSlide>

                <SwiperSlide style={swiperStyle}>
                    <Image className="psSlideImageContainer" src={panCakeSImg} width="200px" height="50px" alt=""/>
                </SwiperSlide>

                <SwiperSlide style={swiperStyle}>
                    <Image className="psSlideImageContainer" src={pooCoin} width="200px" height="50px" alt=""/>
                </SwiperSlide>

                <SwiperSlide style={swiperStyle}>
                    <Image className="psSlideImageContainer" src={certik} width="200px" height="50px" alt=""/>
                </SwiperSlide>

            </Swiper>
        </PartnerContainer>
    )
}

export default PartnerSection;