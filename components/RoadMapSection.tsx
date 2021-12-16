import React from 'react'
import { Section, RoadMapContainer } from './Styled'
import useSWR from 'swr'

import "swiper/css/effect-coverflow"
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectCoverflow } from 'swiper'
SwiperCore.use([EffectCoverflow]);

const fetcher = (url:string) => fetch(url).then((res) => res.json())

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
    const { data, error } = useSWR('/api/roadmap', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const swiperStyle = {
        minWidth: '300px',
        minHeight: '550px',
        borderRadius: '20px',
        color: 'white'
    }
    
    return (
        <Section style={{
            margin: 'auto',
            borderRadius: '20px',
            display: 'flex',
            minHeight: '700px'
        }}>
            <RoadMapContainer>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={5}
                    updateOnWindowResize={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false
                    }}
                    speed={700}
                    onSlideChange={(slider) => {
                        slider.update();
                    }}
                    style={{
                        width: '100%',
                        overflowY: 'visible'
                    }}
                >
                    {data.map((obj: any, index: any) => (
                        <SwiperSlide key={index} style={swiperStyle}>
                            <RoadMapBlock data={obj}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </RoadMapContainer>
            
            {/* Roadmap view for smaller screen size */}
            <RoadMapContainer mobile>
                {data.map((obj: any, index: any) => (
                    <RoadMapBlock key={index} data={obj}/>
                ))}
            </RoadMapContainer>
        </Section>
    )
}

export default RoadMapSection;
