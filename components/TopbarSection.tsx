import React from 'react'
import { TopBar, TBItem, Logo, Curve } from './Styled'

const TopbarSection = (props:any) => {
    return (
        <TopBar>
            <TBItem>About</TBItem>
            <TBItem>Tokenomics</TBItem>
            <div style={{minWidth: '250px', zIndex: 999}}>
                <Logo width="200px" height="120px" logo />
            </div>
            <TBItem>Roadmap</TBItem>
            <TBItem>Whitepaper</TBItem>
        </TopBar>
    )
}

export default TopbarSection;