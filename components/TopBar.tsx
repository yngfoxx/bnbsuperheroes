import React from 'react'
import { TopBar, TBItem, Logo, Curve } from './Styled'

const Topbar = (props:any) => {
    return (
        <div {...props}>
            <TopBar>
                <TBItem>About</TBItem>
                <TBItem>Tokenomics</TBItem>
                <div style={{minWidth: '250px'}}>
                    <Logo width="150px" height="90px" logo />
                </div>
                <TBItem>Roadmap</TBItem>
                <TBItem>Whitepaper</TBItem>
            </TopBar>
            <Curve width="100%" height="120px" fill="var(--sh-trans-red)" bend="-40" style={{zIndex: '999'}} />
        </div>
    )
}

export default Topbar;