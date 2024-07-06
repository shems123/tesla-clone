import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section({title, leftButtonText, description,rightButtonText, backgroundImg}){
   
    return(
       <Wrap bgImage={backgroundImg}>
           <Fade bottom>
              <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
              </ItemText>
            </Fade>
          <Buttons>
             <Fade bottom>
                <ButtonGroup>
                   <LeftButton>
                      {leftButtonText}
                   </LeftButton>
                  {
                     rightButtonText && 
                     <RightButton>
                        {rightButtonText}
                    </RightButton>
                   }
                 </ButtonGroup>
             </Fade>
            <DownArrow src="/image/downArrow.png"/>
          </Buttons>
          
       </Wrap>
    );
}

export default Section;

const ItemText = styled.div`
z-index: -1;
   padding-top: 15vh;
   text-align: center;
`

const Wrap = styled.div`
  
   width: 100vw;
   height: 100vh;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   background-image: url({backgroundImg});
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   background-image: ${props => `url("./image/${props.bgImage}")`}
`

const ButtonGroup = styled.div`
   display: flex;
   margin-bottom: 30px;
   @media (max-width:768px){
      flex-direction: column;
   }
`

const LeftButton = styled.div`
   background-color: rgba(23,26,32,0.8);
   height: 40px;
   width: 256px;
   color: white;
   display: flux;
   justify-content: center;
   align-items: center;
   border-radius: 100px;
   opacity: 0.85;
   text-transform: uppercase;
   font-size: 12px; 
   cursor: pointer;
   magin: 8px;
`

const RightButton = styled(LeftButton)`
   background: white;
   opacity:0.65;
   color: black;
`
const DownArrow = styled.img`

margin-top: 20px;
height: 40px;
overflow-x: hiddene;
animation: animationDown infinite 1.5s;
`
const Buttons = styled.div`

`