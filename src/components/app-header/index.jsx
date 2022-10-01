import React, { memo, useEffect } from 'react'
import { HeaderWrapper } from './style'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import HeaderLeft from './cpns/header-left'
import HeaderCenter from './cpns/header-center'
import HeaderRight from './cpns/header-right'

const AppHeader = memo(() => {
  const { isScrollTop } = useSelector((state) => {
    return {
      isScrollTop: state.home.isScrollTop
    }
  })
  // 搜索框动画逻辑
  let isHome = false
  const { pathname } = useLocation()
  if (pathname === '/home') {
    isHome = true
  }
  useEffect(() => {
    if (isScrollTop) {
      console.log('=true')
    } else {
      console.log('=false')
    }
  }, [isScrollTop])
  return (
    <HeaderWrapper className={classNames({ 'is-home': isHome })}>
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
