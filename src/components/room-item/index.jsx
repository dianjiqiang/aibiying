import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomItemStyle } from './style'
import Rating from '@mui/material/Rating'

const RoomItem = memo((props) => {
  const { itemData } = props
  return (
    <RoomItemStyle verifyColor={itemData?.verify_info?.text_color || '#39576a'}>
      <div className="inner">
        <div className="cover">
          <img src={itemData?.picture_url} alt="" />
        </div>
        <div className="desc">{itemData?.verify_info?.messages.join('.')}</div>
        <div className="name">{itemData?.name}</div>
        <div className="price">{itemData?.price_format}/晚</div>
        <div className="bottom">
          <Rating
            value={itemData?.star_rating ?? 4.5}
            precision={0.1}
            readOnly
            sx={{ fontSize: '12px', color: '#00848a' }}
          ></Rating>
          <span className="count">{itemData?.reviews_count}</span>
          {itemData?.bottom_info?.content && <span style={{ padding: '0 3px' }}>·</span>}
          <span className="extra">{itemData?.bottom_info?.content}</span>
        </div>
      </div>
    </RoomItemStyle>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem
