import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  max-width:1120px;
  height:100vh;
  margin:0 auto;
  display:flex;
  align-items:center;
  justify-content:space-between;

  section{
    width:100%;
    max-width:350px;
    margin-right:30px;

    form{
      margin-top:100px;

      h1{
        font-size:32px;
        margin-bottom:32px;
      }

      a{
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

      a:hover{
        opacity:0.8
      }

      

      
    }
  }
`;
