import React, { memo } from 'react'

import { BannerStyle } from './style'

const banner = memo(() => {
  return (
    <BannerStyle>
      <div className="banner">
        <img src={require('@/assets/img/cover_01.jpeg')} alt="" />
      </div>
    </BannerStyle>
  )
})

export default banner
