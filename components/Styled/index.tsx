import styled from 'styled-components'
import bnb_heroes_logo from '../../media/img/logo.png'


interface TopBarComponentProps {
    width?: string;
    height?: string;
}
export const TopBar: any = styled.div<TopBarComponentProps>`
    position: sticky;
    width: ${p => 'width' in p ? p.width : '100%'};
    height: ${p => 'height' in p ? p.height : '60px'};
    padding-bottom: 20px;
    padding-top: 20px;
    background-color: var(--sh-trans-red);
    display: flex;
    flex-flow: row;
    justify-content: center;
    margin: auto;
    position: relative;
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
}
export const Stack = styled.div<StackProps>`
    display: flex;
    flex-flow: ${p => p.flow};
    justify-content: space-between;
    width: 100%;
    margin: auto;
    max-width: ${p => 'maxWidth' in p ? p.maxWidth : "230px"};
`


export const Curve = (props:any) => (
    <svg width={props.width} height={props.height} viewBox="0 0 500 80" preserveAspectRatio="none">
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
    padding: 30px 0px 10px;
    display: flex;
`
const ST_LEFT = styled.span`
    width: 50%;
    height: 2px;
    background-color: var(--white);
    margin: auto;
    margin-right: 50px;
`
const ST_RIGHT = styled.span`
    width: 50%;
    height: 2px;
    background-color: var(--white);
    margin: auto;
    margin-left: 50px;
`
export const SectionTitle = (props:any) => {
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

export const RoadMapContainer = styled.div`
    width: 100%;
    /* min-height: 100%; */
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
                }
                &[data-status="done"]::after {
                    background-color: var(--green);
                }
                &[data-status="in_progress"]::after {}
                &[data-status="idle"]::after {}
            }
        }
    }
`