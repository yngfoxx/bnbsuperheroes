import React, { useRef } from 'react'
import { Section, RoadMapContainer } from './Styled'
import roadmap_bg from '../media/gif/roadmap_bg.gif'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, Parallax, Mousewheel, EffectCoverflow } from 'swiper'
SwiperCore.use([Navigation, Pagination, Scrollbar, Parallax, Mousewheel, EffectCoverflow]);

const RoadMapBlock = (props:any) => {
    const data = 'data' in props ? props.data : null
    if (!data) return (<div></div>)

    let iter = 0
    const blockBullet:any[] = []
    data.bullets.forEach((bullet:any) => {
        blockBullet.push(
            <li key={"block_bullet_"+data.title+"_"+iter} data-status={bullet.status}>
                <span>{bullet.text}</span>
            </li>
        )
        iter++
    })
    
    return (
        <div className="block">
            <h2>{data.title}</h2>
            <ul>{blockBullet}</ul>
        </div>
    )
}

const RoadMapSection = (props:any) => {
    const roadmapSwiper = useRef(null);
    const rmSwiperConfig = {
        centeredSlides: true,
        grabCursor: true,
        updateOnWindowResize: true,
        coverflowEffect: {
            rotate: 0,
            stretch: -10,
            depth: 0,
            modifier: 5,
            slideShadows: false,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
            stopOnLastSlide: true
        },
        preloadImages: false,
        watchSlidesProgress: true,
        speed: 800,
        parallax: true,
        mousewheel: false,
        onSlideChange: (rmSwiper: any) => {
            rmSwiper.update();
        },
        onSwiper: (swiperConf: any) => {
            roadmapSwiper.current = swiperConf;
        }
    };
    const swiperStyle = {
        width: '450px',
        height: '550px',
        backgroundColor: '#7e1313c2',
        backgroundSize: '400px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '20px',
        color: 'white'
    }
    return (
        <Section style={{
            backgroundImage:`url(${roadmap_bg})`,
            width: '95%!important',
            margin: 'auto',
            borderRadius: '20px',
            display: 'flex',
            minHeight: '700px',
            boxShadow: '0px 0px 20px rgba(0,0,0,0.25)'
        }}>
            <RoadMapContainer>
                <Swiper
                    effect='coverflow'
                    {...rmSwiperConfig}
                >
                    <SwiperSlide style={swiperStyle}>
                        <RoadMapBlock data={{
                            title: 'Q1 2021',
                            bullets: [
                                {
                                    text: 'Setting up legal entity',
                                    status: 'done'
                                },
                                {
                                    text: 'Core team formation',
                                    status: 'in_progress'
                                },
                                {
                                    text: 'Premium brand creation',
                                    status: 'idle'
                                }
                            ]
                        }}/>
                    </SwiperSlide>
                </Swiper>
            </RoadMapContainer>
        </Section>
    )
}

export default RoadMapSection;