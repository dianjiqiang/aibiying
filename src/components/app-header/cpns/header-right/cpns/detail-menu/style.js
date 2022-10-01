import styled from 'styled-components'

export const DetailMenuStyle = styled.div`
  & {
    position: absolute;
    top: 50px;
    right: 0px;
    width: 240px;
    border-radius: 10px;
    background-color: #fff;
    padding: 10px 0;
    border: 1px solid #f0f0f0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    li:first-child {
      font-weight: 700;
    }
    li {
      font-size: ${(props) => props.theme.fontSize.normal};
      height: 35px;
      padding: 0 10px;
      line-height: 35px;
      color: #484848;
      cursor: pointer;
    }
    li:hover {
      background-color: #f7f7f7;
    }
    .in-lines {
      height: 1px;
      box-sizing: border-box;
      margin: 10px 0;
      border-top: 1px solid #eeeeee;
      overflow: hidden;
    }
  }
`
