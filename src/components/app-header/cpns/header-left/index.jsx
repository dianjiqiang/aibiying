import React, { memo } from 'react'

import { LeftStyle } from './style'
import IconLogo from '@/assets/svg/icon_logo.jsx'

const index = memo(() => {
  return (
    <LeftStyle>
      <div className="icon-logo">
        <IconLogo></IconLogo>
      </div>
    </LeftStyle>
  )
})

export default index
