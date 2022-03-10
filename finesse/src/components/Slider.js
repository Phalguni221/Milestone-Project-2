import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from "styled-components"
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'

import SignIn from './SignIn'
import Register from './Register'
import Survey from './Survey'

// Container
// const Container = styled.div`
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     position: relative;
//     overflow: hidden;
//     background-color: pink;
//     position: relative;
// `;

//React styled component in use
const Container = styled.div `
  height: 60px;
  background-color: pink;
`

// //Parent-wrapper for nav 
// const Wrapper = styled.div `
//   padding: 10px 20px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// For Arrow style
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;



// Wrapper for Images
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

//For images, Title, Discriptions
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

//For Image Container
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;


const Image = styled.img`
  height: 80%;
`;

//For Info Container
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

//For Title
const Title = styled.h1`
  font-size: 70px;
`;

//For Discription
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;


//For Buttons
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: crimson;
  cursor: pointer;
`;



function Slider() {
  return (
    <Container>
      <Navbar/>
        <Arrow direction="left">
           <ArrowLeftOutlined/> 
        </Arrow>


          {/* to write slides */}
        <Wrapper>
            <Slide>

            <ImgContainer>
                <Image src="https://images.unsplash.com/photo-1644577584452-ea4d39b9dcf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2008&q=80"/>
            </ImgContainer>

            <InfoContainer>
                <Title>SUMMER TIME GOOD TIME</Title>

                <Desc>Summertime is beach time and  We have  hundreds of ways for you to enjoy your summer with Sun, Sand and Beach, Wanna Explore ?<br/>Why not !!!! <br/>Just click the Button Bellow to look our collection <br/>#HOTDAYS #FUNDAYS</Desc>

                <Button>Collection</Button>

            </InfoContainer>

            </Slide>
            
        </Wrapper>

        <Arrow direction="right">
           <ArrowRightOutlined/> 
        </Arrow>
     </Container>
  )
}

export default Slider
