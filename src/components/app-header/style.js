import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #eee;
    .left {
      color: red;
    }
    .center {
      color: blue;
    }
    .right {
      color: orange;
    }
  }
`
