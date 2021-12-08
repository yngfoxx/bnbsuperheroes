import React from 'react'
import { TopBar, Logo, Curve } from './Styled'

const Topbar = (props:any) => {
    return (
        <>
            <TopBar>
                <Logo width="250px" height="250px" logo />
            </TopBar>
            <Curve width="100%" height="100px" fill="var(--sh-red)" />
        </>
    )
}

export default Topbar;