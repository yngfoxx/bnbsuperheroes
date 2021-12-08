import styled from 'styled-components'
import bnb_heroes_logo from '../../media/img/logo.png'


interface TopBarComponentProps {
    width?: string;
    height?: string;
}
export const TopBar: any = styled.div<TopBarComponentProps>`
    position: sticky;
    width: ${p => 'width' in p ? p.width : '100vw'};
    height: ${p => 'height' in p ? p.height : '50px'};
    background-color: var(--sh-red);
    display: flex;
    flex-flow: row;
    justify-content: center;
    /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5); */
    margin: auto;
    position: relative;

    &::after {
        content: '';

    }

    span {
        display: block;
    }
`


interface LogoComponentProps {
    logo?: boolean;
    width?: string;
    height?: string;
    backgroundImage?: any;
}
export const Logo: any = styled.span<LogoComponentProps>`
    height: ${p => 'width' in p ? p.width : '100%'};
    width: ${p => 'height' in p ? p.height : '100%'};
    background-image: url( ${p => 'backgroundImage' in p ? p.backgroundImage : bnb_heroes_logo});
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: ${p => 'logo' in p ? (p.logo ? '120%' : '50%') : '50%'};
    left: 50%;
    transform: translate(-50%, -50%);
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
`;


export const Curve = (props:any) => (
    <svg width={props.width} height={props.height} viewBox="0 0 500 80" preserveAspectRatio="none">
        <path d="M0, 0 L0, 40 Q250, -20 500, 40 L500,0 Z" fill={'fill' in props ? props.fill : "white"}></path>
    </svg>
)