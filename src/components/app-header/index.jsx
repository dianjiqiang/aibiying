import React, { memo } from 'react'
import { HeaderWrapper } from './style'

import HeaderLeft from './cpns/header-left'
import HeaderCenter from './cpns/header-center'
import HeaderRight from './cpns/header-right'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <div className="left">
        <HeaderLeft></HeaderLeft>
      </div>
      <div className="center">
        <HeaderCenter></HeaderCenter>
      </div>
      <div className="right">
        <HeaderRight></HeaderRight>
      </div>
    </HeaderWrapper>
  )
})

export default AppHeader
