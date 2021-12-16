import React, { useState } from 'react'
import { TopBar, TBItem, Logo } from './Styled'
import { Bars } from './icon/filled'

const TopbarSection = (props:any) => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <TopBar>
            <TBItem mobile menuButton onClick={() => setMenuOpen(!menuOpen)}><Bars/></TBItem>
            <TBItem onClick={() => props.scrollBar.current.scrollIntoView(document.querySelector('#about'))}>About</TBItem>
            <TBItem onClick={() => props.scrollBar.current.scrollIntoView(document.querySelector('#tokenomics'))}>Tokenomics</TBItem>
            <div style={{minWidth: '250px', zIndex: 999}} className="logo">
                <Logo width="200px" height="120px" logo onClick={() => props.scrollBar.current.scrollIntoView(document.querySelector('#home'))}/>
            </div>
            <TBItem onClick={() => props.scrollBar.current.scrollIntoView(document.querySelector('#roadmap'))}>Roadmap</TBItem>
            <TBItem onClick={() => window.open('/whitepaper.pdf', '_blank')}>Whitepaper</TBItem>
            <div className="mobileMenu" data-state={menuOpen}>
                {/* MOBILE MENU */}
                <TBItem mobile onClick={() => {setMenuOpen(false); props.scrollBar.current.scrollIntoView(document.querySelector('#about'))}}>About</TBItem>
                <TBItem mobile onClick={() => {setMenuOpen(false); props.scrollBar.current.scrollIntoView(document.querySelector('#tokenomics'))}}>Tokenomics</TBItem>
                <TBItem mobile onClick={() => {setMenuOpen(false); props.scrollBar.current.scrollIntoView(document.querySelector('#roadmap'))}}>Roadmap</TBItem>
                <TBItem mobile onClick={() => {setMenuOpen(false); window.open('/whitepaper.pdf', '_blank')}}>Whitepaper</TBItem>
            </div>
        </TopBar>
    )
}

export default TopbarSection;