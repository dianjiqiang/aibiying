import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

import DetailMenu from './cpns/detail-menu'

import { RightStyle } from './style'
import IconGlobal from '@/assets/svg/icon-global'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'

const index = memo(() => {
  //弹窗相关
  const [openFlag, setOpenFlag] = useState(false)
  const openFlagRef = useRef()
  openFlagRef.current = openFlag
  const openMenu = useCallback((event) => {
    event.stopPropagation()
    setOpenFlag(!openFlagRef.current)
  }, [])
  useEffect(() => {
    const foo = () => {
      setOpenFlag(false)
    }
    document.addEventListener('click', foo)
    return () => {
      document.removeEventListener('click', foo)
    }
  }, [])
  return (
    <RightStyle>
      <div className="btns">
        <span className="login text">登录</span>
        <span className="register text">注册</span>
        <span className="global text">
          <IconGlobal></IconGlobal>
        </span>
      </div>
      <div className="my" onClick={(e) => openMenu(e)}>
        <span className="menu">
          <IconProfileMenu></IconProfileMenu>
        </span>
        <span className="avatar">
          <IconProfileAvatar></IconProfileAvatar>
        </span>
        {openFlagRef.current && <DetailMenu></DetailMenu>}
      </div>
    </RightStyle>
  )
})

export default index
