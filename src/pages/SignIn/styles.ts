import styled, { keyframes } from 'styled-components';
import img from '../../assets/sign-up-background.png';
import { shade } from 'polished';

export const Container = styled.div`
     height: 100vh;
     align-items:stretch;
     display:flex;
 
`

const appearFromRight = keyframes`
    from{
        opacity: 0;
        transform: translateX(50px);
    }to{
        opacity: 1;
        transform: translateX(0)
    }
`

export const AnimationContainer = styled.div`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
 
    
        animation: ${appearFromRight} 1s;

        form{
            margin: 80px 0;
            width: 340px;
            text-align:center;
            display:flex;
            flex-direction:column;
        }
       
        .title{
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 48px;
            display: flex;
            align-items: center;
            color: #383E71;
        }

        a{
          color:#f4ede8;
          display:block;
          margin-top: 24px;
          text-decoration: none;
          transition: color 0.2s;

          &:hover{
              color: ${shade(0.2, '#f4ede8')}
          }
       }


        > a {
            color:#f4ede8;
            display: flex;
            align-items: center;
            transition: color 0.2s;
            svg{
                margin-right: 15px;
            }

            &:hover{
                color: ${shade(0.2, '#f4ede8')}
            }
        }

`
export const Content = styled.div`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width: 100%;
        max-width: 700px;

    `

export const LinkForgot = styled.div`
      margin-top: 50px;
      display: flex;
      justify-content:center;
      align-items:center; 
      width:350px;
     

      span{
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #989FDB;
        align-items:center;
      }

      a{
        height: 44px; 
        color: #383E71;
        margin-left: 5px;
      }


`


export const Titles = styled.div`
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        width: 340px;


        strong{
            width: 280px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 60px;
            line-height: 48px;
            color: #383E71; 

        }

        span{
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            color: #989FDB;
            width: 200px;
            margin-top: 16px;
        }
    

`


export const Background = styled.div`
      flex: 1;
      background: url(${img}) no-repeat;
      background-size:cover;
`
