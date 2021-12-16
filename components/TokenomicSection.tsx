import React, { useEffect } from 'react'
import Image from 'next/image'
import { TokenomicContainer, Stack, TokenomicTab } from './Styled'

import super_hero from '../media/img/superhero/superhero6.png'

const TokenomicSection = (props: any) => {
    const tabClassName = 'tokenomicTab'
    useEffect(() => {
        if (props.visible !== true) return;
        const tokenomicTabs = document.getElementsByClassName(tabClassName)!
        for (let x = 0; x < tokenomicTabs.length; x++) {
            const tab = tokenomicTabs[x];
            let tabItem: any = tab.children[0].getAttribute('data-item')!.valueOf()
            let y = 0
            const increment = setInterval(() => {
                tab.children[0].innerHTML = `${y}%`
                y += 1
                if (y > tabItem) clearInterval(increment)
            }, props.animationSpeed)
        }
    }, [props.animationSpeed, props.visible])
    return (
        <TokenomicContainer>
            {props.children}
            <Stack flow="row" maxWidth="1290px" flexWrap='wrap' className="stack">
                <TokenomicTab className={tabClassName} item={12} subject={"Buy and sell tax"}/>
                <TokenomicTab className={tabClassName} item={4} subject={"Game rewards and development"}/>
                <TokenomicTab className={tabClassName} item={4} subject={"Liquidity"}/>
            </Stack>
            <Stack flow="row" maxWidth="860px" flexWrap='wrap'>
                <TokenomicTab className={tabClassName} item={3} subject={"Marketing"} slab/>
                <TokenomicTab className={tabClassName} item={1} subject={"Buyback"} slab/>
            </Stack>
            <div className="super_hero_6">
                <Image width={"800px"} height={"800px"} src={super_hero} alt="super_hero_6" />
            </div>
        </TokenomicContainer>
    )
}

export default TokenomicSection;