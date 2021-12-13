import styled from 'styled-components'

import bnb_heroes_logo from '../../media/img/logo.png'
import meteor from '../../media/img/meteor.png'


interface TopBarComponentProps {
    width?: string;
    height?: string;
}
export const TopBar: any = styled.div<TopBarComponentProps>`
    position: fixed;
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
    span {
        display: block;
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
    color?: string;
    fontSize?: string;
}
export const Button = styled.button<ButtonProps>`
    width: ${p => 'width' in p ? p.width : '100%'};
    height: ${p => 'height' in p ? p.height : '100%'};
    padding: ${p => 'padding' in p ? p.padding : '10px 15px'};
    background-color: ${p => 'backgroundColor' in p ? p.backgroundColor : 'var(--sh-blue)'};
    color: ${p => 'color' in p ? p.color : 'var(--white)'};
    font-size: ${p => 'fontSize' in p ? p.fontSize : '15px'};
    border: none;
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

const ST_H1 = styled.h1`
    font-family: 'secularone';
    color: var(--white);
    font-size: 5vw;
    text-align: center;
    position: relative;
    overflow: hidden;
    padding: 110px 0px 10px;
    display: flex;
    z-index: 99;
    margin-top: 0px;
`
const ST_LEFT = styled.span`
    width: 50%;
    height: 2px;
    background-color: var(--white);
    margin: auto;
    margin-right: 50px;
    font-size: 30px;
`
const ST_RIGHT = styled.span`
    width: 50%;
    height: 2px;
    background-color: var(--white);
    margin: auto;
    margin-left: 50px;
`
export const SectionTitle = (props: any) => {
    return (
        <ST_H1>
            <ST_LEFT />{props.children}<ST_RIGHT />
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

export const TitleSectionWordings = (props: any) => {
    const Container = styled.div`
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
            overflow: hidden;
            filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 1));
            @media screen and (max-width: 1200px) {
                font-size: 50px;
                line-height: 50px;
                padding-left: 20px;
            }
        }
        p {
            font-size: 30px;
            margin: 0px;
        }
    `
    return (
        <Container>
            <div className="ctitle">
                <h1>{props.title}</h1>
            </div>
            <p>{props.body}</p>
            {props.children}
        </Container>
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

export const MeteorShower = styled.div`
    position: absolute;
    bottom: -300px;
    left: 0;
    width: 100%;
    height: 700px;
    z-index: 9;
    background-image: url(${meteor});
    background-position: center;
    background-repeat: no-repeat;
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
        margin: auto;
        background-color: var(--white);
        border-radius: 20px;
        position: relative;
        max-width: 400px;
        min-width: 300px !important;
        height: 400px;
        flex: 100%;
        & > span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1.3);
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
        @media screen and (max-width: 1200px) {
            padding: 0px;
            padding-top: 70px;
            font-size: 20px;
            text-align: justify;
        }
    }
`

export const RoadMapContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    overflow: auto;
    margin: auto;
    --ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    .block {
        margin: auto;
        padding: 10px 25px;
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        h2 {
            text-align: left;
            border-bottom: 3px solid #b08f66;
            padding-bottom: 5px;
            font-family: sans-serif;
            margin-bottom: 0px;
        }
        ul {
            list-style: none;
            padding-left: 20px;
            li {
                line-height: 30px;
                position: relative;
                &::after {
                    content: '';
                    width: 10px;
                    height: 10px;
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translate(-50%, 0%);
                    z-index: 99;
                }
                &[data-status="done"]::after {
                    background-color: var(--sh-green);
                }
                &[data-status="in_progress"]::after {
                    background-color: var(--sh-blue);
                }
                &[data-status="idle"]::after {
                    background-color: var(--sh-grey);
                }
            }
        }
    }
`