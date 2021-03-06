import React, { useEffect, useState, useRef, useCallback } from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import TopbarSection from '../components/TopbarSection'
import PartnerSection from '../components/PartnerSection'
import { Curve, SectionTitle } from '../components/Styled'
import Scrollbar from 'smooth-scrollbar'

import roadmap_bg from '../media/gif/roadmap_bg.gif'
import bsh_banner from '../media/img/bsh_banner.png'

import TitleSection from '../components/TitleSection'
import RoadMapSection from '../components/RoadMapSection'
import AboutSection from '../components/AboutSection'
import TokenomicSection from '../components/TokenomicSection'

const Home: NextPage = () => {
  const bodyRef = useRef<HTMLDivElement>(null)
  const scrollBar = useRef<any>(null)
  const [tokenomicVisible, setTokenomicVisible] = useState(false) // ! not needed

  /*-> Section refs <-*/
  const TopbarSecRef = useRef<HTMLDivElement>(null)
  const TitleSecRef = useRef<HTMLDivElement>(null)
  const AboutSecRef = useRef<HTMLDivElement>(null)
  const TokenomicSecRef = useRef<HTMLDivElement>(null)
  const RoadmapSecRef = useRef<HTMLDivElement>(null)
  const FooterSecRef = useRef<HTMLDivElement>(null)

  const elementOffset = useCallback((el: HTMLElement) => {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
    let elHeight = el.offsetHeight

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft, height: elHeight }
  }, [])

  useEffect(() => {
    scrollBar.current = Scrollbar.init(bodyRef.current!)
    scrollBar.current.addListener(() => {
      const offset = scrollBar.current.offset
      const currentY = offset.y
      const screenWidth = window.innerWidth
      
      let screenRange = screenWidth >= 1080 ? [-2, 500] : [-2, 500]
      
      // Title section ----------------------------------------------------------------->
      if (currentY >= screenRange[0] && currentY <  screenRange[1])
        document.querySelector<HTMLDivElement>('.super_hero_4')!.style.transform = `translateY(${currentY * 0.13}px)`
      // ------------------------------------------------------------------------------->
        
      // About section ----------------------------------------------------------------->
      let aboutSection = AboutSecRef.current!      
      let aboutTitle = aboutSection.children[0].children[0] as HTMLHeadingElement
      let abtText = aboutTitle.children[1] as HTMLDivElement
      let [abtLbar, abtRbar] = [
        aboutTitle.children[0]  as HTMLDivElement,
        aboutTitle.children[2]  as HTMLDivElement
      ]
      let airdropImgElement = document.querySelector<HTMLDivElement>('.airdrop_img')!
      let movX = (currentY * 0.045) - 20
      let movY = (currentY * 0.045) - 20
      
      airdropImgElement.style.backgroundPosition = '-'+(movX + 2)+'px -'+(movY + 2)+'px'
      
      let abtOffset = elementOffset(aboutSection)
      let abtAnimOffset = 300
      let abtDerivedOffset = abtOffset.top + abtOffset.height - abtAnimOffset
      if (abtOffset.height > abtDerivedOffset && abtDerivedOffset > abtAnimOffset) {
         // title
         abtText.style.transform = 'translateY(0)'
         abtLbar.style.transform = 'scaleX(100%)'
         abtRbar.style.transform = 'scaleX(100%)'
       
         // airdrop image
         airdropImgElement.style.transform = `translate(${movX}px, ${movY}px)`
         airdropImgElement.style.opacity = '1'
      } else {
        if (currentY > 1400) airdropImgElement.style.opacity = '0'
        abtText.style.transform = `translateY(100%)`
        abtLbar.style.transform = 'scaleX(0)'
        abtRbar.style.transform = 'scaleX(0)'
      }
      // ------------------------------------------------------------------------------->

      // Tokenomics section ------------------------------------------------------------>
      let tokenomicSection = TokenomicSecRef.current!
      let superHero6 = document.querySelector<HTMLDivElement>('.super_hero_6')!
      let tknTitle = tokenomicSection.children[1] as HTMLHeadingElement
      let tknText = tknTitle.children[1] as HTMLDivElement
      let [tknLbar, tknRbar] = [
        tknTitle.children[0]  as HTMLDivElement,
        tknTitle.children[2]  as HTMLDivElement
      ]
      let tokenomicsOffset = elementOffset(tokenomicSection)
      let tokenomicsAnimOffset = 300
      let tokenomicsAnimExitOffset = -200
      let tokenomicsDerivedOffset = tokenomicsOffset.top + tokenomicsOffset.height - tokenomicsAnimOffset

      screenRange = screenWidth >= 1080 ? [2450, 3900] : [4000, 6400]
      if (currentY >= (screenRange[0] + 150) && currentY <  (screenRange[1] + 700)) {
        let scale = currentY * 0.0004;
        superHero6.style.transform = `scale(${scale})`
      }

      if (tokenomicsOffset.height > tokenomicsDerivedOffset && tokenomicsDerivedOffset > tokenomicsAnimExitOffset) {
        // title
        setTokenomicVisible(true)
        tknText.style.transform = 'translateY(0)'
        tknLbar.style.transform = 'scaleX(100%)'
        tknRbar.style.transform = 'scaleX(100%)'
      } else {
        setTokenomicVisible(false)
        tknText.style.transform = `translateY(100%)`
        tknLbar.style.transform = 'scaleX(0)'
        tknRbar.style.transform = 'scaleX(0)'
      }
      // ------------------------------------------------------------------------------->

      // Roadmap section --------------------------------------------------------------->
      let roadmapSection = RoadmapSecRef.current!
      let rmTitle = roadmapSection.children[1] as HTMLHeadingElement
      let rmText = rmTitle.children[1] as HTMLDivElement
      let [rmLbar, rmRbar] = [
        rmTitle.children[0]  as HTMLDivElement,
        rmTitle.children[2]  as HTMLDivElement
      ]
      let roadmapOffset = elementOffset(roadmapSection)
      let roadmapAnimOffset = 300
      let roadmapDerivedOffset = roadmapOffset.top + roadmapOffset.height - roadmapAnimOffset
      if (roadmapOffset.height > roadmapDerivedOffset && roadmapDerivedOffset > roadmapAnimOffset) {
         // title
         rmText.style.transform = 'translateY(0)';
         rmLbar.style.transform = 'scaleX(100%)';
         rmRbar.style.transform = 'scaleX(100%)';
      } else {
        rmText.style.transform = `translateY(100%)`;
        rmLbar.style.transform = 'scaleX(0)';
        rmRbar.style.transform = 'scaleX(0)';
      }
      // ------------------------------------------------------------------------------->
    })
  }, [])

  
  const globalProps = {
    scrollBar: scrollBar,
  }

  const sectionTitleStyle = {
    transition: 'all 3s ease-in',
    transform: 'translateY(20px)',
  }

  return (
    <>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#ffdb6f" />
      <meta name="theme-color" content="#ffdb6f" />
      <title>BNB Superheroes</title>
    </Head>
      {/* TOPBAR */}
      <TopbarSection {...globalProps} fRef={TopbarSecRef}/>
      
      <div ref={bodyRef} id="pageBody">
        {/* TITLE SECTION */}
        <TitleSection {...globalProps} fRef={TitleSecRef} id="home"/>

        {/* ABOUT SECTION */}
        <div id="about" ref={AboutSecRef}>
          <div style={{ backgroundColor: 'var(--sh-brown)', paddingBottom: '100px'}}>
            <SectionTitle 
              style={sectionTitleStyle}
              color="var(--white)"
              borderColor="var(--white)"
              animate="slideUpExpandFade"
              gap="100px"
              opacity="0"
              effect3d={true}
            >
              ABOUT
            </SectionTitle>
            <AboutSection {...globalProps}/>
          </div>
          <Curve width="100%" height="120px" fill="var(--sh-brown)" bend="-10" />
          <PartnerSection />
        </div>

        {/* TOKENOMICS SECTION */}
        <div id="tokenomics" ref={TokenomicSecRef} style={{
          background: 'var(--sh-dark-grey)',
          marginTop: '20px',
          paddingBottom: '50px'
        }}>
          <Curve width="100%" height="150px" fill="var(--white)" bend="5" />
          <SectionTitle
            style={{
              ...sectionTitleStyle,
              paddingBottom: '10px',
              paddingTop: '20px'
            }}
            color="var(--sh-yellow)"
            borderColor="var(--sh-yellow)"
            animate="slideUpExpandFade"
            gap="100px"
            opacity="0"
            effect3d={true}
            shade="var(--sh-dark-yellow)"
          >
            TOKENOMICS
          </SectionTitle>
          <TokenomicSection {...globalProps} visible={tokenomicVisible} animationSpeed={150} fRef={TokenomicSecRef}/>
        </div>
        
        {/* ROADMAP */}
        <div id="roadmap" ref={RoadmapSecRef} style={{
          backgroundImage:`url(${roadmap_bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
          <Curve width="100%" height="200px" fill="var(--sh-dark-grey)" bend="10" />
          <SectionTitle 
            style={{
              ...sectionTitleStyle,
              paddingTop: '0px',
            }}
            color="var(--sh-red)"
            borderColor="var(--sh-red)"
            animate="slideUpExpandFade"
            gap="100px"
            opacity="0"
            effect3d={true}
            shade="var(--sh-pale-red)"
          >
              ROADMAP
          </SectionTitle>
          <RoadMapSection {...globalProps}/>
        </div>

        {/* MARKETING */}
        <div className="marketingSection" style={{
          backgroundImage: `url(${bsh_banner})`,
          backgroundPosition: 'center',
          backgroundSize: '40%',
          backgroundRepeat: 'no-repeat',
          height: '700px',
          backgroundColor: 'rgb(111 78 34)',
          marginTop: '-20px',
        }}>
        </div>

      </div>
    </>
  )
}

export default Home