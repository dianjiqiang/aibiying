import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  &.is-home {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }
  & {
    box-sizing: border-box;
    display: flex;
    padding: 0 20px;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    .left {
      display: flex;
      justify-content: flex-start;
      flex: 1;
    }
    .center {
      display: flex;
      justify-content: center;
    }
    .right {
      display: flex;
      flex: 1;
      justify-content: flex-end;
    }
  }
`
