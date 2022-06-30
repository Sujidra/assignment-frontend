import styled from "styled-components";


export const Header = styled.div`
    display:flex ;
    width:100%;
    height:55px ;
    justify-content:space-between ;
    padding:20px 25px;
    padding-right:20px ;
    color:white ;
    background-color:black ;
    margin-bottom:10px ;

    h4{
        color:white ;
    }

    button{
        cursor: pointer;
        color:white ;
        border:none ;
        background:none ;
        width:100px ;
        height:20px ;
    }
    
`


export const Container = styled.div``

export const ImageWrapper = styled.div`
    display:grid ;
    grid-template-columns: auto auto auto;
    column-gap: 20px;
    row-gap: 20px;
    padding:20px ;

    @media screen and (max-width:768px) {
        padding:10px ;
        grid-template-columns: auto auto;
  
    }

    @media screen and (max-width:480px) {
        grid-template-columns: auto;
  
    }

`

export const ImageContainer = styled.div`

    video{
        display:none ;
        width:100% ;

    }

    img{
        display:block ;
        width:100% ;
        }

    &:hover {
        video{
            display:block ;
        }

        img{
            display:none ;
        }

    }

`

export const SubmitButtom = styled.button`
  width: 90px;
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
  margin-left:10px ;
`

export const ButtonContainer = styled.div`
display:flex ;
margin-top:10px ;
justify-content:flex-end ;
padding:20px ;
`
