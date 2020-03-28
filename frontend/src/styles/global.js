import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
//import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }
  *:focus{
    outline:0;
  }
  html, body, #root{
    height:100%;
    background:#eee;
  }
  body{
    --webkit-font-smoothing:antialiased;
  }
  body, input, button{
    font:14px 'Roboto', sans-serif;
  }
  a{
    text-decoration:none;
  }
  ul{
    list-style:none;
  }
  button{
    cursor: pointer;
  }

  form input{
    width:100%;
    height:60px;
    color:#333;
    border:1px solid #dcdce6;
    border-radius:8px;
    padding:0 24px
  }

  .primaryButton{
        width:100%;
        height:60px;
        background:#E02041;
        border:0;
        border-radius:8px;
        color:#fff;
        font-weight:700;
        margin-top:16px;
        display:inline-block;
        text-align:center;
        text-decoration:none;
        font-size:18px;
        line-height:60px;
        transition:filter 0.2s;
      }

      .primaryButton:hover{
        filter:brightness(90%)
      }

      .backLink{
        display:flex;
        align-items:center;
        margin-top:40px;
        color:#41414D;
        font-size:18px;
        text-decoration:none;
        font-weight:bold;
        transition: opacity 0.2s;

        svg{
          margin-right:8px;
        }
      }

      .backLink:hover{
        opacity:0.8
      }
`;