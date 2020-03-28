import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  max-width:1120px;
  height:100vh;
  margin:0 auto;
  display:flex;
  align-items:center;
  justify-content:center;

  .content{
    width:100%;
    padding:96px;
    background:#f0f0f5;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
    border-radius:8px;

    display:flex;
    justify-content:space-between;
    align-items:center;

    section{
      width:100%;
      max-width:380px;

      h1{
        margin:64px 0 32px;
        font-size:32px;
      }

      p{
        font-size:18px;
        color:#737380;
        line-height:32px;
      }
    }

    form{
      width:100%;
      max-width:450px;

      input{
        margin-top:8px;
      }

      textarea{
        width:100%;
        min-height:140px;
        height:60px;
        color:#333;
        border:1px solid #dcdce6;
        border-radius:8px;
        padding:0 24px;
        margin-top:14px;
        line-height:24px;
        font-size:14px;
        resize:vertical;  
      }

      .inputGroup{
        display:flex;

        input{
          margin-right:4px;
        }
      }
    }
  }
`;
