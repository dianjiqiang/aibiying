import React, { memo } from 'react'

import { DetailMenuStyle } from './style'

const index = memo(() => {
  return (
    <DetailMenuStyle>
      <ul>
        <li>注册</li>
        <li>登录</li>
        <div className="in-lines"></div>
        <li>出租房源</li>
        <li>开展体验</li>
        <li>帮助</li>
      </ul>
    </DetailMenuStyle>
  )
})

export default index
