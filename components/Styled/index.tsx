import styled from 'styled-components'

import super_hero from '../../media/img/superhero/superhero4.png'
import bnb_heroes_logo from '../../media/img/logo.png'
import sky_img from '../../media/img/sky.jpg'
import bsh_banner from '../../media/img/bsh_banner.png'
import { url } from 'inspector'


interface TopBarComponentProps {
    width?: string;
    height?: string;
    mobile?: boolean;
    menuButton?: boolean;
}
export const TopBar: any = styled.div<TopBarComponentProps>`
    position: fixed !important;
    width: ${p => 'width' in p ? p.width : '100%'};
    height: ${p => 'height' in p ? p.height : '70px'};
    padding-bottom: 20px;
    padding-top: 24px;
    background-color: var(--sh-trans-red);
    display: flex;
    flex-flow: row;
    justify-content: center;
    margin: auto;
    position: relative;
    border-top: 10px solid var(--sh-blue);
    background-color: var(--sh-pale-red);
    background-image: linear-gradient(315deg, var(--sh-pale-red) 0%, var(--sh-light-red) 50%, var(--sh-pale-red) 90%);
    z-index: 999;
    .logo {
        @media screen and (max-width: 800px) {
            position: relative;
            span {
                right: 0px;
                top: 0px;
                left: auto;
                width: 100px;
                height: 50px;
            }
        }
    }
    span {
        display: block;
    }
    .mobileMenu {
        overflow: hidden;
        position: absolute;
        left: 0px;
        right: 0px;
        top: 60px;
        background-color: var(--sh-trans-brown);
        & > div {
            padding: 20px 10px;
            text-align: left;
        }
        &[data-state="true"] {
            max-height: none;
        }
        &[data-state="false"] {
            max-height: 0px;
        }
    }
`
export const TBItem: any = styled.div<TopBarComponentProps>`
    width: ${p => 'width' in p ? p.width : '200px'};
    height: ${p => 'height' in p ? p.height : 'auto'};
    text-transform: uppercase;
    font-family: 'secularone';
    color: var(--white);
    margin: auto 10px;
    text-align: center;
    display: ${p => 'mobile' in p ? 'none' : 'block'};
    cursor: pointer;
    &:hover {
        color: var(--sh-light-yellow);
    }
    @media screen and (max-width: 800px) {
        display: ${p => 'mobile' in p ? 'block' : 'none'};
        margin: ${p => 'menuButton' in p ? '-9px auto auto 20px' : 'auto'};
        width: ${p => 'menuButton' in p ? '30px' : 'auto'};
    }
`


interface LogoComponentProps {
    logo?: boolean;
    width?: string;
    height?: string;
    backgroundImage?: any;
}
export const Logo: any = styled.span<LogoComponentProps>`
    width: ${p => 'width' in p ? p.width : '100%'};
    height: ${p => 'height' in p ? p.height : '100%'};
    background-image: url( ${p => 'backgroundImage' in p ? p.backgroundImage : bnb_heroes_logo});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0px -19px;
    position: absolute;
    top: ${p => 'logo' in p ? (p.logo ? '60%' : '50%') : '50%'};
    left: 50%;
    transform: translate(-50%, -50%) scale(1.4);
`


interface StackProps {
    flow: string;
    maxWidth: string;
    flexWrap?: string;
}
export const Stack = styled.div<StackProps>`
    display: flex;
    flex-flow: ${p => p.flow};
    flex-wrap: ${p => 'flexWrap' in p ? p.flexWrap : 'nowrap'};
    justify-content: space-between;
    width: 100%;
    margin: auto;
    max-width: ${p => 'maxWidth' in p ? p.maxWidth : "230px"};
`

interface ButtonProps {
    width?: string;
    height?: string;
    padding?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    color?: string;
    fontSize?: string;
    margin?: string;
    borderRadius?: string;
}
export const Button = styled.button<ButtonProps>`
    width: ${p => 'width' in p ? p.width : '100%'};
    height: ${p => 'height' in p ? p.height : '100%'};
    padding: ${p => 'padding' in p ? p.padding : '10px 15px'};
    background-color: ${p => 'backgroundColor' in p ? p.backgroundColor : 'var(--sh-blue)'};
    background-image: ${p => 'backgroundImage' in p ? p.backgroundImage : 'none'};
    color: ${p => 'color' in p ? p.color : 'var(--white)'};
    font-size: ${p => 'fontSize' in p ? p.fontSize : '15px'};
    margin: ${p => 'margin' in p ? p.margin : 'none'};
    border-radius: ${p => 'borderRadius' in p ? p.borderRadius : '0px'};
    border: none;
    position: relative;
    cursor: pointer;
    transition: .3s;
    &:hover {
        filter: invert(1);
    }
`

export const Curve = (props: any) => (
    <svg {...props} viewBox="0 0 500 80" preserveAspectRatio="none">
        <path d={`M0, 0 L0, 40 Q250, ${'bend' in props ? props.bend : '-50'} 500, 40 L500,0 Z`} fill={'fill' in props ? props.fill : "white"}></path>
    </svg>
)

interface SectionTitleprops {
    color?: string;
    borderColor?: string;
    animate?: string;
    gap?: string;
    opacity?: string;
}
const ST_H1 = styled.h1<SectionTitleprops>`
    font-family: 'secularone';
    color: ${p => 'color' in p ? p.color : 'var(--white)'};
    font-size: 5vw;
    text-align: center;
    position: relative;
    overflow: hidden;
    padding: 110px 0px 10px;
    display: flex;
    z-index: 99;
    margin-top: 0px;
    text-shadow: ${(p:any) => 'effect3d' in p ? (
        `
            1px 1px 1px ${'shade' in p ? p.shade : '#919191'},
            1px 2px 1px ${'shade' in p ? p.shade : '#919191'},
            1px 3px 1px ${'shade' in p ? p.shade : '#919191'},
            1px 4px 1px ${'shade' in p ? p.shade : '#919191'},
            1px 5px 1px ${'shade' in p ? p.shade : '#919191'},
            1px 6px 1px ${'shade' in p ? p.shade : '#919191'},
            1px 7px 1px ${'shade' in p ? p.shade : '#919191'},
            1px 8px 1px ${'shade' in p ? p.shade : '#919191'},
            1px 9px 1px ${'shade' in p ? p.shade : '#919191'},
            1px 10px 1px ${'shade' in p ? p.shade : '#919191'},
            1px 18px 6px rgba(16,16,16,0.4),
            1px 22px 10px rgba(16,16,16,0.2),
            1px 25px 35px rgba(16,16,16,0),
            1px 30px 60px rgba(16,16,16,0)
        `
    ) : 'none'};
    .titleText {
        transition: transform .3s ease-in;
        transform: ${p => 'animate' in p ? (
            ['slideUp', 'slideUpFade', 'slideUpExpandFade'].includes(p.animate!) ? 'translateY('+p.gap+')' : 'translateY(100%)'
        ) : 'none' };
    }
`
const ST_LEFT = styled.span<SectionTitleprops>`
    transition: transform .3s ease-in;
    width: 50%;
    transform: ${p => 'animate' in p ? (
        ['slideUpExpandFade'].includes(p.animate!) ? 'scaleX(0)' : 'scaleX(0)'
    ) : '50%' };
    transform-origin: left;
    height: 2px;
    background-color: ${p => 'borderColor' in p ? p.borderColor : 'var(--white)'};
    margin: auto;
    margin-right: 50px;
    font-size: 30px;
`
const ST_RIGHT = styled.span<SectionTitleprops>`
    transition: transform .3s ease-in;
    width: 50%;
    transform: ${p => 'animate' in p ? (
        ['slideUpExpandFade'].includes(p.animate!) ? 'scaleX(0)' : 'scaleX(0)'
    ) : '50%' };
    transform-origin: right;
    height: 2px;
    background-color: ${p => 'borderColor' in p ? p.borderColor : 'var(--white)'};
    margin: auto;
    margin-left: 50px;
`
export const SectionTitle = (props: any) => {
    const borderColor = 'borderColor' in props ? props.borderColor : 'var(--white)'

    interface Sp { [key: string]: any }
    let inProp = ['animate', 'gap', 'opacity']
    let subProps: Sp = {};
    inProp.forEach((name: any) => {        
        if (name in props) subProps[name] = props[name]
    })    

    return (
        <ST_H1 {...props}>
            <ST_LEFT borderColor={borderColor} {...subProps}/>
                <div className="titleText">{props.children}</div>
            <ST_RIGHT borderColor={borderColor} {...subProps}/>
        </ST_H1>
    )
}
export const Section = styled.div`
    width: 100%;
    min-height: 90vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

const TS_Container = styled.div`
    display: block;
    width: 100%;
    margin: auto;
    margin-left: 0px;
    flex: 50%;
    .ctitle {
        position: relative;
        width: max-content;
        &::after {
            content: '';
            width: 15px;
            height: 100%;
            background-color: var(--sh-light-yellow);
            position: absolute;
            top: 0px;
            left: 0px;
            @media screen and (max-width: 1200px) {
                width: 10px;
            }
        }
    }
    h1 {
        font-family: 'secularone';
        font-size: 90px;
        line-height: 80px;
        margin-bottom: 0px;
        position: relative;
        padding-left: 40px;
        width: 100%;
        /* overflow: hidden; */
        filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 1));
        @media screen and (max-width: 1200px) {
            font-size: 10vw;
            line-height: 50px;
            padding-left: 20px;
        }
    }
    p {
        font-size: 30px;
        margin: 0px;
    }
`
export const TitleSectionWordings = (props: any) => {
    return (
        <TS_Container>
            <div className="ctitle">
                <h1>{props.title}</h1>
            </div>
            <p>{props.body}</p>
            {props.children}
        </TS_Container>
    )
}
export const ScrollDown = styled.span`
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translate(0%, -50%);
    width: 50px;
    height: 50px;
    animation: float 2s ease-in-out infinite;
    &::after {
        content: '';
        width: 40px;
        height: 5px;
        transform: rotate(-45deg);
        background-color: var(--white);
        position: absolute;
        top: 0;
        left: 17.5px;
    }
    &::before {
        content: '';
        width: 40px;
        height: 5px;
        transform: rotate(45deg);
        background-color: var(--white);
        position: absolute;
        top: 0;
        right: 17.5px;
    }
`
export const ComicContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    /* max-width: 1440px; */
    width: 95vw;
    margin: auto;
    border-radius: 20px;
    overflow: hidden;

    .hero-item, .standard-item {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .about-item {
        display: inline-block;
        min-height: 400px;
        width: 50%;
    }

    .hero-item {
        background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-ori-sin.jpg');
    }

    .standard-item {
        &:nth-child(2) {
            background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/re7-chris-large.jpg");
        }
        &:nth-child(3) {
            background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/bioshock-large.jpg");
        }
        &:nth-child(4) {
            background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/dishonored-large.jpg");
        }
    }

    @supports (display: grid) {
        .about-item {
            width: auto;
            min-height: 0;
        }
        
        .hero-item {
            grid-column: 1 / span 2;
            grid-row: 1 / 50;
            -webkit-clip-path: polygon(0 0, 100% 0, 100% calc(100% - 75px), 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% calc(100% - 75px), 0 100%);
        }

        .standard-item {
            &:nth-child(2) {
                grid-column: 1 / span 1;
                grid-row: 50 / 100;
                -webkit-clip-path: polygon(0 14%, 0 86%, 90% 81%, 100% 6%);
                clip-path: polygon(0 14%, 0 86%, 90% 81%, 100% 6%);
                margin-top: -73px;
            }
            &:nth-child(3) {
                grid-column: 2 / span 1;
                grid-row: 50 / 100;
                -webkit-clip-path: polygon(13% 6%, 4% 84%, 100% 100%, 100% 0%);
                clip-path: polygon(13% 6%, 4% 84%, 100% 100%, 100% 0%);
                margin-top: -73px;
                margin-left: -15%;
                margin-bottom: 18px;
            }
            &:nth-child(4) {
                grid-column: 1 / span 2;
                grid-row: 100 / 150;
                -webkit-clip-path: polygon(45% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
                clip-path: polygon(45% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
                margin-top: -107px;
            }
        }
    }
`
export const AboutContainer = styled.div`
    max-width: 95vw;
    width: max-content;
    margin: auto;
    @media screen and (max-width: 1200px) {
        margin-top: 100px;
        margin-bottom: 100px;
    }
    .airdrop_img {
        opacity: 0;
        margin: auto;
        background-color: var(--white);
        background-image: url(${sky_img});
        background-size: cover;
        background-position: -20px 20px;
        border-radius: 20px;
        position: relative;
        max-width: 400px;
        height: 400px;
        flex: 100%;
        transition: opacity .3s ease-in;
        & > span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1.3);
            width: 400px !important;
            height: 400px !important;
        }
        @media screen and (max-width: 1200px) {
            transform: translate(0, 0) !important;
            max-width: 75vw;
            /* height: auto; */
        }
    }

    .how_to_buy {
        text-align: center;
        position: relative;
        &::before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-image: url(${bsh_banner});
            background-size: 40vw;
            background-repeat: no-repeat;
            background-position: center;
            opacity: 0.1;
        }
        h1 {
            font-family: 'secularone';
            font-size: 4vw;
            color: var(--white);
            position: relative;
            margin-bottom: 90px;
            &::after {
                content: '';
                position: absolute;
                left: 50%;
                bottom: -10px;
                transform: translate(-50%, 0%);
                width: 10vw;
                height: 3px;
                background-color: var(--white);
            }
            @media screen and (max-width: 1200px) {
                font-size: 40px;
            }
        }
        .htbStep {
            margin: auto;
            h3 {
                color: var(--sh-yellow);
            }
            p {
                padding: 0px;
                font-size: 20px;
                text-align: center;
                max-width: 400px;
                min-height: 200px;
            }
        }
    }
    p {
        text-align: left;
        color: var(--white);
        font-size: 35px;
        width: 100%;
        max-width: 70vw;
        min-width: 300px !important;
        margin: auto;
        padding: 0px 100px;
        flex: 100%;
        max-height: 300px;
        @media screen and (max-width: 1570px) {
            max-height: none;
            padding-top: 100px;
            text-align: center;
        }
        @media screen and (max-width: 1200px) {
            padding: 0px;
            padding-top: 70px;
            font-size: 20px;
            text-align: justify;
        }
    }
`
export const TokenomicContainer = styled.div`
    max-width: 80vw;
    margin: auto;
    position: relative;
    @media screen and (max-width: 1200px) {
        max-width: 100vw !important;
    }
    .stack {
        justify-content: center;
        @media screen and (max-width: 1200px) {
            width: 100%;
        }
    }
    .super_hero_6 {
        position: absolute;
        bottom: -40%;
        left: -20%;
        z-index: 999;
        
    }
`
export const TokenomicTab = (props: any) => {
    const Container = styled.div`
        background-color: #96c8fb;
        background-image: linear-gradient(315deg, #B78628 0%, #FCC201 54%, #B78628 80%);
        background-size: cover;
        color: var(--white);
        max-width: 350px;
        height: ${'slab' in props? '190px': '400px'};
        padding: 10px 14px;
        border-radius: 15px;
        margin: 20px 40px;
        display: flex;
        flex-flow: ${'slab' in props? 'row': 'column'};
        flex: 100%;
        position: relative;
        filter: drop-shadow(-1px -13px 6px rgba(0,0,0,0.5));
        @media screen and (max-width: 1200px) {
            margin: auto;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .item {
            font-size: ${'slab' in props? '50px': '120px'};
            font-weight: bold;
            text-align: center;
            margin: auto;
            width: 100%;
            max-width: ${'slab' in props? '110px': 'auto'};
            filter: drop-shadow(${'slab' in props? '-2px 3px 2px' : '-2px 7px 4px'} rgba(255, 255, 255, 1));
            @media screen and (max-width: 1200px) {
                max-width: ${'slab' in props? '150px': 'auto'};
                font-size: ${'slab' in props? '80px': '130px'};
            }
        }
        .subject {
            font-size: 30px;
            text-align: center;
            font-weight: 600;
            font-family: sans-serif;
            margin: auto;
            width: 100%;
        }
    `
    return (
        <Container className={props.className}>
            <div className="item" data-item={props.item}>{props.item}%</div>
            <div className="subject">{props.subject}</div>
        </Container>
    )
}
export const PartnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    overflow: auto;
    margin: auto;
    --ms-overflow-style: none;
    scrollbar-width: none;

    .psSlideImageContainer {
        margin: auto;
    }
`

interface RoadMapProps {
    mobile?: boolean;
}
export const RoadMapContainer = styled.div<RoadMapProps>`
    width: 100%;
    display: flex;
    flex-flow: row;
    overflow: auto;
    margin: auto;
    --ms-overflow-style: none;
    scrollbar-width: none;
    display: ${p => 'mobile' in p ? 'none' : 'block'};

    &::-webkit-scrollbar {
        display: none;
    }

    .swiper-slide {
        transition: all .5s ease-in;
        opacity: 0.3;
        transform: scale(.8)!important;
        &.swiper-slide-active {
            opacity: 1;
            transform: scale(1)!important;
        }
    }

    .block {
        margin: auto;
        padding: 10px 25px;
        height: 100%;
        width: 100%;
        h2 {
            background-color: var(--sh-pale-red);
            background-image: linear-gradient(315deg, var(--sh-pale-red) 0%, var(--sh-light-red) 50%, var(--sh-pale-red) 90%);
            padding: 10px;
            border-radius: 10px;
            text-align: center;
            font-family: sans-serif;
            margin-bottom: 0px;
        }
        ul {
            list-style: none;
            background-color: var(--sh-trans-brown);
            box-sizing: border-box;
            padding: 10px;
            border-radius: 10px;
            /* max-height: 400px; */
            overflow: visible;
            li {
                line-height: 30px;
                position: relative;
                padding: 5px 10px 5px 30px;
                border-bottom: 1px solid var(--sh-brown);
                &:last-child {
                    border-bottom: none;
                }
                &::after {
                    content: '';
                    width: 10px;
                    height: 10px;
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translate(0%, -50%);
                    z-index: 99;
                    border-radius: 50%;
                }
                &[data-status="done"]::after {
                    background-color: var(--sh-green);
                }
                &[data-status="in_progress"]::after {
                    background-color: var(--sh-yellow);
                }
                &[data-status="idle"]::after {
                    background-color: var(--sh-grey);
                }
            }
        }
    }

    @media screen and (max-width: 1310px) {
        display: ${p => 'mobile' in p ? 'block' : 'none'};
        color: var(--white);
    }
`