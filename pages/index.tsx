import type { NextPage } from 'next'
import Topbar from '../components/TopBar'
import { SectionTitle } from '../components/Styled'
import Scrollbar from 'smooth-scrollbar';

import TitleSection from '../components/TitleSection'
import RoadMapSection from '../components/RoadMapSection'
import React, { useEffect, useRef } from 'react'

const Home: NextPage = () => {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Scrollbar.init(bodyRef.current!)
  }, [])

  return (    
    <div ref={bodyRef}
      id="pageBody"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
      }}
    >
      {/* TOPBAR */}
      <Topbar style={{zIndex: 999, position: 'relative', opacity: 1}}/>{/* Make visible when scrolling down */}
      
      {/* TITLE SECTION */}
      <TitleSection />

      {/* ABOUT SECTION */}
      <SectionTitle style={{ fontSize: '30px' }}>ABOUT</SectionTitle>

      {/* SUPERHEROS SECTION */}
      <SectionTitle style={{ fontSize: '30px' }}>TOKENOMICS</SectionTitle>
      
      {/* ROADMAP */}
      <SectionTitle style={{ fontSize: '30px' }}>ROADMAP</SectionTitle>
      <RoadMapSection />
    </div>
  )
}

export default Home