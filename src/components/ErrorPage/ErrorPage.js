import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  color: rgb(62, 62, 62);
  font-size: 3.6rem;
`
const ContentWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 0.7;
`

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
`;

const ColoredSpan = styled.span`
  color:#92A8D1;
`;

const Hidden = styled.div`
  visibility: hidden;
  height: 8.7rem;
  width: auto;
`;

const ErrorPage = ({ history }) => {
    const onClick = () => {
        history.push('/');
    }
    return (
        <Container>
            <ContentWrapper>
                <Message>
                    <div><ColoredSpan>4</ColoredSpan>04</div>
                    <div><ColoredSpan>P</ColoredSpan>age Not Found</div>
                </Message>
                <Button onClick={onClick}>Go To Home<ColoredSpan>p</ColoredSpan>age</Button>
                <Hidden>Hidden</Hidden>
            </ContentWrapper>
        </Container>
    )
}

export default withRouter(ErrorPage);