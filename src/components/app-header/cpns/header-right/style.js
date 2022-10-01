import styled from 'styled-components'

export const RightStyle = styled.div`
  display: flex;
  .btns {
    display: flex;
    align-items: center;
    .text {
      cursor: pointer;
      font-size: ${(props) => props.theme.fontSize.normal};
      font-weight: 700;
      color: ${(props) => props.theme.color.textColor};
    }
    .text:hover {
      background-color: #f7f7f7;
      border-radius: 20px;
    }
    .login {
      cursor: pointer;
      padding: 10px 15px;
    }
    .register {
      cursor: pointer;
      padding: 10px 15px;
    }
    .global {
      cursor: pointer;
      padding: 10px;
    }
  }
  .my {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 5px;
    border: 1px solid #e0e0e0;
    border-radius: 30px;
    padding: 3px 10px;
    background-color: #fff;
    transition: box-shadow 0.2s ease;
    ${(props) => props.theme.mixin}
    .menu {
      cursor: pointer;
      color: ${(props) => props.theme.color.textColor};
    }
    .avatar {
      cursor: pointer;
      color: #717171;
      padding-left: 10px;
    }
  }
`
