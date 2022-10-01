import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction, setIsScrollTop } from '@/store/modules/home'

import Banner from './cpns/banner'
import SectionHeader from '../../components/section-header'

import { HomeStyle } from './style'
import SectionRooms from '../../components/section-rooms'

const index = memo(() => {
  // redux数据
  const { goodPriceInfo, isScrollTop } = useSelector((state) => {
    return {
      goodPriceInfo: state.home.goodPriceInfo,
      isScrollTop: state.home.isScrollTop
    }
  }, shallowEqual)
  const dispatch = useDispatch()
  // 网络请求钩子
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])
  // 页面滚动钩子
  useEffect(() => {
    function isScrollTopFn() {
      if (window.scrollY <= 10) {
        dispatch(setIsScrollTop(true))
      } else {
        if (isScrollTop) {
          dispatch(setIsScrollTop(false))
        }
      }
    }
    window.addEventListener('scroll', isScrollTopFn)
    return () => {
      window.removeEventListener('scroll', isScrollTopFn)
    }
  }, [dispatch, isScrollTop])
  return (
    <div>
      <HomeStyle>
        <Banner></Banner>
        <div className="content">
          <div className="good-price">
            <SectionHeader title={goodPriceInfo.title}></SectionHeader>
            <SectionRooms roomList={goodPriceInfo.list}></SectionRooms>
          </div>
        </div>
      </HomeStyle>
    </div>
  )
})

export default index
