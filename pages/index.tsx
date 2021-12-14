import React, { useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import TopbarSection from '../components/TopbarSection'
import PartnerSection from '../components/PartnerSection'
import { Curve, SectionTitle } from '../components/Styled'
import Scrollbar from 'smooth-scrollbar'

import TitleSection from '../components/TitleSection'
import RoadMapSection from '../components/RoadMapSection'
import AboutSection from '../components/AboutSection'
import TokenomicSection from '../components/TokenomicSection'

const Home: NextPage = () => {
  const bodyRef = useRef<HTMLDivElement>(null)
  const scrollBar = useRef<any>(null)

  /*-> Section refs <-*/
  const TopbarSecRef = useRef<HTMLDivElement>(null)
  const TitleSecRef = useRef<HTMLDivElement>(null)
  const AboutSecRef = useRef<HTMLDivElement>(null)
  const TokenomicSecRef = useRef<HTMLDivElement>(null)
  const RoadmapSecRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollBar.current = Scrollbar.init(bodyRef.current!)
    scrollBar.current.addListener(() => {
      const offset = scrollBar.current.offset
      const currentY = offset.y;
      
      // Title section
      if (currentY >= -2 && currentY <  500)
        document.querySelector<HTMLDivElement>('.female_hero')!.style.transform = `translateY(${currentY * 0.13}px)`;
        
        // About section
      if (currentY >= 480 && currentY <  1500) {
        let movX = (currentY * 0.045) - 20;
        let movY = (currentY * 0.045) - 20;
        document.querySelector<HTMLDivElement>('.airdrop_img')!.style.transform = `translate(${movX}px, ${movY}px)`;
        document.querySelector<HTMLDivElement>('.airdrop_img')!.style.opacity = '1';
      } else {
        document.querySelector<HTMLDivElement>('.airdrop_img')!.style.opacity = '0';
      }

      // Tokenomics section
      if (currentY > 480 && currentY <  2520) {
        // TODO
      } else { /* HIDE */ }

      // Roadmap section
      if (currentY > 480 && currentY <  3540) {
        // TODO
      } else { /* HIDE */ }
    })
  }, [])
  
  const globalProps = {
    scrollBar: scrollBar.current,
  }

  return (
    <>
      {/* TOPBAR */}
      <TopbarSection {...globalProps} fRef={TopbarSecRef}/>
      
      <div ref={bodyRef} id="pageBody">
        {/* TITLE SECTION */}
        <TitleSection {...globalProps} fRef={TitleSecRef}/>

        {/* ABOUT SECTION */}
        <div ref={AboutSecRef}>
          <div style={{ backgroundColor: 'var(--sh-brown)', paddingBottom: '100px'}}>
            <SectionTitle>ABOUT</SectionTitle>
            <AboutSection {...globalProps}/>
          </div>
          <Curve width="100%" height="120px" fill="var(--sh-brown)" bend="-10" />
          <PartnerSection />
        </div>        

        {/* SUPERHEROS SECTION */}
        <div ref={TokenomicSecRef}>
          <SectionTitle color="var(--sh-red)" borderColor="var(--sh-red)">TOKENOMICS</SectionTitle>
          <TokenomicSection {...globalProps} fRef={TokenomicSecRef}/>
        </div>        
        
        {/* ROADMAP */}
        <div ref={RoadmapSecRef}>
          <SectionTitle color="var(--black)" borderColor="var(--black)">ROADMAP</SectionTitle>
          <RoadMapSection {...globalProps}/>
        </div>

        {/* FOOTER */}
        <div>
          
        </div>
      </div>
    </>
  )
}

export default Home