import React, { memo } from 'react'

import { CenterStyle } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'

const index = memo(() => {
  return (
    <CenterStyle>
      <div className="search-bar">
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearchBar></IconSearchBar>
        </div>
      </div>
    </CenterStyle>
  )
})

export default index
