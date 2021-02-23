import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';
import { shade } from 'polished';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}


export const Container = styled.div<ContainerProps>`
      background:#F8F5F9;
      border: 2px solid #989FDB;   
      border-radius: 10px;
      padding: 16px; 
      width:100%;
      color: #989FDB;
      display:flex;
      align-items: center;

      & + div{
                margin-top:8px;
            } 


    ${(props) =>
        props.isErrored && css`
          border-color: #c53030; 
      `
    }

	 ${(props) =>
        props.isFocused && css`
       color:#989FDB;
       border-color:  ${shade(0.3, '#989FDB')} ; 
      `
    }
   

   ${(props) =>
        props.isFilled && css`
        color: ${shade(0.3, '#989FDB')};
        border-color:  ${shade(0.3, '#989FDB')} ; 
        `
    }

   input{ 
         background: transparent;
         border:0;
         flex:1; 
         color: #989FDB;

            &::placeholder{
                color: #989FDB;
            }

        }

     svg{
         margin-right: 16px;
        
     }
 
`



export const Error = styled(Tooltip)`
       height: 20px;
       margin-left: 16px; 
       svg{
           margin: 0;
       }

       span{
           background: #c53030;
           color:#fff;
       }
       &::before{
           border-color: #c53030 transparent;
       }
   
      
`