import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionRoomsStyle } from './style'

import RoomItem from '../room-item'

const styled = memo((props) => {
  const { roomList = [] } = props
  return (
    <SectionRoomsStyle>
      <ul className="room-list">
        {roomList.slice(0, 8)?.map((item) => {
          return <RoomItem key={item.id} itemData={item}></RoomItem>
        })}
      </ul>
    </SectionRoomsStyle>
  )
})

styled.propTypes = {
  roomList: PropTypes.array
}

export default styled
