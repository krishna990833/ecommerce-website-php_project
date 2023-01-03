import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  
`;

const Title = styled.h1`
font-size: 54px;
font-weight: 400;


`;

const Input = styled.input`
flex: 1;
min-width: 50%;
margin: 10px 0;
padding: 10px;
border-radius: 5px;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;

const Link = styled.a`
margin: 5px 0px;
font-size: 20px;
text-decoration: underline;
cursor: pointer;
`


const Button = styled.button`
width: 50%;
border: none;
padding: 15px 20px;
background-color: teal;
color:white;
cursor: pointer;
border-radius: 5px;
margin-bottom: 5px;


`;

const Login = () => {
  return (
    <Container>
    <Wrapper>
      <Title>Log In</Title>
      <Form>
      
        <Input placeholder="email" />
      
        <Input placeholder="password" />
       
      
        <Button>Login</Button>
        <Link href=''>Forget Password?</Link>
        <Link href=''>Create a Account</Link>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Login