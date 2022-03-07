import React from 'react'
import styled from 'styled-components'

//React styled component in use
const Container = styled.div `
  height: 60px;
  background-color: pink;
`

//Parent-wrapper for nav 
const Wrapper = styled.div `
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
flex:1;`
const Center = styled.div`
flex:1;`
const Right = styled.div`
flex:1;`


const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  `

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
          <Left>
            <Language>EN</Language>
            {/* <SearchContainer>
              input
              icon
            </SearchContainer> */}
          </Left>

          <Center>Center</Center>

          <Right>Right</Right>
          
          
      </Wrapper>
      
    </Container>
  )
}

export default Navbar
