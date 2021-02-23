import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPage = ({ history, location }) => {
    const [errorType, setErrorType] = useState("")
    const [provider, setProvider] = useState("")
    useEffect(() => {
        if (location.pathname.split('/')[1] === "error") {
            let params = new URL(window.location.href).searchParams
            console.log(params)
            setErrorType(params.get("type"))
            setProvider(params.get("provider"))
        }
        // new URL(window.location.href)
    }, [])
    const onClick = () => {
        history.push('/');
    }

    const Page404 = ()=>{
      return (
      <Message>
        <div><ColoredSpan>4</ColoredSpan>04</div>
        <div><ColoredSpan>P</ColoredSpan>age Not Found</div>
      </Message>
      )
    }

    const PageDuplicate = ()=>{
      return (
      <Message>
        <div style={{"font-size": "2rem"}}>{provider}계정과 동일한 계정이 이미 존재합니다</div>
      </Message>
      )
    }

    return (
        <Container>
            <ContentWrapper>
                {errorType === "duplicate" ? <PageDuplicate/> : <Page404/> }
                <Button onClick={onClick}>Go To Home<ColoredSpan>p</ColoredSpan>age</Button>
                <Hidden>Hidden</Hidden>
            </ContentWrapper>
            <Logo>
              <a href='/'>
                <span style={{ color: '#3E3E3E' }}>Pom</span>
                <span style={{ color: '#92A8D1' }}>p</span>
              </a>
            </Logo>
        </Container>
    )
}

const Container = styled.div`
  position:relative;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100vw;
  color: rgb(62, 62, 62);
  font-size: 3.6rem;
  padding: 0 2.2rem;
`
const ContentWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 0.7;
`
const Logo = styled.div`
width: 100%;
position: absolute;
bottom: 1.7rem;
font-family: 'carmen-exbold';
  a{
    line-height: initial;
    font-size: 1.4rem;
  }
`;

const Message = styled.div`
  font-family: carmen-bold;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Button = styled.button`
  width: 13.8rem;
  height: 2rem;
  font-family: carmen-bold;
  background-color:white;
  border: 1px solid #707070;
  border-radius: 1rem;
  color: rgb(62, 62, 62);
  cursor: pointer;
  margin-top: 2rem;
`;

const ColoredSpan = styled.span`
  color:#92A8D1;
`;

const Hidden = styled.div`
  visibility: hidden;
  height: 8.7rem;
  width: auto;
`;

export default withRouter(ErrorPage);