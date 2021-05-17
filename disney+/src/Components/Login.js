import React from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components'

const Login = () => {
    const history = useHistory();

    const open = () => {
        history.push('/home');
    }

    return (
        <Container>
            <Content>
                <Logos>
                    <Logo1 src="/images/cta-logo-one.svg" alt="" />
                    <SingUp onClick={open}>OPEN</SingUp>
                    <Logo2 src="/images/cta-logo-two.png" alt="" />
                </Logos>
                <BgImage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    background-image: url('/images/login-background.jpg');
    height: 100%;
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Logos = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
`;

const Logo1 = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const SingUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover{
        background-color: #0483ee;
    }
`;

const Logo2 = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    margin-top: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;

export default Login
