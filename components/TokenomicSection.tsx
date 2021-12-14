import React, { useRef } from 'react'
import { TokenomicContainer, Stack, TokenomicTab } from './Styled'


const TokenomicSection = (props: any) => {
    return (
        <TokenomicContainer>
            {props.children}
            <Stack flow="row" maxWidth="1290px" flexWrap='wrap' className="stack">
                <TokenomicTab item={"12%"} subject={"Buy and sell tax"}/>
                <TokenomicTab item={"4%"} subject={"Game rewards and development"}/>
                <TokenomicTab item={"4%"} subject={"Liquidity"}/>
            </Stack>
            <br />
            <br />
            <Stack flow="row" maxWidth="860px" flexWrap='wrap'>
                <TokenomicTab item={"3%"} subject={"Marketing"} slab/>
                <TokenomicTab item={"1%"} subject={"Buyback"} slab/>
            </Stack>
        </TokenomicContainer>
    )
}

export default TokenomicSection;