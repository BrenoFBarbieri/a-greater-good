import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 30rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;

    margin-bottom: 10px;
    border-radius: 18px;

    overflow: hidden;
    background-color: #ff9f1c;

    :hover {
        box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 15rem;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    object-fit: cover;
    background-repeat: no-repeat;
`;

export const Content = styled.div`
    height: 15rem;

    display: flex;
    align-items: center;
    flex-direction: column;

    position: relative;

    padding: 20px;
`;

export const Info = styled.span`
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .02rem;
    line-height: 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fdfffc;
`;

export const Ref = styled.h4`
    margin: 0 0 10px 0;
    text-transform: uppercase;
    font-style: italic;
    font-size: 1rem;
    font-weight: 500;
    color: #011627;
`;

export const Button = styled.a`
    position: absolute;
    bottom: 20px;

    padding: 15px 20px;
    border: none;
    border-radius: 8px;

    font-size: 1rem;
    letter-spacing: 0.15rem;
    font-weight: bold;
    color: #fdfffc;

    background-color: #000;
    cursor: pointer;

    :hover {
        color: #ff9f1c;
    }
`;