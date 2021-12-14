import React from 'react'
import { Section, RoadMapContainer } from './Styled'
import useSWR from 'swr'

import roadmap_bg from '../media/gif/roadmap_bg.gif'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Scrollbar, Mousewheel } from 'swiper'
SwiperCore.use([Scrollbar, Mousewheel]);

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
        minWidth: '350px',
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
                <Swiper slidesPerView={5} centeredSlides={true} freeMode={true} spaceBetween={50}>
                    {data.map((obj: any, index: any) => (
                        <SwiperSlide key={index} style={swiperStyle}>
                            <RoadMapBlock data={obj}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </RoadMapContainer>
        </Section>
    )
}

export default RoadMapSection;
