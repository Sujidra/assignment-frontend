import styled from "styled-components";

export const RegisterContainer = styled.div`
    display:flex ;
    justify-content:center ;
    align-items:center ;
    width:100% ;
    flex-direction: column;
    height: 100vh;
    row-gap: 10px;

    input{
        width: 300px;
        height: 35px;
        border: 1px solid rgb(175, 175, 175);
        margin-top: 10px;
        padding-left: 10px;
    }

    p{
      color:red ;
    }

`

export const SubmitButtom = styled.button`
  width: 150px;
  height: 42px;
  background: rgb(9, 144, 221);
  border-radius: 4px;
  border: none;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  font-family: Rubik, sans-serif;
`